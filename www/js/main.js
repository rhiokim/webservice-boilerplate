$(document).ready(function() {
//	var $nav= $('#nav');
//	var $dropDown = $('#drop-down');
//	var dropDownHeight = $dropDown.height();
//
//	$dropDown.css({'marginTop':-dropDownHeight});
//	$('#add').click(function(e) {
//		e.preventDefault();
//		$(this).hide();
//		$('#drop-down').stop().animate({
//			'marginTop': 0
//		}, 500);
//		$('.navbar-inner .container').stop().animate({
//			'opacity': 1
//		}, 500);
//		$('#nav .btn-okCancel').show();
//	});
//	$('#nav .btn-okCancel').click(function(e) {
//		e.preventDefault();
//		$('#drop-down').stop().animate({
//			'marginTop': -dropDownHeight
//		}, 500);
//		$('.navbar-inner .container').stop().animate({
//			'opacity': 0.8
//		}, 100);
//		$('#nav .btn-okCancel').hide();
//		$('#nav .prev').hide();
//		$('#add').show();
//	});
//	$('.initial-elems .elem1').click(function(e) {
//		e.preventDefault();
//		var selected = $(this).text();
//		$('#add').append('<span class="selected-item">' + selected + '</span>');
//		$('#okModal').modal('show');
//	});

    /**
     * by rhio.kim
     */
    $('button._show_sc_select_form').click(function(e) {
		$('._sc_select_form').css({marginTop:-700}).show().stop().animate({
			marginTop: 0
		}, 500);
    });

    $('button._close_sc_select_form').click(function(e) {
        $('._sc_select_form').slideUp();
    });

});

