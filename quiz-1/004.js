let graduate = (arr) => {
    let output = {
        mastered: [],
        completed: [],
        participated: []
    };
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].score > 85) {
            output['mastered'].push(arr[i]);
        } else if (arr[i].score <= 85 && arr[i].score >= 60) {
            output['completed'].push(arr[i]);
        } else if (arr[i].score < 60) {
            output['participated'].push(arr[i]);
        }
    }
    return output;
}

let arr = [

    {name:"Ahmad",score:80},

    {name:"Regi",score:86},

    {name:"Robert",score:59},

    {name:"Bondra",score:81}

];

console.log(graduate(arr));