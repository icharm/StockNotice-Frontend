import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import {AddComponent} from './add/add.component';
import {HttpClientModule} from '@angular/common/http';
import {IndexComponent} from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public apiRoot = 'http://localhost';
}
