/**
 * Created by Nick on 10/25/2016.
 */

$(function(){
    function rgbToHex(r, g, b) {
        if (r > 255 || g > 255 || b > 255){
            return ((0 << 16) | ( 0 << 8) | 0).toString(16);
        }return ((r << 16) | (g << 8) | b).toString(16);
    }

    $('#pixelGrid').attr('width', 500);
    $('#pixelGrid').attr('height', 500);

    $("#pixelGrid").click(function(event){
        var canvas = document.querySelector("#pixelGrid");
        var context = canvas.getContext("2d");
        var canvasPos = canvas.getBoundingClientRect();
        var x = event.clientX - canvasPos.left;
        var y = event.clientY - canvasPos.top;
        x = Math.floor(x/5);
        y = Math.floor(y/5);
        conway.add(x,y);
        var white = "#ffffff";
        var blue = "#1e7fff";
        var data = context.getImageData(x*5,y*5,1,1).data;
        var currentColor = '#'+rgbToHex(data[0],data[1],data[2]);
        var newColor;
        if(currentColor == blue) newColor = white;
        else newColor = blue;
        context.strokeStyle = newColor;
        context.fillStyle = newColor;
        context.fillRect(x*5,y*5,5,5);
    });

    $("#clearButton").click(function(){
        var canvas = $("#pixelGrid")[0];
        var context = canvas.getContext("2d");
        context.clearRect(0,0,canvas.width,canvas.height);
        conway.clear();
    });

    $("#stepButton").click(function(){
        conway.step(function(lives){
            console.log(JSON.stringify(lives));
            var canvas = $("#pixelGrid")[0];
            var context = canvas.getContext("2d");
            context.clearRect(0,0,canvas.width,canvas.height);
            var canvasPos = canvas.getBoundingClientRect();
            for(var i=0;i<lives.length;i++){
                if(lives[i].x > -1 && lives[i].y >-1){
                    context.strokeStyle = "#1e7fff";
                    context.fillStyle = "#1e7fff";
                    context.fillRect(((lives[i].x)*5), ((lives[i].y)*5),5,5);
                }
            }
        });

    });
});


