import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetalleStandPage } from '../detalle-stand/detalle-stand.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  stands = [
    {
      id: 1,
      ciclo_formativo : 'CFGS Asistencia a la Dirección',
      centro: 'IES Ntra. Sra. de los Remedios',
      ubicacion: 'Carpa 1',
      descripcion: 'Demostración de atención al público'
    },
    {
      id: 2,
      ciclo_formativo : 'CFGS Desarrollo de Aplicaciones Web',
      centro: 'IES Ntra. Sra. de los Remedios',
      ubicacion: 'Carpa 1',
      descripcion: 'Aplicaciones de control de robots'
    },
    {
      id: 3,
      ciclo_formativo : 'CFGM Sistemas Microinformáticos y Redes',
      centro: 'IES Ntra. Sra. de los Remedios',
      ubicacion: 'Carpa 1',
      descripcion: 'Montaje de equipos informáticos'
    }];

    constructor(public modalController: ModalController) {      
    }

    async presentModal(standSelected) {
      const modal = await this.modalController.create({
        component: DetalleStandPage,
        componentProps: { stand: standSelected }
      });
      return await modal.present();
    }
}
