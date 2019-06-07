(function ($) {

  let $body = $('body');
  
  $(
    '<div id="titleBar">' +
    '<a href="#navPanel" class="toggle"></a>' +
    '<span class="title">' + $('#logo').html() + '</span>' +
    '</div>'
  ).appendTo($body);

  $(
    '<div id="navPanel">' +
    '<nav>' +
    $('#nav').navList() +
    '</nav>' +
    '</div>'
  ).appendTo($body).panel({
    delay: 500,
    hideOnClick: true,
    hideOnSwipe: true,
    resetScroll: true,
    resetForms: true,
    side: 'right',
    target: $body,
    visibleClass: 'navPanel-visible'
  });

})(jQuery);


