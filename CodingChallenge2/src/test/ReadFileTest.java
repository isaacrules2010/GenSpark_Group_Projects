import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ReadFileTest {

    ReadFile read;
    @BeforeEach
    void setup(){
        read = new ReadFile();
    }

    @Test
    void cycle(){
        read.readMyFile();
        String result = read.getSessions().get(0).getTitle();
        ReadFile.cycle(read.getSessions());
        assertEquals(result,read.getSessions().get(read.getSessions().size()-1).getTitle(), "Test Cycle Failed");
    }

    @Test
    void length(){
        assertEquals(390,ReadFile.length(6,30),"Length function failed");
    }

    @Test
    void beforeLunch(){
        read.readMyFile();
        List<Session> sessions = ReadFile.beforeLunch(read.getSessions());
        assertFalse(sessions.isEmpty(),"Before Lunch Failed");
    }

    @Test
    void afterLunch(){
        read.readMyFile();
        List<Session> sessions = ReadFile.afterLunch(read.getSessions());
        assertFalse(sessions.isEmpty(),"Before Lunch Failed");
    }

}