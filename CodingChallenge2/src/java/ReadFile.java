import java.nio.file.Files;
import java.nio.file.Path;
import java.time.LocalTime;
import java.util.*;
import java.util.stream.Stream;

public class ReadFile {
    private ArrayList<Session> sessions;

    private static Comparator<Session> comparator = new Comparator<Session>() {
        @Override
        public int compare(Session s1, Session s2) {
            if(s1.getTime().getHours()> s2.getTime().getHours()){
                return 1;
            } else if (s2.getTime().getHours()>s1.getTime().getHours()) {
                return -1;
            } else if (s1.getTime().getMinutes()>s2.getTime().getMinutes()) {
                return 1;
            } else if (s2.getTime().getMinutes()>s1.getTime().getMinutes()) {
                return -1;
            }
            return 0;
        }
    };

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

    public static void cycle(List<Session> sessions){
        Session s = sessions.get(0);
        sessions.remove(0);
        sessions.add(sessions.size()-1,s);
    }

    public static int length(int hours, int minutes){
        return 60*hours+minutes;
    }

    public static List<Session> beforeLunch(List<Session> sessions){
        List<Session> result = new ArrayList<>();
        LocalTime beforeLunch = LocalTime.of(9,0);

        Session lunch = new Session();
        lunch.setTitle("lunch");
        lunch.setLength(60);

        while (true){
            for (Session s: sessions){
                int currentLength = length(beforeLunch.getHour(),beforeLunch.getMinute());
                int totalLength = length(12,0) - currentLength;
                if (totalLength>=s.getLength()){
                    s.setTime(new Time(beforeLunch.getHour(),beforeLunch.getMinute()));
                    result.add(s);
                    beforeLunch = beforeLunch.plusMinutes(s.getLength());
                }
            }
            if (length(beforeLunch.getHour(),beforeLunch.getMinute())==length(12,0)){
                break;
            }else {
                beforeLunch = LocalTime.of(9,0);
                cycle(sessions);
                result.clear();
            }
        }
        lunch.setTime(new Time(beforeLunch.getHour(),beforeLunch.getMinute()));
        result.add(lunch);
        return result;
    }

    public static List<Session> afterLunch(List<Session> sessions){
        List<Session> result = new ArrayList<>();
        LocalTime afterLunch = LocalTime.of(13,0);

        Session networking= new Session();
        networking.setTitle("Networking Event");
        networking.setLength(60);

        while (true){
            for (Session s: sessions){
                int currentLength = length(afterLunch.getHour(),afterLunch.getMinute());
                int totalLength = length(17,0) - currentLength;
                if (totalLength>=s.getLength()){
                    s.setTime(new Time(afterLunch.getHour(),afterLunch.getMinute()));
                    result.add(s);
                    afterLunch = afterLunch.plusMinutes(s.getLength());
                }
            }
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

            currentSessions.addAll(beforeLunch(sessions));
            sessions.removeAll(currentSessions);

            currentSessions.addAll(afterLunch(sessions));
            sessions.removeAll(currentSessions);

            result.add(currentSessions);

        }
        
        for (List<Session> day: result){
            day.sort(comparator);
            for(Session s: day){
                System.out.println(s.getTime() + " " + s);
            }
            System.out.println(day.size());
            System.out.println("\n\n");
        }
    }
}
