import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HidlinkConnectPage } from './hidlink-connect.page';

const routes: Routes = [
  {
    path: '',
    component: HidlinkConnectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HidlinkConnectPageRoutingModule {}
