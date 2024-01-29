import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hidlink-connect',
  templateUrl: './hidlink-connect.page.html',
  styleUrls: ['./hidlink-connect.page.scss'],
})
export class HidlinkConnectPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  back() {
    this.navCtrl.navigateBack('/');
  }

}
