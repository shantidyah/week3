function targetTerdekat(arr) {
  var nilai=[];
  var xo=[];
  var nilaiterdekat=0;
  for(var i=0;i<arr.length;i++){
    if(arr[i]!=' '&&xo==[]){
      nilai.push(i);
      xo.push(arr[i]);
    }
    if(arr[i]!=' '&&arr[i]==xo[0]){
      nilai[0]=i;
    }
    if(arr[i]!=' '&&arr[i]!=xo[0]){
      nilai.push(i);
      xo.push(arr[i]);
    }

  }
  console.log(nilai);
  console.log(xo);
  nilaiterdekat=nilai[1]-nilai[0];
  if(isNaN(nilaiterdekat)){
    nilaiterdekat=0;
  }
  return nilaiterdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
