FBInstant.initializeAsync().then(function() {

    var config = {
        type: Phaser.CANVAS,
        width: 800,
        height: 480,
        backgroundColor: '#ddddff',
    };

    var game = new Phaser.Game(config);
    
    game.scene.add('preloader',preloaderScene);
    game.scene.add('menu',menuScene);

    game.scene.start('preloader');
});
