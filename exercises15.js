function groupAnimals(animals) {
  var a='';
  var b='';
  var array=[];
  var test=[];
  for(i=0;i<animals.length;i++){
  a+=animals[i].charAt(0);
  }
  for(j=0;j<a.length;j++){
    if(b.indexOf(a.charAt(j))==-1){
      b+=a[j];
    }
  }
  b=b.split('').sort();

  for(k=0;k<b.length;k++){
    test = [];
    for(l=0;l<animals.length;l++){
      if(animals[l].charAt(0)==b[k]){
        test.push(animals[l]);
      }
    }
    array.push(test);
  }
  return array;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
[ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
