
// bai 5
// let n = 10;

// let n = 500;
// let c = true;
// if (n < 2 ) {
//     c = false;
// } else if (n == 2) {
//    c = false;
// } else if (n %2) {
//     c= true;
    
// } else {
//     for (let index = 3; index < Math.sqrt(n); index+=2) {
//         if (n % index == 0) {
//             c = false;
//             break;
//         }
        
//     }
// }
// if (c == true) {
//     console.log('n la so nguyen to');
// } else {
//     console.log('n khong phai la so nguyen to');  
// }
// let sum = 0;
// let n = 5;
// for (let i = 1; i <= n; i+=2) {
//     sum += i ;

    
// }
// console.log(sum);
// function isName() {
//     console.log('Toi di code dao');
// }
// isName();
// function SUM(a ,b) {
//     console.log('Tong cua a va b la', a + b);
// }
// SUM (99 , 1)
// function Sum(a , b , c) {
//     return a + b + c;
// }
// let result = Sum(1, 2 ,3 )
// console.log('Tong la', result);
// bai1
// function checkPrime(n) {
// let c = true;
// if (n < 2 ) {
//     c = false;
// } else if (n == 2) {
//    c = false;
// } else if (n %2) {
//     c= true;
    
// } else {
//     for (let index = 3; index < Math.sqrt(n); index+=2) {
//         if (n % index == 0) {
//             c = false;
//             break;
//         }
        
//     }
// }
// if (c == true) {
//     console.log('n la so nguyen to');
// } else {
//     console.log('n khong phai la so nguyen to');
// }
// }
// checkPrime(503);
// bai7
// function checkOdd(n) {
//     let sum = 0;
//     for (let index = 1; index < n; index+=2) {
       
        
//     }
// }
// checkOdd(10);
//  bai 3
// function printEvent(n) {
//     for (let index = 0; index < n; index+=2) {
//         console.log(index);
        
//     }
// }
// printEvent(20);
// bai 2
// function printOdd(n) {
//     for (let index = 1; index < n; index+=2) {
//         console.log(index);
        
//     }
// }
// printOdd(20);
// bai1
// function printNumber(n) {
//     for (let index = 0; index <= n; index++) {
//         console.log(index);
        
//     }
// }
// printNumber(10);
// function checkOddNumberForm(n) {
//     let check = true;
//     if (n % 2 == 0) {
//         check = false;
//     }else {
//         for (let index = 1; index < n; index+=2) {
//            if (n % index == 0) {
//                check = true;
//            }
            
//         }
//     }
// }
// if (check = true) {
//     console.log("Yes");
// } else {
//    console.log("No"); 
// }
// checkOddNumberForm(131);





// Number
// convert, checknumber, math, random

// convert : chuyển từ số sang chuỗi và ngược lại
// let a = 123456;
// console.log(a + "");


// Kiểm tra có phải là số hay không
// console.log(number("Hiep"));
// kiểm tra số đó không phải là số

// Các hàm toán học: floor, round 
// let a = 3.6;
// console.log(Math.random(a));
// function getRandom(max, min) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandom(6, 1));
// function getRandom(max, min) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandom(6, 1));

// STRING
// let str = "Toi la Hiep";
// let str2 = 'Toi la Hiep';
// console.log("viet hoa tat ca", str.toUpperCase());
// console.log("Viet thuong tat ca", str2.toLowerCase);
// console.log("indexOf", str.indexOf('v'));// search  trả về vị trí nếu có và trả về -1 nếu ko 
// console.log("slice", str.slice(2, 9));// cắt chuỗi lấy cả 2 ko lấy 9
// console.log("subString", str.substring(2, 9));
// console.log("replace", str.replace("a" , 'u'));// Thay vị trí có a bằng u
// console.log("replaceAll", str.replanceAll("a", "monkey"));// thay hết 1 ký từ thành 1 từ hoặc vân vân
// console.log("includes", str.includes("a"));// Tìm kiểm xem có không và trả về kiểu dữ liệu boolen


// Chuẩn hóa string
// function toUpper(str) {
//     return str
//         .toLowerCase()
//         .split(' ')
//         .map(function(Word) {
//             return Word[0].toUpperCase() + Word.substr(1);
//         })
//         .join(' ');
//      }
//      console.log(toUpper("tRan tUan anH"))
//      function CapitlizeString(Word) 
// {
//     return Word.charAt(0).toUpperCase() + Word.slice(1);
// }
// console.log(("tRan tUan anH"));

