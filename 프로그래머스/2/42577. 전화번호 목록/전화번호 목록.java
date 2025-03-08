//학번: 22211990 이름: 이소희

import java.util.*;
class Solution {
    public boolean solution(String[] phone_book) {
        Arrays.sort(phone_book);

        for(int i=0; i<phone_book.length-1; i++){
            String number = phone_book[i];
            int number_length = number.length();

            String nextNumber = phone_book[i+1];
            if(number_length == 1 && number.charAt(0) == nextNumber.charAt(0)){
                return false;
            }
            if(number_length > 1 && number.charAt(1) == nextNumber.charAt(1)){
                if(number_length > nextNumber.length())
                  continue;
                String str = nextNumber.substring(0 , number_length);
                if(str.equals(number)){
                    return false;
                }
            }
        }  
        boolean answer = true;
        return answer;

    }
}