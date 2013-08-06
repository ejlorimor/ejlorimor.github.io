

$(function() {

    // Create menu
    build_menu();

    if (state_menu_req == true) {
        build_state_menu();
    }

});


/* function pulls in data from a variable entitled states */
function build_state_menu() {
    var states_menu = $('.state-menu');
    var full_states = [];

    $.each(states, function(i, v) {
        full_states.push('<option value="'+states[i]+'">'+states[i]+'</option>');
    });

    states_menu.html(full_states.join(''));
}


/* function pulls in data from a variable entitled menu_items */
function build_menu() {
    
    var nav = $('.navbar');
    var full_nav = [];
    full_nav.push('<div class="navbar-inner">');
    full_nav.push('<ul class="nav">');
    
    /* Loop through each menu item */
    $.each(menu_items, function(i, v) {

        if (v.name == "Facebook") {
            full_nav.push('<li><a href="'+v.link+'"><img src="img/FB-f-Logo__blue_29.png" height="20" width="20" /></a></li>');
        
        } else if (v.items != null) {
            full_nav.push('<li class="dropdown">');
            full_nav.push('<a href="#" class="dropdown-toggle" data-toggle="dropdown">');
            full_nav.push(v.name);
            full_nav.push(' <b class="caret"></b>');
            full_nav.push('</a>');
            full_nav.push('<ul class="dropdown-menu">');

            $.each(v.items, function(j, w) {
                full_nav.push('<li><a href="'+w.link+'">'+w.name+'</a></li>');
            });

            full_nav.push('</ul>');
            full_nav.push('</li>');

        } else {
            full_nav.push('<li><a href="'+v.link+'">'+v.name+'</a></li>');
        }
    });

    full_nav.push('</ul>');
    full_nav.push('</div>');
    nav.html(full_nav.join(''));
}
