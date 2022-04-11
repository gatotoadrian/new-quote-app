import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteFromComponent } from './quote-from/quote-from.component';
import { QouteDetailsComponent } from './app/qoute-details/qoute-details.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFromComponent,
    QouteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
