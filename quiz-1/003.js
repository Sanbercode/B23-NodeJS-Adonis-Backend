let tandaiA = (param) => {
    let output = '';
    for(let i = 0; i < param.length; i++) {
        output += param[i] === 'a' || param[i] === 'A' ? 'x' : param[i];
    }
    return output;
}

console.log(tandaiA("abrakadabra")) // xbrxkxdxbrx
console.log(tandaiA("garuda")) // gxrudx
console.log(tandaiA("kucing")) // kucing