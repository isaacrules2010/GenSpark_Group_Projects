public class Display{
    Read read = new Read();

    public Display() {
        int n = read.getList().size();
        int columns = 2;
        int rows = (int) Math.ceil((double) n / columns);
        Value[][] out = new Value[rows][columns];
        int count = 0;
        for (int i = 0; i < columns; i++) {
            for (int j = 0; j < rows; j++) {
                if (count == read.getList().size()) {
                    break;
                }
                out[j][i] = read.getList().get(count);
                count++;
            }
        }
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                if (out[i][j] == null) {
                    break;
                }
                System.out.printf("%-20s", out[i][j].getName());
            }
            System.out.println();
        }
    }
    public void secondDisplay(){
        int n = read.getList().size();
        int columns = 3;
        int rows = (int) Math.ceil((double) n / columns);
        Value[][] out = new Value[rows][columns];
        int count = 0;
        for (int i = 0; i < columns; i++) {
            for (int j = 0; j < rows; j++) {
                if (count == read.getList().size()) {
                    break;
                }
                out[j][i] = read.getList().get(count);
                count++;
            }
        }
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                if (out[i][j] == null) {
                    break;
                }
                System.out.printf("%-25s", out[i][j].getName());
            }
            System.out.println();
        }
    }
    public static void main(String[]args){
        Display display = new Display();
        System.out.println();
        display.secondDisplay();

    }

}