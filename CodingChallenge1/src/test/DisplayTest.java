import org.junit.jupiter.api.*;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

class DisplayTest {
    static Display display;
    static Read read;

    @BeforeAll
    static void beforeAll() {
        display = new Display();

    }

    @Test
    void isDisplaying() {
        assertNotNull(display);
    }

    @Test
    void isSecondDisplaying(){
        display.secondDisplay();
        assertNotNull(display);
    }

    @AfterEach
    void tearDown() {
    }
}
