var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    view:{
        stackPage:true
    },
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: true,
    },
    // Add default routes
    routes: 
    [
      {
        path: '/profil/',
        url: 'profil.html',
      },
      {
        path: '/login/',
        url: 'index.html'
      },
      {
        path: '/home/',
        url: 'konten.html'
      },
      {
        path: '/booking/',
        url: 'booking.html'
      }
    ],
    // ... other parameters
  });
  
var mainView = app.views.create('.view-main');

var $$ = Dom7;
baca();
function baca(){
  app.request.json('http://localhost:8080/etiketkonser/db_latihan/booking.php', function(data) {
    var jlh = data.length;
    var i = 0;
    console.log(data);
    var buatTabel ="";
    for(i=0; i<jlh; i++) {
      buatTabel+= "<tr>" +
        "<td>" + (i+1)+"</td>" +
        "<td>" + data[i].nama_booking + "</td>"+
        "<td>" + data[i].email_booking + "</td"+
        "<td>" + data[i].tanggal_booking + "</td"+
        "</tr>";
    }
    $$('#tampil').html(buatTabel);
  });
}

$$('#booking').click(function(){
  var nama = $$('#nama_booking').val();
  var email = $$('#email_booking').val();
  var tanggal = $$('#tanggal_booking').val();
  app.request({
    url: 'http://localhost:8080/etiketkonser/db_latihan/booking.php',
    type: "POST",
    data: {
      "nama_booking": nama,
      "email_booking": email,
      "tanggal_booking": tanggal
    },
    dataType: "json",
    success: function(data){
      if(data.pesan){
        app.dialog.alert(data.pesan);
        $$('#nama_booking').val("");
        $$('#email_booking').val("");
        $$('#tanggal_booking').val("");
        app.views.main.router.navigate('/my_booked/');
        baca();
      }
    }
  })
});
