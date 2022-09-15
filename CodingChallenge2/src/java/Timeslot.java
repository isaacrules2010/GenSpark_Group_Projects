import java.util.ArrayList;

public class Timeslot {
    Time time;
    Session session;
    ArrayList<Session> sessionList;

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public Session getSession() {
        return session;
    }

    public void setSession(Session session) {
        this.session = session;
    }

    public ArrayList<Session> getSessionList() {
        return sessionList;
    }

    public void setSessionList(ArrayList<Session> sessionList) {
        this.sessionList = sessionList;
    }
    public Timeslot(){
        super();
    }

    public Timeslot(Time time, Session session) {
        this.time = time;
        this.session = session;
    }

    @Override
    public String toString() {
        return "Timeslot{" +
                "time=" + time +
                ", session=" + session +
                '}';
    }
}
