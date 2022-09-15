public class Session {
    private String title;
    private int length;
    private Time time;

    public Session(){ //creates empty session
        title = "empty";
        length = 0;
        time = new Time();
    }
    public Session(String session){ //creates a new session based on String (read from file)
        //should be length of 2
        setSession(session);
    }


    public void setSession(String session){ //sets session.title and session.length based on String (read from file)
        //should be length of 2
        String[] tmp = session.split("\\s\\s\\s\\s|\\t", 2);
        title = tmp[0];
        if(tmp[1].contains("lightning")){ //if "lightning" length = 5 min
            length = 5;
        }
        else{
            //should handle "30min", "30 minutes", "30m"...
            // essentially, as long as numbers come FIRST in time declaration
            length = Integer.parseInt(tmp[1].split("[A-Za-z\\s]")[0]);
        }
    }
    public String lengthString(){
        return String.format("%dmin, this.length");
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
