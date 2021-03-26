let nilaiTertinggi = (siswaArr) => {
    let output = {};
    for(let i = 0; i < siswaArr.length; i++) {
        let siswa = siswaArr[i];
        if(!(siswa.class in output)){
            output[siswa.class] = siswa;
        } else {
            //mengambil nama class yang sudah ada di dalam output
            let kelas = output[siswa.class];

            /* membandingkan skor siswa index ke-i
            dengan skor siswa yang sudah ada di output
            pada class yang sama */
            if(siswa.score > kelas.score){
                output[siswa.class] = siswa;
            }
        }
    }
    return output;
}

let listSiswa = [
    {
        name: 'Asep',
        score: 90,
        class: 'adonis'
    },
    {
        name: 'Ahmad',
        score: 85,
        class: 'vuejs'
    },
    {
        name: 'Regi',
        score: 74,
        class: 'adonis'
    },
    {
        name: 'Afrida',
        score: 78,
        class: 'reactjs'
    },
];

listSiswa2 = [
    {
        name: 'Bondra',
        score: 100,
        class: 'adonis'
    },
    {
        name: 'Putri',
        score: 76,
        class: 'laravel'
    },
    {
        name: 'Iqbal',
        score: 92,
        class: 'adonis'
    },
    {
        name: 'Tyar',
        score: 71,
        class: 'laravel'
    },
    {
        name: 'Hilmy',
        score: 80,
        class: 'vuejs'
    }
]

console.log(nilaiTertinggi(listSiswa));
console.log(nilaiTertinggi(listSiswa2));