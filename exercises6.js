function angkaPalindrome(num) {
  var a=false;

  while(a==false){
    num+=1;
    var b=num.toString().split('').reverse().join('');
    if(num==b){
      a=true;
    }
  }
  return num;

}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
