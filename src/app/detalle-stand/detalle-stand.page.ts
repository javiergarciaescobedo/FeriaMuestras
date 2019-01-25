import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detalle-stand',
  templateUrl: './detalle-stand.page.html',
  styleUrls: ['./detalle-stand.page.scss'],
})
export class DetalleStandPage implements OnInit {
  
  @Input() stand: any;
  
  constructor() { }

  ngOnInit() {
    console.log(this.stand.centro);
  } 

}
