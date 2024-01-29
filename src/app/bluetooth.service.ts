import { Injectable } from '@angular/core'
import { BleClient } from '@capacitor-community/bluetooth-le';

const HIDLINK_CDTP_SERVICE = '59534241-ef18-4d1f-850e-b7a87878dfa0'

@Injectable({
    providedIn: 'root',
})
export class BluetoothService {
    private scanList: string[] = [];

    constructor() {
        console.log('BluetoothService: constructor');
        this.scanList = [];
        BleClient.initialize({ androidNeverForLocation: true });
    }

    async scanStart() {
        console.log('scan start');
        this.scanList = [];
        try {
            await BleClient.requestLEScan( 
                {
                    services: [HIDLINK_CDTP_SERVICE],
                },
                (result) => {
                    console.log(typeof result);
                    console.log('new device found');
                    console.log('  - name:', result.localName);
                    console.log('  - address:', result.device.deviceId);
                    this.scanList.push(result.device.deviceId);
                }
            );

            setTimeout(async () => {
                await BleClient.stopLEScan();
                console.log('scan stop');
                const device_count = this.scanList.length;
                console.log('found ${device_count} devices');
                
                this.scanList.forEach((element) => {
                    console.log(' -', element);
                });

            }, 5000);
        } catch (error) {
            console.error('o erro foi aqui´', error);
        }
    }

    async scanStop() {
        await BleClient.stopLEScan();
    }
}