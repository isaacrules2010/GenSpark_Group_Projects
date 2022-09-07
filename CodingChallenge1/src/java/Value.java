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
        List<String> words = new ArrayList<String> (List.of(name.split("[\\s-]")));
        for(String word : words){
            words.set(words.indexOf(word), word.toLowerCase());
        }
        //System.out.println(words);
        if(words.contains("hundred")){
            value += numbers.get(words.get(0))*numbers.get(words.get(1));
            if(words.size() > 2){
                for (int i = 2; i < words.size(); i++){
                    value += numbers.get(words.get(i));
                }
            }
        }
        else{
            for(String word : words){
                value += numbers.get(word);
            }
        }
        //System.out.println(words);
    }

    public int getValue() {
        return value;
    }

    public String getName() {
        return name;
    }

    /*
    public static void main(String[] args) {
        Value test20 = new Value("Twenty-Five");
        System.out.println(test20.getName());
        System.out.println(test20.getValue());

        Value test200 = new Value("Nine Hundred Ninety-Nine");
        System.out.println(test200.getName());
        System.out.println(test200.getValue());
    }
    //*/
}
