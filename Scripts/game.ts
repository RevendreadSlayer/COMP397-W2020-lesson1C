// IIFE - Immediately Invoked Function Expression 
// what this means is an IIFE is like an
// Anonymous Self-Excuting Function
(function(){
    let canvas = document.getElementById("canvas");
    let stage:createjs.Stage;
    let helloLabel:createjs.Text;

    function Start():void 
    {
        console.log("Game Started...");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate=60; //Fps = 60
        createjs.Ticker.on("tick",Update);
        Main();
    }

    function Update():void 
    {
        helloLabel.rotation -=5;
        stage.update();
    }

    function Main():void
    {
        console.log("Hello Deng...");

        helloLabel = new createjs.Text("Hello,World!", "20px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x=320;
        helloLabel.y=240;
       
       
        stage.addChild(helloLabel);
    }

    window.addEventListener("load", Start);


})();