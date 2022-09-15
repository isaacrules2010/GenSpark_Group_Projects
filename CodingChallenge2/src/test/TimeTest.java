import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class TimeTest {
    Time test;

    @BeforeEach
    void setUp() {
    }

    @Test
    void get24() {
        test = new Time(60);
        assertEquals("01:00", test.get24(), "GET24() - Constructor by Minutes FAILURE");
        test = new Time(1, 30);
        assertEquals("01:30", test.get24(), "GET24() - Constructor by Hours & Minutes FAILURE");
    }

    @Test
    void get12() {
        test = new Time(60);
        assertEquals("01:00 AM", test.get12(), "GET12() - FAILURE");
        test = new Time(18, 30);
        assertEquals("06:30 PM", test.get12(), "GET12() - AM/PM rollaround FAILURE");
    }

    @Test
    void getHours() {
        test = new Time(60);
        assertEquals(1, test.getHours(), "GETHOURS() - FAILURE");
    }

    @Test
    void getMinutes() {
        test = new Time(75);
        assertEquals(15, test.getMinutes(), "GETMINUTES() - FAILURE");
    }

    @Test
    void addTime() {
        test = new Time();
        test.addTime(30);
        assertEquals(30, test.getMinutes(), "ADDTIME() - ADD FAILURE");
        test.addTime(30);
        assertEquals(0, test.getMinutes(), "ADDTIME() - minutes rollaround FAILURE");
        assertEquals(1, test.getHours(), "ADDTIME() - minute rollaround hour addition FAILURE");
        test.addTime(1380);
        assertEquals(0, test.getMinutes(), "ADDTIME() - minutes > 24hrs rollaround FAILURE");
        assertEquals(0, test.getHours(), "ADDTIME() - hours >= 24 rollaround FAILURE");
    }

    @AfterEach
    void tearDown() {
    }
}