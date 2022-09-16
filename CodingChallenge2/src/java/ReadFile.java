import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalTime;
import java.util.*;
import java.util.stream.Stream;

public class ReadFile {
    private ArrayList<Session> sessions;

    public void readMyFile(){
        try {
            Stream<String> lines = Files.lines(Path.of("src/resources/JavaConference2020.txt"));
            ArrayList<Session> linesOfSessions = new ArrayList<>();
            for (String s: lines.toArray(String[]::new) ){
                linesOfSessions.add(new Session(s));
            }
            this.setSessions(linesOfSessions);
            lines.close();

        }catch (Exception IO){
            System.out.println("Did not find JavaConference2020.txt");
        }
    }

    public List<Session> getSessions() {
        return sessions;
    }

    public void setSessions(ArrayList<Session> sessions) {
        this.sessions = sessions;
    }

    //Takes the first index and puts it to the tail of the list
    public static void cycle(List<Session> sessions){
        Session s = sessions.get(0);
        sessions.remove(0);
        sessions.add(s);
    }

    //Returns the length given the hours and minutes
    public static int length(int hours, int minutes){
        return 60*hours+minutes;
    }

    //Adds sessions in before lunch and returns a list of sessions
    public static List<Session> beforeLunch(List<Session> sessions){
        List<Session> result = new ArrayList<>();
        //Start time is 9
        LocalTime beforeLunch = LocalTime.of(9,0);

        //Lunch hour
        Session lunch = new Session();
        lunch.setTitle("lunch");
        lunch.setLength(60);

        while (true){
            for (Session s: sessions){
                //Calculate the remaining time
                int currentLength = length(beforeLunch.getHour(),beforeLunch.getMinute());
                int totalLength = length(12,0) - currentLength;

                //Checks to see if there is time to add in session
                if (totalLength>=s.getLength()){
                    s.setTime(new Time(beforeLunch.getHour(),beforeLunch.getMinute()));
                    result.add(s);
                    beforeLunch = beforeLunch.plusMinutes(s.getLength());
                }
            }
            //If time is equal to noon break else cycle and start over
            if (length(beforeLunch.getHour(),beforeLunch.getMinute())==length(12,0)){
                break;
            }else {
                beforeLunch = LocalTime.of(9,0);
                cycle(sessions);
                result.clear();
            }
        }
        //Adds lunch and then returns result
        lunch.setTime(new Time(beforeLunch.getHour(),beforeLunch.getMinute()));
        result.add(lunch);
        return result;
    }

    //Adds sessions in after lunch and returns a list of sessions
    public static List<Session> afterLunch(List<Session> sessions){
        List<Session> result = new ArrayList<>();
        //afternoon sessions start at 1
        LocalTime afterLunch = LocalTime.of(13,0);

        //Networking Event
        Session networking= new Session();
        networking.setTitle("Networking Event");

        while (true){
            for (Session s: sessions){
                //Calculate the remaining time
                int currentLength = length(afterLunch.getHour(),afterLunch.getMinute());
                int totalLength = length(17,0) - currentLength;

                //Checks to see if there is time to add in session
                if (totalLength>=s.getLength()){
                    s.setTime(new Time(afterLunch.getHour(),afterLunch.getMinute()));
                    result.add(s);
                    afterLunch = afterLunch.plusMinutes(s.getLength());
                }
            }
            //If the time is between 4-5 o clock break else cycle and start over
            if (length(afterLunch.getHour(),afterLunch.getMinute())==length(17,0)){
                break;
            } else if (length(afterLunch.getHour(),afterLunch.getMinute())>=length(16,0)) {
                break;
            } else {
                afterLunch = LocalTime.of(13,0);
                cycle(sessions);
                result.clear();
            }
        }
        //Add networking event and return the result
        networking.setTime(new Time(afterLunch.getHour(),afterLunch.getMinute()));
        result.add(networking);
        return result;
    }

    public static void main(String[] args) {
        ReadFile read = new ReadFile();
        read.readMyFile();
        List<Session> sessions = new ArrayList<>(read.getSessions());
        List<List<Session>> result = new ArrayList<>();


        while (!sessions.isEmpty()){
            List<Session> currentSessions = new ArrayList<>();

            //Before lunch
            currentSessions.addAll(beforeLunch(sessions));
            sessions.removeAll(currentSessions);

            //After lunch
            currentSessions.addAll(afterLunch(sessions));
            sessions.removeAll(currentSessions);

            //Adds in the track
            result.add(currentSessions);

        }


        //output Using Timeslot class
        ArrayList<ArrayList<Timeslot>> tracks = new ArrayList<>();
        for (List<Session> track: result){
            ArrayList<Timeslot> sessionList = new ArrayList<>();
            for (Session s : track){
                sessionList.add(new Timeslot(s.getTime(),s));
            }
            tracks.add(sessionList);
        }

        Display display = new Display();
        display.setTracks(tracks);
        display.display();
    }
}
