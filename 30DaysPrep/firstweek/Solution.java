package firstweek;
public class Solution{
    
    public static String stringsXOR(String s, String t){
        String res = new String("");

        for(int i = 0; i < s.length(i)){
             if(s.charAt(i) == t.chartAt(i))
                res=res+ "0";
            else
                res=res+ "1";
                
        }
           
            
    }
}