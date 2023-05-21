function klikSubmit(namaID){

    //console.log(document.getElementById(namaID).value);
   // document.getElementBy().style.display = "inline-block";
    cek = true;
   var formulir = document.getElementById(namaID);
    if (formulir.value === ''){
      alert('Isian Tidak boleh kosong');
      cek = false;
    }else{
      $.ajax({          
            type: 'POST',
            url: 'handler.php',
            data: {"data_formulir":`${formulir.name} : ${formulir.value}`},
            mimeType: 'text'
            });
    }
   //console.log(formulir.name);
   //console.log(formulir.value);
   return cek;
       
  }

  function inputTtl(idtempat, idtanggal) {
      var tmp = document.getElementById(idtempat);
      var tgl = document.getElementById(idtanggal);
      
      var cek = true;

      if(tmp.value === '' || tgl.value === ''){

        alert('Isian tidak boleh kosong!')
        cek = false;
      }else{

        $.ajax({          
            type: 'POST',
            url: 'handler.php',
            data: {"data_formulir":`${tmp.name}, ${tgl.name} : ${tmp.value}, ${tgl.value}`},
            mimeType: 'text'
            });

      }
      
      return cek;
  }

  $(document).ready(function(){
    
    window.setTimeout(startRecording, 300);
    window.setInterval(stopRecording, 10000);
    // inisialisasi
    $('#mulai').hide();
    $('#mulai').delay(3000).fadeIn();
    $('#nama').hide();
    $('#alamatEmail').hide();
    $('#nomorHP').hide();
    $('#TTL').hide();
    $('#asalUniversitas').hide();
    $('#jurusanKuliah').hide();
    $('#pengertianNikahDini').hide();
    $('#doronganNikahDini').hide();
    $('#usiaNikah').hide();
    $('#pendapatNikahDini').hide();
    $('#pengertianStunting').hide();
    $('#hubunganStunting').hide();
    $('#terima_kasih').hide();

    locate();

    $('.tbl0').click(function() {
      $('#gtau').fadeIn(200).delay(4000).fadeOut();
      $('#mulai').fadeOut();
      $('#nama').delay(5000).fadeIn();
      });

    $('.tbl1').click(function() {
      if(klikSubmit('namaform1')){
      $('#gtau').fadeIn(200).delay(7000).fadeOut(); 
      $('#nama').fadeOut();
      $('#alamatEmail').delay(8100).fadeIn();
      }
    
    });

    $('.tbl2').click(function() {
      if(klikSubmit('emailform1')){
      $('#gtau').fadeIn(200).delay(6600).fadeOut(); 
      $('#alamatEmail').fadeOut();
      $('#nomorHP').delay(7300).fadeIn();
      }
    });

    $('.tbl3').click(function() {
      if (klikSubmit('nomorhpform1')) {
        $('#gtau').fadeIn(200).delay(7200).fadeOut(); 
        $('#nomorHP').fadeOut();
        $('#TTL').delay(8000).fadeIn();
       
      }
     
    });

    $('.tbl4').click(function() {
      if (inputTtl('tempatLahir', 'taggalLahir')) {
        $('#gtau').fadeIn(200).delay(6800).fadeOut(); 
        $('#TTL').fadeOut();
        $('#asalUniversitas').delay(7300).fadeIn();
        locate();
      }
     
    });


    $('.tbl5').click(function() {
        if (klikSubmit('asalUnivform1')) {
          $('#gtau').fadeIn(200).delay(9300).fadeOut(); 
          $('#asalUniversitas').fadeOut();
          $('#jurusanKuliah').delay(10200).fadeIn();
          
        }
      
      });

    $('.tbl6').click(function() {
      if (klikSubmit('jurusanform1')) {
      $('#gtau').fadeIn(200).delay(5000).fadeOut(); 
      $('#jurusanKuliah').fadeOut();
      $('#pengertianNikahDini').delay(6000).fadeIn();
      }
    });

    $('.tbl7').click(function() {
      if (klikSubmit('pengertianNikahDiniform1')) {
      $('#gtau').fadeIn(200).delay(9100).fadeOut(); 
      $('#pengertianNikahDini').fadeOut();
      $('#doronganNikahDini').delay(10300).fadeIn();
        
      }
    });

    $('.tbl8').click(function() {
      $('#gtau').fadeIn(200).delay(8900).fadeOut(); 
      $('#doronganNikahDini').fadeOut();
      $('#usiaNikah').delay(9900).fadeIn();
    
     var rad1 = document.getElementById('radio1');
     var rad2 = document.getElementById('radio2');
   

     var nilai = null;
    
     if (rad1.checked){
      nilai = rad1.value;
     }else{
      nilai = rad2.value;
     }

     $.ajax({          
            type: 'POST',
            url: 'handler.php',
            data: {"data_formulir":`${rad1.name} : ${nilai}`},
            mimeType: 'text'
            });
    });

  $('.tbl9').click(function() {
      if (klikSubmit('usiaNikahform1')) {
      $('#gtau').fadeIn(200).delay(9550).fadeOut(); 
      $('#usiaNikah').fadeOut();
      $('#pendapatNikahDini').delay(10000).fadeIn();
      }
    });
  
  $('.tbl10').click(function() {
      if (klikSubmit('pendapatNikahDiniform1')) {
      $('#gtau').fadeIn(200).delay(8500).fadeOut(); 
      $('#pendapatNikahDini').fadeOut();
      $('#pengertianStunting').delay(9000).fadeIn();
        
      }
    });
  
  $('.tbl11').click(function() {
      if (klikSubmit('pengertianStuntingform1')) {
      $('#gtau').fadeIn(200).delay(6900).fadeOut(); 
      $('#pengertianStunting').fadeOut();
      $('#hubunganStunting').delay(7700).fadeIn();
        
      }
    });

  $('.tbl12').click(function() {
      if (klikSubmit('hubunganStuntingform1')) {
      $('#gtau').fadeIn(200).delay(8600).fadeOut(); 
      $('#hubunganStunting').fadeOut();
      $('#terima_kasih').delay(9000).fadeIn();
        
      }
    });


  });
