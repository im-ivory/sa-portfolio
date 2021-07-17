function topScroll(){
  $( 'html, body' ).stop().animate( { scrollTop : 0 } );
}

function fnMove(seq){
    var offset = $("#section" + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 500);
  }

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }




  $(document).ready(function () { 
    var page_url = window.location.href; 
    var page_id = page_url.substring(page_url.lastIndexOf("#") + 1); 
    // alert(page_id); 
    if (page_id == 'section1') { 
      $('html, body').animate({ 
        scrollTop: $('#' + page_id).offset().top 
      }, 700); 
    } else if (page_id == 'section2') { 
      $('html, body').animate({ 
        scrollTop: $('#' + page_id).offset().top 
      }, 700); 
    } else if (page_id == 'section3') { 
      $('html, body').animate({ 
        scrollTop: $('#' + page_id).offset().top 
      }, 700); 
    } 
    });