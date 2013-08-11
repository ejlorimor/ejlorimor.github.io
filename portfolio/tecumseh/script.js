    $(document).ready(function() {
        var hex_list = [
          // row 1
          // x    y
          [210, 187],
          [318, 187],
          [426, 187],
          // row 2
          [265, 281],
          [157, 281],
          [373, 281],
          // row 3
          [210, 375],
          [318, 375],
          [426, 375],
          // row 4
          [265, 468],
          [157, 468],
          [373, 468],
        ];

        for (var hex in hex_list) {
            var x = hex_list[hex][0];
            var y = hex_list[hex][1];
            var new_hex = '<div class="hex gold" style="left: '+ x+'px; top: '+ y+'px;"></div>';
            $('.cubiverse').append(new_hex);
        }  
    });
