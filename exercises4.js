var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
  input.splice(1,2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  input.splice(4,1, "Pria", "SMA Internasional Metro");
  console.log(input);
  var date=input[3].split('/');
  var bulan;
  switch (date[1]) {
    case "01":{
      bulan='JANUARI';
    break;
    }
    case "02":{
      bulan='FEBRUARI';
    break;
    }
    case "03":{
      bulan='MARET';
    break;
    }
    case "04":{
      bulan='APRIL';
    break;
    }
    case "05":{
      bulan='MEI';
    break;
    }
    case "06":{
      bulan='JUNI';
    break;
    }
    case "07":{
      bulan='JULI';
    break;
    }
    case "08":{
      bulan='AGUSTUS';
    break;
    }
    case "09":{
      bulan='SEPTEMBER';
    break;
    }
    case "10":{
      bulan='OKTOBER';
    break;
    }
    case "11":{
      bulan='NOVEMBER';
    break;
    }
    case "12":{
      bulan='DESEMBER';
    break;
    }
    default:{
      bulan='SALAH MEMASUKAN BULAN';
    }
  }

  console.log(bulan);

  date.sort(function(a, b){return b - a});
  console.log(date);

  console.log(date.join("-"));

  var nama = input[1].slice(0,15);
  console.log(nama);
}
dataHandling2(input);
