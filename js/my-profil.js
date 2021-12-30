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
        path: '/login/',
        url: 'index.html'
      }
    ],
    // ... other parameters
  });
  
var mainView = app.views.create('.view-main');

