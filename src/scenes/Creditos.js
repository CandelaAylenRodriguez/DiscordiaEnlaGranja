import { Scene } from 'phaser';

export class Creditos extends Scene
{
    constructor ()
    {
        super('Creditos');
    }

    
    preload ()
    {
        //  Load the assets for the game - Replace with your own assets
        this.load.image("fondo", "./public/assets/fondo.png");
    }

    create ()
    {
        
        this.add.image(960, 540, 'fondo');

        const titulo = this.add.text(960, 150, 'CREDITOS', {
            fontFamily: 'Arial Black', fontSize: 80, color: '#00FA9A',
            stroke: '#20B2AA', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        const botonMenu = this.add.text(960, 900, 'MENU', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#00FA9A',
            stroke: '#20B2AA', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        // Hacer el texto interactivo
        botonMenu.setInteractive();

        // Agregar un evento para cuando se presione el texto que lleva a la escena
        botonMenu.on('pointerdown', () => {
            this.scene.start('MainMenu');
        });
    }
}