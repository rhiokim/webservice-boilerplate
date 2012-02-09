$(document).ready(function() {
    $('button._show_sc_select_form').click(function(e) {
		$('._sc_select_form').css({marginTop:-700}).show().stop().animate({
			marginTop: 0
		}, 500);
    });

    $('button._close_sc_select_form').click(function(e) {
        $('._sc_select_form').slideUp();
    });

});

