//light mode toggle
function lightmode() {
  var element = document.body;
  element.classList.toggle("light-mode");
}
//number spinner
(function ($) {
  $.fn.spinner = function () {
    this.each(function () {
      var el = $(this);

      // add elements
      el.wrap('<div class="spinner"></div>');
      el.before('<span class="sub">-</span>');
      el.after('<span class="add">+</span>');

      // substract
      el.parent().on('click', '.sub', function () {
        if (el.val() > parseInt(el.attr('min')))
          el.val(function (i, oldval) {
            return --oldval;
          });
      });

      // increment
      el.parent().on('click', '.add', function () {
        if (el.val() < parseInt(el.attr('max')))
          el.val(function (i, oldval) {
            return ++oldval;
          });
      });
    });
  };
})(jQuery);
$('input[type=number]').spinner();

//filtering
$('button.filter').click(function() {
    var show = $(this).attr('id');
    $('.card-item').each(function(){
        $(this).show();
        var test = $(this).attr('class');
        if (test.indexOf(show) < 0) $(this).hide();
    });
});

//local storage
$('#save').on('click', function(){

    $('input[type="number"]').each(function(){    
        var id = $(this).attr('number-id');
        var value = $(this).val();
       localStorage.setItem(id, value);
        
    });   
});

$('#load').on('click', function(){
    $('input[type="number"]').each(function(){    
        var id = $(this).attr('number-id');
        var value = localStorage.getItem(id);
        
        $(this).val(value);
        
    }); 
});
