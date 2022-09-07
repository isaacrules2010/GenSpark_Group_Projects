import java.nio.file.Files;
import java.nio.file.Path;
import java.util.stream.Stream;

public class Read {


    public static void readFile(){
        try{
            Stream<String> s = Files.lines(Path.of("src/words.txt"));
            String[] strings = s.toArray(String[]::new);
            for (String str: strings){
                System.out.println(str);
            }
            s.close();
        }catch (Exception IO){
            System.out.println("Did not find the words.txt file");
        }
    }

    public static void main(String[] args) {
        readFile();
    }
}

