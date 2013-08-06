  $(function() {
    initialize();

    $('#show_map_bt').click(function(e){
      map.setMapTypeId('roadmap');
      map.setZoom(16);
      $(this).hide();
      $('#show_photo_bt').show();
      return false;
    });
    $('#show_photo_bt').click(function(e){
      map.setMapTypeId('satellite');
      map.setZoom(18);
      $(this).hide();
      $('#show_map_bt').show();
      return false;
    });

    $.localScroll.hash({
        target: '#content', // Could be a selector or a jQuery object too.
        queue:true,
        duration:1500
      });

    $('#navigation').localScroll();

    $(window).scroll(function (e) {
      s = $(window).scrollTop();
      console.log(s);
      i = 620;
      
      if((i-40) < s){
        $("#navigation").addClass('fixed-navigation-in');
      }
      if(i < s){
        $("#navigation").addClass('fixed-navigation');
      }
      if(i > s){
        $("#navigation").removeClass('fixed-navigation');
      }
      if((i-40) > s){
        $("#navigation").removeClass('fixed-navigation-in');
      }

     //  while (i < s) {
     //    $(".fixed-navigation").css("-webkit-transform","translateY(" +  (s/6)  + "px)");

     //    if (i == 700) {
     //     break;
     //   }
     //   i += 1;
     // }

   });


  });

// google maps
function initialize() {
  var myLatlng = new google.maps.LatLng(46.526212 , 6.622226);
  var myOptions = {
    zoom: 18,
    center: myLatlng,
    panControl: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.LEFT_CENTER
    },
    scaleControl: false,
    scrollZoom:false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

  var marker = new google.maps.Marker({
    position: myLatlng, 
    map: map,
    title:""
  }); 
}