
  setTimeout(function(){ 
    $(document).ready(function() {
      $("a").click(function() {
  
      const script = document.createElement('script');
      script.src = '/js/main.js';
      script.async = true;
      document.body.appendChild(script);
      console.log('fun js loaded');
      return () => {
          document.body.removeChild(script);
      };
      //   alert('clicked');
      });
    });
}, 1000);



