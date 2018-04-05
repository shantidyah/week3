function tentukanDeretAritmatika(arr) {
  var b=[];
  var c="";
  for(i=0;i<(arr.length-1);i++){
    b.push(arr[i+1]-arr[i]);
  }
  c=b.join();
  if(c===c.split('').reverse().join('')){
    return true;
  }
  else{
    return false;
  }
//   return b;

//   if(b==b.reverse()){
//     return true;
//   }
//   else{
//     return false;
//   }
//   for(j=0;j<b.length;j++){
//     if(b[j]===b[j+1]){
//       return true;
//     }
//     else
//       return false;
//   }
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
