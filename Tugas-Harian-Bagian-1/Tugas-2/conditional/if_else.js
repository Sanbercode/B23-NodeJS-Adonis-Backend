var nama = "John";
var peran = "rakjel";

if(nama == ""){
    console.log("Nama harus Diisi")
} else if(nama != "" && peran == ""){
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
} else if(nama != "" && peran.toLowerCase() == "penyihir" ){
    console.log("Selamat datang di dunia werewolf " + nama + "\nHalo " + peran + " " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!");
} else if(nama != "" && peran.toLowerCase() == "werewolf"){
    console.log("Selamat datang di dunia werewolf " + nama + "\nHalo " + peran + " " + nama + ", kamu dapat memilih siapa untuk dimakan malam ini!");
} else if(nama != "" && peran.toLowerCase() == "guard"){
    console.log("Selamat datang di dunia werewolf " + nama + "\nHalo " + peran + " " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.");
} else {
    console.log("Pilihan hanya bisa penyihir/werewolf/guard");
}