public class Time {
    // Stores time (in 12h configuration) as an object with methods to check
    // time and check whether it's after noon or before
    private int hh;

    private int mm;

    public Time(){
        hh = 0;
        mm = 0;
    }

    public Time(int minutes){
        while(minutes >= 60){
            hh++;
            minutes -=60;
        }
        while(hh >= 24){
            hh-=24;
        }
        mm = minutes;
    }
    public Time(int hours, int minutes){
        hh = hours;
        mm = minutes;
        while(minutes >= 60){
            hours++;
            minutes -=60;
        }
        while(hh >= 24){
            hh-=24;
        }
    }

    public String get24(){
        return String.format("%02d", hh) + ":" + String.format("%02d", mm);
    }

    public String get12(){
        String ampm = "";
        int hours = this.hh;
        if(this.hh >= 12 && hours <= 24){
            if(hours!=24)
                ampm = "PM";
            hours-=12;
        }
        else if(hours == 24 || hours < 12){
            if(hours == 0)
                hours = 12;
            ampm = "AM";
        }
        return String.format("%02d", hours) + ":" + String.format("%02d", mm) + " " + ampm;
    }

    public int getHours() {
        return hh;
    }

    public int getMinutes() {
        return mm;
    }

    public void addTime(int minutes){
        mm+=minutes;
        while(mm >= 60){
            hh++;
            mm -=60;
        }
        while(this.hh >= 24){
            hh-=24;
        }
    }
}
