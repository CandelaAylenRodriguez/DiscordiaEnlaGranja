import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(960, 540, 'fondo');

        const playBoton = this.add.text(960, 540, 'JUGAR', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#00FA9A',
            stroke: '#20B2AA', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        // Hacer el texto interactivo
        playBoton.setInteractive();

        // Agregar un evento para cuando se presione el texto que lleva a la escena
        playBoton.on('pointerdown', () => {
            this.scene.start('Game');
        });

        const controlesBoton = this.add.text(960,640, "CONTROLES", {
            fontFamily: 'Arial Black', fontSize: 38, color: '#00FA9A',
            stroke: '#20B2AA', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        controlesBoton.setInteractive();
        controlesBoton.on('pointerdown', () => {
            this.scene.start('Controles');
        });
      
        const idiomaBoton = this.add.text(960, 740, 'IDIOMA', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#00FA9A',
            stroke: '#20B2AA', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        // Hacer el texto interactivo
        idiomaBoton.setInteractive();

        // Agregar un evento para cuando se presione el texto que lleva a la escena
        idiomaBoton.on('pointerdown', () => {
            this.scene.start('Idioma');
        });

        const creditosBoton = this.add.text(960, 840, 'CREDITOS', {
            fontFamily: 'Arial Black', fontSize: 38, color: '#00FA9A',
            stroke: '#20B2AA', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5);

        // Hacer el texto interactivo
        creditosBoton.setInteractive();

        // Agregar un evento para cuando se presione el texto que lleva a la escena
        creditosBoton.on('pointerdown', () => {
            this.scene.start('Creditos');
        });
    }
}
