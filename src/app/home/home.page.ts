import { Component } from '@angular/core';
//import { BluetoothService } from '../bluetooth.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //constructor(private bluetoothService: BluetoothService) {}
  constructor(private navCtrl: NavController) {}

//   async start() {
//     this.bluetoothService.scanStart();
//   }
    start() {
        this.navCtrl.navigateForward('/hidlink-connect');
    }

//   async scanStop() {
//     await this.bluetoothService.scanStop();
//   }
}
