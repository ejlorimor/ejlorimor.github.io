
$(document).ready(function() {

    var canvas = $('#hexmap')[0];

    var hexHeight,
        hexRadius,
        hexRectangleHeight,
        hexRectangleWidth,
        hexagonAngle = 0.523598776, // 30 degrees in radians
        sideLength = 80,
        boardWidth = 10,
        boardHeight = 10;

    hexHeight = Math.sin(hexagonAngle) * sideLength;
    hexRadius = Math.cos(hexagonAngle) * sideLength;
    hexRectangleHeight = sideLength + 2 * hexHeight;
    hexRectangleWidth = 2 * hexRadius;

    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.src = 'hex_inner.png';
    img.onload = function() {

        for (var i = 0; i < boardWidth; ++i) {
            for (var j = 0; j < boardHeight; ++j) {
                var x = i * hexRectangleWidth + ((j % 2) * hexRadius);
                var y = j * (sideLength + hexHeight);
                
//                if (i == 5 && j == 2) {
//                    img.src = 'shield_of_faith.png';
//                } else {
//                    img.src = 'hex_inner.png';
//                }

                // This needs to be cropped somehow
                ctx.drawImage(img, x, y);

                ctx.beginPath();
                ctx.moveTo(x + hexRadius, y);
                ctx.lineTo(x + hexRectangleWidth, y + hexHeight);
                ctx.lineTo(x + hexRectangleWidth, y + hexHeight + sideLength);
                ctx.lineTo(x + hexRadius, y + hexRectangleHeight);
                ctx.lineTo(x, y + sideLength + hexHeight);
                ctx.lineTo(x, y + hexHeight);
                ctx.closePath();

                ctx.strokeStyle = "#2E2D29";
                ctx.lineWidth = 8;
                ctx.stroke();
            }
        }
    };

    canvas.addEventListener("mousedown", function(eventInfo) {
        var x,
            y,
            hexX,
            hexY,
            screenX,
            screenY;

        x = eventInfo.offsetX || eventInfo.layerX;
        y = eventInfo.offsetY || eventInfo.layerY;

        hexY = Math.floor(y / (hexHeight + sideLength));
        hexX = Math.floor((x - (hexY % 2) * hexRadius) / hexRectangleWidth);

        screenX = hexX * hexRectangleWidth + ((hexY % 2) * hexRadius);
        screenY = hexY * (hexHeight + sideLength);

//        drawBoard(ctx, boardWidth, boardHeight);

        // Check if the mouse's coords are on the board
        if (hexX >= 0 && hexX < boardWidth) {
            if (hexY >= 0 && hexY < boardHeight) {
//                ctx.fillStyle = "#ffffff";
//                drawHexagon(ctx, screenX, screenY, true);
                alert("you clicked me!");
            }
        }
    });
});
