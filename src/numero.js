
//Regular Function
function numero(num) {
    if (num % 2 === 0) {
      console.log(num + " es par ");
    } else {
      console.log(num + " es impar");
    }
  }

//Arrow Function

const numero1 = (num) => {
    if (num % 2 === 0) {
      console.log(num + " es par ");
    } else {
      console.log(num + " es impar ");
    }
  };
  
numero(2);  // Output: 2 is even
numero1(3);  // Output: 3 is odd
