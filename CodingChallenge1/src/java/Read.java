import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.stream.Stream;

public class Read {

    private static Comparator<Value> comparator = new Comparator<Value>() {
        @Override
        public int compare(Value v1, Value v2) {
            if(v1.getValue()> v1.getValue()){
                return 1;
            } else if (v2.getValue()>v1.getValue()) {
                return -1;
            }
            return 0;
        }
    };

    private ArrayList<Value> list = new ArrayList<>();


    public Read(){
        try{
            Stream<String> s = Files.lines(Path.of("src/words.txt"));
            String[] strings = s.toArray(String[]::new);
            ArrayList<Value> values = new ArrayList<>();
            for (String str: strings){
                values.add(new Value(str));
            }
            values.sort(comparator);
            setList(values);
            s.close();
        }catch (Exception IO){
            System.out.println("Did not find the words.txt file");
        }
    }

    public ArrayList<Value> getList() {
        return list;
    }

    public void setList(ArrayList<Value> list) {
        this.list = list;
    }

    public static void main(String[] args) {
        Read read = new Read();
        for (Value v: read.getList()){
            System.out.println(v.getName());
        }
    }
}

