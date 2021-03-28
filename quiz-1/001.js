let kelompokAngka = (arr) => {
    let output = [
        [],
        [],
        []
    ];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            if(arr[i] % 3 === 0){
                output[2].push(arr[i]);
            } else {
                output[0].push(arr[i]);
            }
        } else if (arr[i] % 2 === 0) {
            if(arr[i] % 3 === 0){
                output[2].push(arr[i]);
            } else {
                output[1].push(arr[i]);
            }
        }
    }
    return output;
}

console.log(kelompokAngka([1,2,3,4,5,6,7]));
console.log(kelompokAngka([13,27,11,15]));
console.log(kelompokAngka([]));
