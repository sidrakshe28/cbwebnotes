$('li').click(function() {
    $(this).toggleClass('completed');
})

$('span').click( function() {
$(this).parent().remove();

})


$('input[type="text"')