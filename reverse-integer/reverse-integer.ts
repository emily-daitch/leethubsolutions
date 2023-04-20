function reverse(x: number): number {
    const strVersion: string = x.toString();
    console.log('strversion', strVersion);
    const reversed: string = strVersion.split("").reverse().join("");
    let fixed = reversed;
    if(reversed.slice(-1) === '-'){
        fixed = reversed.slice(-1) + reversed.slice(0, -1);
    }
    console.log('fixed', fixed);
    const finalNumber: number = Number(fixed);
    // in JS all numbers are 64 bit, so no need to do special things
    if(finalNumber > 2147483647 || finalNumber < -2147483648){
        return 0;
    }
    return finalNumber;
};