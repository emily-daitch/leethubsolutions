function processData(input) {
    let resultStack = []; // since the judgement is only off of what we print, 
    // we do not need to maintain an actual string of the editor status
    // instead we keep an array of the string segments and s for the current string being acted on
    
    input = input.split('\n');
    let s = '';
    resultStack.push(s);
    for(let i = 1 ; i < input.length; i++){
       let operations = input[i].split(' ');
       let oper = operations[0];
       
       if(parseInt(oper) === 1) {
           // append
           let second = operations[1];
           s+=second;
           resultStack.push(s);
       }
       if(parseInt(oper) === 2) {
            // delete
            let second = operations[1];
            s = s.slice(0 , parseInt(second) * -1);
            resultStack.push(s);   
       }
       if(parseInt(oper) === 3) {
           // print
           let second = operations[1];
           console.log(s[parseInt(second) - 1]);      
       }
       if(parseInt(oper) === 4) {
           // undo
           //console.log('undo');
           resultStack.pop();
           s = resultStack[resultStack.length - 1];
       }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
