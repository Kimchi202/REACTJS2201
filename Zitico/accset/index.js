
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

// convert : chuy???n t??? s??? sang chu???i v?? ng?????c l???i
// let a = 123456;
// console.log(a + "");


// Ki???m tra c?? ph???i l?? s??? hay kh??ng
// console.log(number("Hiep"));
// ki???m tra s??? ???? kh??ng ph???i l?? s???

// C??c h??m to??n h???c: floor, round 
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
// console.log("indexOf", str.indexOf('v'));// search  tr??? v??? v??? tr?? n???u c?? v?? tr??? v??? -1 n???u ko 
// console.log("slice", str.slice(2, 9));// c???t chu???i l???y c??? 2 ko l???y 9
// console.log("subString", str.substring(2, 9));
// console.log("replace", str.replace("a" , 'u'));// Thay v??? tr?? c?? a b???ng u
// console.log("replaceAll", str.replanceAll("a", "monkey"));// thay h???t 1 k?? t??? th??nh 1 t??? ho???c v??n v??n
// console.log("includes", str.includes("a"));// T??m ki???m xem c?? kh??ng v?? tr??? v??? ki???u d??? li???u boolen


// Chu???n h??a string
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

