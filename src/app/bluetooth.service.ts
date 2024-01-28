import { Injectable } from '@angular/core'
import { BleClient } from '@capacitor-community/bluetooth-le';

const HIDLINK_CDTP_SERVICE = '59534241-ef18-4d1f-850e-b7a87878dfa0'

@Injectable({
    providedIn: 'root',
})
export class BluetoothService {
    constructor() {
        console.log('BluetoothService: constructor');
        BleClient.initialize({ androidNeverForLocation: true });
    }

    async scan() {
        console.log('scan start');
        try {
            await BleClient.requestLEScan( 
                {
                    services: [HIDLINK_CDTP_SERVICE],
                },
                (result) => {
                    console.log('new device found');
                    console.log('  - name:', result.localName);
                    console.log('  - address:', result.device.deviceId);
                }
            );

            setTimeout(async () => {
                await BleClient.stopLEScan();
                console.log('scan stop');
            }, 5000);
        } catch (error) {
            console.error(error);
        }
    }

    // async stopBluetoothScan() {
    //     return BluetoothLe.stopLEScan();
    // }
}