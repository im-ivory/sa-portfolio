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
