
$.config = {
	cellOpacity: 0.1,
	galleryMenuOpacity: 0.4,
	gradientMinHeight: 60
};

var dom = {
	init: function() {
		dom.$page = $('#page');
		dom.$data = $('#data');
		dom.dataHeight = dom.$data.height();
		dom.$dataItems = $('.item:not(.empty):not(.main)', dom.$data);
	}
};

var init = function() {

	dom.$dataItems.bind('mouseenter', function() {
		$(this).stop().fadeTo('fast', 1).css('z-index', 3);
	}).bind('mouseleave', function() {
		$(this).css('z-index', 2);
		if (!$(this).hasClass('hightlight')) {
			$(this).stop().fadeTo('fast', $.config.cellOpacity)
		}
	});
};

$(function() {
	dom.init();
	init();
});

$(document).ready(function() {
    var ws_cat_el = $('#websites-wrapper');
    ws_cat_el.empty();
    $.each(websites, function(k, v){
        var hex = "<div class='item websites ";
        if (v['short-name'] == "websites") {
            hex += v['add-classes'] + "' rel='websites'><a href='#'></a></div>";
        } else {
            hex += v['add-classes'] + "'><h3>" + v['name'] + "</h3>";
            hex += "<a href='#websites/" + v['short-name'] + "'>";
            hex += "<img src='cells/" + v['short-name'] + ".png' /></a></div>";
        }
        ws_cat_el.append(hex);
    });
    var illus_cat_el = $('#illustration-wrapper');
    illus_cat_el.empty();
    $.each(illustrations, function(k, v){
        var hex = "<div class='item illustration ";
        if (v['short-name'] == "illustration") {
            hex += v['add-classes'] + "' rel='illustration'><a href='#'></a></div>";
        } else {
            hex += v['add-classes'] + "'><h3>" + v['name'] + "</h3>";
            hex += "<a href='#illustration/" + v['short-name'] + "'>";
            hex += "<img src='cells/" + v['short-name'] + ".png' /></a></div>";
        }
        illus_cat_el.append(hex);
    });
    var brand_cat_el = $('#branding-wrapper');
    brand_cat_el.empty();
    $.each(branding, function(k, v){
        var hex = "<div class='item branding ";
        if (v['short-name'] == "branding") {
            hex += v['add-classes'] + "' rel='branding'><a href='#'></a></div>";
        } else {
            hex += v['add-classes'] + "'><h3>" + v['name'] + "</h3>";
            hex += "<a href='#branding/" + v['short-name'] + "'>";
            hex += "<img src='cells/" + v['short-name'] + ".png' /></a></div>";
        }
        brand_cat_el.append(hex);
    });
});
