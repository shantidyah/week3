function pasanganTerbesar(num) {
    var number=[];
    var a=[];
    var b=0;
    num=num.toString();
    num.split('');
    for(i=0;i<(num.length-1);i++){
      a.push(parseInt(num[i]+num[i+1]));
    }
    return Math.max.apply(null, a);
//     for(i=0;i<num.length;i++){
//       number.push(parseInt(num[i]));
//     }
//     for(j=0;j<number.length;j++){
//       a=
//     }
//  return number;




}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
