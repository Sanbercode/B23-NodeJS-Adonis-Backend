let shoppingTime = (memberId, money) => {
    let listBarang = [
        ['Sepatu Stacattu', 1500000],
        ['Baju Zoro', 500000],
        ['Baju H&N', 250000],
        ['Sweater Unikloh', 175000],
        ['Casing Handphone', 50000]
    ];

    let temp = [];
    let output = {};
    let uangSisa = money;
    for(let i = 0; i < listBarang.length; i++) {
        if(!memberId){
            return "Mohon Maaf, toko X hanya berlaku untuk member saja";
        } else if (money < listBarang[4][1]){
            return "Mohon Maaf, uang tidak cukup";
        }

        if(uangSisa >= listBarang[i][1]){
            uangSisa -= listBarang[i][1];
            temp.push(listBarang[i][0]);
        }
        output.memberId = memberId;
        output.money = money;
        output.listPurchased = temp;
        output.uangSisa = uangSisa;
    }
    return output;
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));

