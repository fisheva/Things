window.onload = function(){
    function new2d(id){
        let canvas = document.getElementById(id);
        //If the browser doesn't support Canvas, function end.
        if (canvas.getContext){
            return canvas.getContext("2d");
        } else {
            alert("您的浏览器不支持Canvas,请使用最新Chrome浏览器");
            return undefined;
        }
    }

    let fishHead = new2d("fish-head");
    fishHead.fillStyle = "blue";
    fishHead.fillRect(10, 10, 100, 50);
    fishHead.strokeRect(10, 70, 100, 50);
    fishHead.clearRect(20, 20, 40, 40);
}