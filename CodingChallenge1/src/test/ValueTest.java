import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

class ValueTest {
    Value test;
    @BeforeEach
    void setUp() {
    }

    @Test
    void getValue() {
        //test lowercase name with hyphen
        test = new Value("twenty-five");
        assertEquals(25, test.getValue(), "failed to properly assign value 25 to \"twenty-five\"");
        //test lowercase name with spaces
        test = new Value("twenty five");
        assertEquals(25, test.getValue(), "failed to properly assign value 25 to \"twenty five\"");
        //test capitalized name
        test = new Value("Twenty-Five");
        assertEquals(25, test.getValue(), "failed to properly assign value 25 to \"Twenty-Five\"");
        //test all capitalized
        test = new Value("TWENTY FIVE");
        assertEquals(25, test.getValue(), "failed to properly assign value 25 to \"TWENTY FIVE\"");
        //test hundreds
        test = new Value("one hundred ninety-eight");
        assertEquals(198, test.getValue(), "failed to properly assign value 198 to \"one hundred ninety-eight\"");
    }

    @Test
    void getName() {
        test = new Value("Twenty");
        assertEquals("Twenty", test.getName(), "failed to properly assign name");
    }
    @AfterEach
    void tearDown() {
    }

}