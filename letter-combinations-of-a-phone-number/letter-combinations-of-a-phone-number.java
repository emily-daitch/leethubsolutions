class Solution {
    Map<Character, String> map;
    List<String> res;

    public List<String> letterCombinations(String digits) {
        
        res = new ArrayList<>();
        if(digits.length() == 0) return res;
        map = new HashMap<>();
        map.put('2', "abc");
        map.put('3', "def");
        map.put('4', "ghi");
        map.put('5', "jkl");
        map.put('6', "mno");
        map.put('7', "pqrs");
        map.put('8', "tuv");
        map.put('9', "wxyz");
        solve("", 0, digits, digits.length());
        return res;
    }

    public void solve(String s, int ind, String digit, int len) {
        if(s.length() == len) {
            res.add(s); return;
        }
        char ch = digit.charAt(ind);
        String str = map.get(ch);
        //"backtracking"
        for(int i=0; i < str.length(); i++) {
            //recursion
            solve(s + str.charAt(i), ind + 1, digit, len);
        }
    }
}