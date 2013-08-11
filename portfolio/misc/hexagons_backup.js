
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

    drawBoard(ctx, boardWidth, boardHeight);

//    canvas.addEventListener("mousemove", function(eventInfo) {
//        var x,
//            y,
//            hexX,
//            hexY,
//            screenX,
//            screenY;
//
//        x = eventInfo.offsetX || eventInfo.layerX;
//        y = eventInfo.offsetY || eventInfo.layerY;
//
//        hexY = Math.floor(y / (hexHeight + sideLength));
//        hexX = Math.floor((x - (hexY % 2) * hexRadius) / hexRectangleWidth);
//
//        screenX = hexX * hexRectangleWidth + ((hexY % 2) * hexRadius);
//        screenY = hexY * (hexHeight + sideLength);
//
//        ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//        drawBoard(ctx, boardWidth, boardHeight);
//
        // Check if the mouse's coords are on the board
//        if (hexX >= 0 && hexX < boardWidth) {
//            if (hexY >= 0 && hexY < boardHeight) {
//                ctx.fillStyle = "#feccff";
//                drawHexagon(ctx, screenX, screenY, true);
//            }
//        }
//    });

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

//        ctx.clearRect(0, 0, canvas.width, canvas.height);

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

    function drawBoard(canvasContext, width, height) {
        var i,
            j;

        for (i = 0; i < width; ++i) {
            for (j = 0; j < height; ++j) {
                drawHexagon(
                    canvasContext,
                    i * hexRectangleWidth + ((j % 2) * hexRadius),
                    j * (sideLength + hexHeight)
                );
            }
        }
    }

    function drawHexagon(cContext, x, y) {

        cContext.beginPath();
        cContext.moveTo(x + hexRadius, y);
        cContext.lineTo(x + hexRectangleWidth, y + hexHeight);
        cContext.lineTo(x + hexRectangleWidth, y + hexHeight + sideLength);
        cContext.lineTo(x + hexRadius, y + hexRectangleHeight);
        cContext.lineTo(x, y + sideLength + hexHeight);
        cContext.lineTo(x, y + hexHeight);
        cContext.closePath();

        var img=document.getElementById("hex-inner");
        var pat=cContext.createPattern(img, "no-repeat");
    
    //    ctx.fillStyle = "#333333";
        cContext.fillStyle = pat;
        cContext.strokeStyle = "#2E2D29";
        cContext.lineWidth = 8;
        cContext.fill();
        cContext.stroke();
    }
});
