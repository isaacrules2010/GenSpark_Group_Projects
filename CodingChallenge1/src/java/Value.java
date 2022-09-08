import java.sql.Array;
import java.util.*;
import java.util.stream.Stream;

public class Value {
    /*
    * For now, why dont we just assume values less than one hundred?
    * If that works, THEN we can worry about handling values 100 - 999
    *
    * APPARENTLY
    */



    private int value;
    private String name;
    private static final Map<String,Integer> numbers = new HashMap<>();
    static {
        numbers.put("one",1);
        numbers.put("two",2);
        numbers.put("three",3);
        numbers.put("four",4);
        numbers.put("five",5);
        numbers.put("six",6);
        numbers.put("seven",7);
        numbers.put("eight",8);
        numbers.put("nine",9);
        numbers.put("ten",10);
        numbers.put("eleven",11);
        numbers.put("twelve",12);
        numbers.put("thirteen",13);
        numbers.put("fourteen",14);
        numbers.put("fifteen",15);
        numbers.put("sixteen",16);
        numbers.put("seventeen",17);
        numbers.put("eighteen",18);
        numbers.put("nineteen",19);
        numbers.put("twenty",20);
        numbers.put("thirty",30);
        numbers.put("forty",40);
        numbers.put("fifty",50);
        numbers.put("sixty",60);
        numbers.put("seventy",70);
        numbers.put("eighty",80);
        numbers.put("ninety",90);
        numbers.put("hundred",100);
        numbers.put("and",0);
    }


    public Value(String name){
        this.name = name;
        // splits the string using spaces and hyphens.
        // "one hundred and twenty-three" becomes [one, hundred, and, twenty, three]
        List<String> words = new ArrayList<String> (List.of(name.split("[\\s-]")));

        //converts all to lowercase, just for processing and assigning values
        for(String word : words){
            words.set(words.indexOf(word), word.toLowerCase());
        }

        // if the input is larger than 99, essentially.
        // handles "one hundred" thru "nine hundred ninety-nine"
        if(words.contains("hundred")){
            value += numbers.get(words.get(0))*numbers.get(words.get(1));
            if(words.size() > 2){
                for (int i = 2; i < words.size(); i++){
                    value += numbers.get(words.get(i));
                }
            }
        }
        // anything less than one hundred should be handled here
        // "and" has a value of zero, so, if its included, it should not affect output value
        else{
            for(String word : words){
                value += numbers.get(word);
            }
        }
    }

    // gets the value of the object. returns int;
    public int getValue() {
        return value;
    }

    // gets the name of the object. returns String;
    public String getName() {
        return name;
    }
}
