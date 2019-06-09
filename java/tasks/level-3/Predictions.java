import java.io.*;
//Use the keyboard to separately enter the name, number1, and number2. 
//Display the following phrase:
//<name> will receive <number1> in <number2> years.

public class Predictions {
    public static void main(String[] args) throws Exception {
        InputStream inputStream = System.in;
        Reader inputStreamReader = new InputStreamReader(inputStream);
        BufferedReader bufferedReader = new BufferedReader(inputStreamReader);
        String sInt1 = bufferedReader.readLine();
        String sInt2 = bufferedReader.readLine();
        String name = bufferedReader.readLine();
        int num1 = Integer.parseInt(sInt1);
        int num2 = Integer.parseInt(sInt2);
        System.out.println(name + " will receive " + num1 + " in " + num2 + " years.");
    }
}