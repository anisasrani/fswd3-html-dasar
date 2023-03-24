// membuat variabel 
var namaSaya = "Rani";
var umur_saya = 21;
var IPK1 = "3,84";
var _mahasiswa = true;

// mengetahui tipe data dr variabel
console.log (typeof namaSaya);
console.log (typeof umur_saya);
console.log (typeof IPK1);
console.log (typeof _mahasiswa);

// memanggil variabel
document.write('Nama saya adalah ' + namaSaya + '<br>');
document.write('Umur saya ' + umur_saya + '<br>');
document.write('IPK saya ' + IPK1 + '<br>');
document.write('Status Mahasiswa ' + _mahasiswa + '<br>');

// nyoba innerHTML
var hasil = document.getElementById("output");
hasil.innerHTML = "<h5> Hello, teks ini menggunakan innerHTML </h5>";
