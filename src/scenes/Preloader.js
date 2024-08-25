import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        // Cargamos esta imagen en nuestra escena de inicio, para que podamos mostrarla aquí.
        this.add.image(960, 540, 'fondo');

        // Una barra de progreso simple. Este es el contorno de la barra.
        this.add.rectangle(960, 540, 800, 100).setStrokeStyle(2, 0xffffff);

        //  Esta es la barra de progreso en sí. Aumentará de tamaño desde la izquierda según el porcentaje de progreso.
        const bar = this.add.rectangle(960, 540, 800, 100, 0x7FFF00);

        // Usa el evento 'progreso' emitido por LoaderPlugin para actualizar la barra de carga
        this.load.on('progress', (progress) => {

            // Actualiza la barra de progreso (nuestra barra tiene 800 px de ancho, por lo que 100% =800 px)
            bar.width = 4 + (800 * progress);

        });
    }

    preload ()
    {
        //  Load the assets for the game - Replace with your own assets
        this.load.image("fondo", "./public/assets/fondo.png");
        this.load.image("cultivo", "./public/assets/cultivo.png");
        this.load.spritesheet("jugador1", "./public/assets/jugador1.png", {frameWidth: 64, frameHeight: 64});
        this.load.spritesheet("jugador2", "./public/assets/jugador2.png", {frameWidth: 64, frameHeight: 64});
        this.load.image("enemigo1", "./public/assets/enemigo1.png");
    
        
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, you can define global animations here, so we can use them in other scenes.

        //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
        this.scene.start('MainMenu');
    }
}
