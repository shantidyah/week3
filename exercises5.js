function palindrome(kata) {
  if(kata==kata.split('').reverse().join('')){
    return true;
  }
  else{
    return false;
  }
}

// function palindrome(kata) {
//   var balik=[];
//   var i=1;
//   for(i=1;i<=kata.length;i++){
//       balik.push(kata[kata.length-i]);
//   }

//   if(kata===balik.join('')){
//     return true;
//   }
//   else{
//     return false;
//   }
// }


// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
