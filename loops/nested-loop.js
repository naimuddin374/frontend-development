// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     console.log(`idex i=${i}, 2nd index j=${j}`);
//     // console.log("idex i=" + i + ", 2nd index j=" + j);
//   }
//   console.log("=======================");
// }

/*
 **********
 **********
 **********
 **********
 **********
 **********
 **********
 **********
 **********
 **********
 */
// for (let i = 0; i < 10; i++) {
//   let str = "";
//   for (let j = 0; j < 10; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

/*
 *
 **
 ***
 ****
 *****
 ******
 *******
 ********
 *********
 **********
 */
// for (let i = 0; i < 10; i++) {
//   let str = "";
//   for (let j = 0; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

/*
============Assignment 1=============
1
12
123
1234
12345


=============Assignment 2============
*******
******
*****
****
***
**
*
 

============Assignment 3=============
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
*/

// for (let i = 5; i >= 0; i--) {
//   let str = "";
//   for (let j = 0; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

/***
 ******
 *****
 ****
 ***
 **
 *
 ***/

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= 5; j++) {
//     row += i + " ";
//     // i=1 => 1 1 1 1 1
//     // i=2 => 2 2 2 2 2
//     // i=3 => 3 3 3 3 3
//   }
//   console.log(row);
// }

/**
1 1 1 1 1 
2 2 2 2 2 
3 3 3 3 3 
4 4 4 4 4 
5 5 5 5 5 
 */

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += i + " ";
//   }
//   console.log(row);
// }

/**
1 
2 2 
3 3 3 
4 4 4 4 
5 5 5 5 5 
 */

let num = 1;
for (let i = 1; i <= 5; i++) {
  let tamim = "";
  for (let j = 1; j <= i; j++) {
    tamim += num + " ";
    num++;
  }
  console.log(tamim);
}

/**
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
*/
