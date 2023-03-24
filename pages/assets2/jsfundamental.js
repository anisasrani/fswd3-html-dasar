//1. Variabel dan Tipe Data:

//Variabel 
var nama = "Rani";
let umur = 21;
const IPK = "3.84";

//Tipe Data
let nomor = 8; //Number
let teks = "Salam Kenal"; //String
let bool = true; //Boolean
let arr = {2.8.5.0.0.1}; //Array
let obj = {nama : "Rani", umur : 21}; //Object 

//2. Operator 
//Operator Arimatika
let x = 2;
let y = 8;
let a = x + y; //Penjumlahan
let b = x - y; //Pengurangan
let c = x * y; //Perkalian
let d = x / y; //Pembagian
let e = x % y; //Modulus

//Operator Perbandingan
let a = 5;
let b = 1;
console.log(a == b) //false
console.log(a > b) //true
console.log(a < b) //false
console.log(a != b) //true
console.log(a >= b) //true
console.log(a <= b) //false

//Operator Logical
let a = true;
let b = false;
console.log(a && b) //and
console.log(a || b) //or
console.log(a ! b) //negasi/kebalikan

//Operator Bitwise
let a = 00111100;
let b = 00001101;
console.log(a & b) //and
console.log(a | b) //or
console.log(a ^ b) //xor
console.log(a ~ b) //negasi
console.log(a << b) //left shift
console.log(a >> b) //right shift
console.log(a << b) //left shift (unsigned)
console.log(a >> b) //right shift (unsigned)

//Operator Ternary
let a = 20;
let b = 10;
console.log(a == b? 'yes' : 'no');