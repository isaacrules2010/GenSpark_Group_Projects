import org.junit.jupiter.api.*;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;

class ReadTest {

    Read read;
    @BeforeEach
    void setUp() {
        read = new Read();
    }

    @Test
    void sortData() {
        boolean isSorted = true;
        ArrayList<Value> list = read.getList();
        for (int i =1;i<list.size();i++){
            if (list.get(i).getValue()<list.get(i-1).getValue()){
                isSorted=false;
                break;
            }
        }
        assertTrue(isSorted,"The data did not sort");
    }

}