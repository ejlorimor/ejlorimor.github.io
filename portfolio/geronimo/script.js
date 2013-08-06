
$(document).ready(function() {

    var t_offset = Number(p_data.t_offset);
    var l_offset = Number(p_data.l_offset);
    var ox_start = Number(p_data.ox_start);
    var oy_start = Number(p_data.oy_start);

    for (var i=0; i < p_data.sections.length; i++) {
        var sec = p_data.sections[i];
        ox_start = l_offset + ox_start;
        var tx_start = ox_start;

        var wrapper = $('#'+sec.id+'-wrapper');
        wrapper.empty();

        var start_rows = get_rows(sec.data.length);
        var rows = start_rows;
        var items = 0;
        
        if (sec.geometry == "inverse") {
            var items = rows;
        } else if (sec.geometry == "normal") {
            var items = 1;
        }

        var x_start = ox_start;
        var y_start = oy_start;

        for (var j=0; j < rows; j++) {

            if (sec.geometry == "inverse") {

                for (var k=0; k < items; k++) {
                    var style = "style='left:"+x_start+"px;top:"+y_start+"px;'";
                    wrapper.append("<div id='"+sec.id+(k+j)+"' class='item "+sec.color+"-hex' "+style+"></div>");
                    if (sec.direction == "right") {
                        x_start += l_offset;
                    } else if (sec.direction == "left") {
                        x_start -= l_offset;
                    }
                }
                y_start += t_offset;
                if (sec.direction == "right") {
                    tx_start = tx_start + (l_offset / 2);
                } else if (sec.direction == "left") {
                    tx_start = tx_start - (l_offset / 2);
                }
                x_start = tx_start;
                items -= 1;

            } else if (sec.geometry == "normal") {

                for (var k=0; k < items; k++) {
                    var style = "style='left:"+x_start+"px;top:"+y_start+"px;'";
                    wrapper.append("<div id='"+sec.id+(k+j)+"' class='item "+sec.color+"-hex' "+style+"></div>");
                    if (sec.direction == "right") {
                        x_start += l_offset;
                    } else if (sec.direction == "left") {
                        x_start -= l_offset;
                    }
                }
                y_start += t_offset;
                tx_start = tx_start - (l_offset / 2);
                x_start = tx_start;
                items += 1;
            }
        }
    }
});

function get_rows(d_len) {

    var rows = 0;

    for (var i=1; i <= d_len; i++) {
        d_len -= i;
        rows += 1;
    }

    return rows;
}
