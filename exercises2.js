function balikString(kata){
var balik=[];
  for(a=1;a<=kata.length;a++){
    balik.push(kata[kata.length-a]);
  }
  return (balik.join(''));
}
console.log(balikString("hello world!"));
