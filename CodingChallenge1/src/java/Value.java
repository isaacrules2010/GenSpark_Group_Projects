import java.sql.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Value {
    /*
    * For now, why dont we just assume values less than one hundred?
    * If that works, THEN we can worry about handling values 100 - 999
    */



    private int value;
    private String name;

    List<String> ones = new ArrayList<String>(List.of("Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"));
    List<String> tens = new ArrayList<String>(List.of("", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"));
    public Value(String name){
        // value = tens.indexOf + ones.indexOf
    }

    public int getValue() {
        return value;
    }

    public String getName() {
        return name;
    }
}
