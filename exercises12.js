function tentukanDeretGeometri(arr) {
  var a=[];
  var c='';
  for(i=0;i<(arr.length-1);i++){
    a.push(arr[i+1]/arr[i]);
  }
  c=a.join();
  if(c===c.split('').reverse().join('')){
    return true;
  }
  else{
    return false;
  }

}
