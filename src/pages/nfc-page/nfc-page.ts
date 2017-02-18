import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { NFC, Ndef } from 'ionic-native';
/*
  Generated class for the NfcPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-nfc-page',
  templateUrl: 'nfc-page.html'
})
export class NfcPagePage {
  public tag:any;
  constructor(public navCtrl: NavController, private Alert: AlertController, private zone: NgZone,private platform: Platform) {
    this.tag = {}
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.cekNFC();
    });
  }
  cekNFC(){
    NFC.enabled()
        .then(() => {
          console.log("NFC is ready");
          this.addListenNFC();
          // IF Disabled
        })
        .catch(err => {
          console.log(err);
          let alert = this.Alert.create({
            subTitle: "NFC DISABLED",
            buttons:[{ text : "OK"}, { text : " Go Setting", handler: () => {
             NFC.showSettings();
            }
            }]
          });
          alert.present();
        });
  }
  addListenNFC(){
    console.log("Listening...");
    NFC.addNdefListener(nfcEvent => this.sesReadNFC(nfcEvent.tag));
  }
  sesReadNFC(data):void {
    this.tag = JSON.parse(JSON.stringify(data, null, 4));
    console.log(JSON.stringify(data, null,4));
  }
}
