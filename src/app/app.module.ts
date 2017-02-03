import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Products } from '../pages/products/products';
import { Commandes } from '../pages/Commandes/commandes';
import { dashboard } from '../pages/dashboard/dashboard';
import { displayProductPage } from '../pages/products/displayProduct';
import { ModalContent } from '../pages/products/displayProduct';
import { BasicPage } from '../pages/products/detail';
import { ModalContentPage } from '../pages/products/detail';

@NgModule({
  declarations: [
    MyApp,
    Products,
    Commandes,
    dashboard,
    displayProductPage,
    BasicPage,
    ModalContentPage,
    ModalContent,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Products,
    Commandes,
    dashboard,
    displayProductPage,
    BasicPage,
    ModalContentPage,
    ModalContent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
