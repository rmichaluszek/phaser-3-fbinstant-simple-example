var preloaderScene = {

    preload: function() {
        console.log("Starting Preload.");

        //There you can load assets needed to run the game and show it's percentage status
        //load something
        FBInstant.setLoadingProgress(10); 
        //load something etc.
        FBInstant.setLoadingProgress(100); 

    },
    create: function() {
        FBInstant.startGameAsync()
        .then(function() {

            console.log('Everything has been loaded.')
            this.game.scene.start('menu');

        }.bind(this)); //need to do this because game isn't in scope
    },
}