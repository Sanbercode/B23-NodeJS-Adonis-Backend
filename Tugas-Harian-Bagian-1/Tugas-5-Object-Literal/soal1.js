let arrayToObject = (arr) => {
    let output = {};
    for(let i = 0; i < arr.length; i++){
        let year = (new Date()).getFullYear();

        let person = arr[i];

        let objPerson = {
            firstName: person[0],
            lastName: person[1],
            gender: person[2]
        }

        if(!person[3] || person[3] > year){
            objPerson.age = "Invalid Birth Year";
        } else {
            objPerson.age = year - person[3];
        }

        let fullName = `${objPerson.firstName} ${objPerson.lastName}`;
        console.log(`${i+1}. ${fullName}: `, objPerson);
    }
}

let people = [
    ["Bruce", "Banner", "male", 1975],
    ["Natasha", "Romanoff", "female", 2040]
];

arrayToObject(people);