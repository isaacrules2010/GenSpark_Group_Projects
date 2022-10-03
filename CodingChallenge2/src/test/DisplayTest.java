import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class DisplayTest {
    Display display;

    @BeforeEach
    void setUp() {
        display = new Display();
    }

    @Test
    void isDisplaying() {
        display.display();
        assertNotNull(display);
    }

    @AfterEach
    void tearDown() {

    }
}
