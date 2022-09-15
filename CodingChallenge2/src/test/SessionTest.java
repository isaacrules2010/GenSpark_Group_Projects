import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class SessionTest {

    Session test;

    @BeforeEach
    void setUp(){
        test = new Session();
        test.setSession("Java and Containers - Make it Awesome!    45min");
    }

    @Test
    void getTime() {
        test.setTime(new Time(30));
        assertEquals(30, test.getTime().getMinutes(), "GETTIME() - FAILURE");
    }

    @Test
    void getLength() {
        assertEquals(45, test.getLength(), "Parsing of LENGTH from String FAILURE");
    }

    @Test
    void setLength() {
        test.setLength(60);
        assertEquals(60, test.getLength(), "SETTIME() - FAILURE");
    }

    @Test
    void getTitle() {
        assertEquals("Java and Containers - Make it Awesome!", test.getTitle(), "Parsing of TITLE from String FAILURE");
    }

    @Test
    void setTitle() {
        test.setTitle("Jingus");
        assertEquals("Jingus", test.getTitle(), "SETTITLE() - FAILURE");
    }
}