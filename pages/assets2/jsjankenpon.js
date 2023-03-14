let mulai = confirm("Selamat Datang di Jankenpon");
if (mulai == true) {
    let lanjut = confirm("Mulai permainan?");
    if (lanjut == true) {
        let nama = prompt("Kenalan dulu yuk");
        let salam = alert("Halo " + nama);
        let suit = prompt("Yuk pilih senjata kamu : Batu? Gunting? Kertas?");
        if (suit=='batu'){
            let teks1 = alert("Komputer : Kertas \n Kamu KALAH");
        }else if (suit=='gunting'){
            let teks2 = alert("Komputer : Kertas \n Kamu MENANG");
        }else if (suit=='kertas'){
            let teks3 = alert("Komputer : Kertas \n IMBANG");
        }else{
            let teks4 = alert("Kamu tidak memilih");
        }
    } else {
        alert("Terima Kasih");
    }
}