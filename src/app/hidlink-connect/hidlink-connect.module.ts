import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HidlinkConnectPageRoutingModule } from './hidlink-connect-routing.module';

import { HidlinkConnectPage } from './hidlink-connect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HidlinkConnectPageRoutingModule
  ],
  declarations: [HidlinkConnectPage]
})
export class HidlinkConnectPageModule {}
