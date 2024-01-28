import { Component } from '@angular/core';
import { BluetoothService } from '../bluetooth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private bluetoothService: BluetoothService) {}

  async scan() {
    await this.bluetoothService.scan();
  }

//   async stopScan() {
//     await this.bluetoothService.stopBluetoothScan();
//   }
}
