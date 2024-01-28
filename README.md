# hidlink mobile

Mobile app for hidlink hardware configuration via Bluetooth Low Energy (BLE).

## Develop

### Setup

```sh
sudo npm install -g @ionic/cli native-run cordova-run cordova-plugin-ble-central
ionic cap add android
npm install @capacitor/core
ionic cap copy
ionic cap sync
```


### Build
```sh
ionic build
ionic cap open android
```
