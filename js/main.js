$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
  
// ======================= Section 2 ========================

$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
});



// ======================= Cursor ========================

(() => { 

  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', e => {
     cursor.setAttribute('style', `top:  ${e.pageY - 25}px; left: ${e.pageX - 25}px;`);
  });

  document.addEventListener('click', () => { 
     console.log("%c Click...!!!", "font-size: 20px; color:mediumspringgreen;");

     cursor.classList.add('cursor--expand');
     console.log(cursor.classList);
  
     setTimeout(() => {
        cursor.classList.remove('cursor--expand');
     }, 500);
  });
})();