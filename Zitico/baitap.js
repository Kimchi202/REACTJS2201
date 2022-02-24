//  function Cancel(str) {
//     let str1 = str.split(" ")
//     let str2 = str1.join('')
//     return str2
// }
// console.log(Cancel("Hello World"));

// function reverseString(str) {
//     let str1 = str.split("");
//     let str2 = str1.reverse();
//     let str3 = str2.join('');
//     return str3
// }
// console.log(reverseString("This is the beautiful day"));
// const toNomalName = (name) => {
//     name = name.toLowerCase();
//     for (let i = 0; i < name.length; i++) {
//       if (i == 0 || name.charAt(i - 1) == " ") {
        
          
//           name.slice(0, i),
          
//           name.charAt(i).toUpperCase(),
          
//           name.slice(i + 1)
        
//         name =
//           name.slice(0, i) + name.charAt(i).toUpperCase() + name.slice(i + 1);
//       }
//     }
//     return name;
//   };
  
//   console.log(toNomalName("NguyeN Thi tHu hA"));
// function cupString(str) {
//     let str1 = str.slice(25,40);
//     let str2 = str1.replace("." , "");
//     return str2
// }
// console.log(cupString("https://www.facebook.com/xuanhiep.nghiem.184/"))


// function checkString(str1, str2) {
//     str1 = "Hello      world   "
//     str2 = " "
// }
// console.log(str1.split(str2).length - 1);