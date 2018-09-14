import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
import {AddComponent} from './add/add.component';
import {HttpClientModule} from '@angular/common/http';
import {IndexComponent} from './index/index.component';
import {ApiService} from './api.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
