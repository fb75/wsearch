import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// per chiamate hhtp importo qui modulo http e dentro gli imports[] così posso sfruttarlo ovunque (services, components, ecc)
// lo reimporto dentro i service
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    PageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
