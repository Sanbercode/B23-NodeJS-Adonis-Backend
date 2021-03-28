let hitungVokal = (param) => {
    let output = 0;
    let vokal = ['a', 'i', 'u', 'e', 'o'];
    let paramLwr = param.toLowerCase();

    for(let i = 0; i < paramLwr.length; i++) {
        if(vokal.indexOf(paramLwr[i]) !== -1){
            output++;
        }
    }
    return output;
}

console.log(hitungVokal("adonis"));
console.log(hitungVokal("Error")); //Output:2
console.log(hitungVokal("Eureka"));//Output:4
console.log(hitungVokal("Rsch")); // Output: 0