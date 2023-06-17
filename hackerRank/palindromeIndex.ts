function palindromeIndex(s: string): number {
    // Write your code here
    // recursive method hits max call stack size exceeded on larger test cases : (
    // function reverseString(str: string): string {
    //     if (str === "") // This is the terminal case that will end the recursion
    //         return "";
    //     else
    //         return reverseString(str.substr(1)) + str.charAt(0);
    // }
    function reverseString(str: string): string {
        var newString = "";
        for (var i = str.length - 1; i >= 0; i--) {
            newString += str[i];
        }
        return newString;
    }
    
    function isPalindrome(s: string): boolean {
        let r = s.slice();
        r = reverseString(r);
        return s === r;
    }
    
    let st: number = 0;
    let end: number = 0;
    for(st = 0, end = s.length - 1; st < end; st++, end--){
        if(s[st] != s[end]) break;
    }
    if(st >= end) return -1;
  
    let s1: string = s;
    let s2: string = s;
  
    s1 = s1.slice(0, st) + s1.slice(st+1);
    if(isPalindrome(s1)) return st;
  
    s2 = s2.slice(0, end) + s2.slice(end+1);
    if(isPalindrome(s2)) return end;
    return -1;

}
