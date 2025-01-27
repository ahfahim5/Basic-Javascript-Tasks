function getCount(str){
    var vowelsCount = 0;
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];
    for(let char of str){
        if(vowels.includes(char)){
            vowelsCount++
        }
    }
    console.log(vowelsCount);
    return vowelsCount;
};
getCount(prompt("Enter your word:"));
// getCount('Hello World');
