import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { QuoteComponent } from './quote.component';
// import { QuoteComponent } from './app/quote.component';
import { QuoteComponent } from './app/qoute/qoute.component';
import { DateCountPipe } from './date-count.pipe';
// import { QuoteDetailComponent } from './quote-details/quote-detail/quote-detail.component';
import { QuoteDetailComponent } from './app/qoute-details/qoute-details.component';
// import { HighlightDirective } from './highlight.directive';
// import { HighlightDirective } from './highlight.directive';
import { HighlightDirective } from './highlight.directive';
// import { QuoteFormComponent } from './quote-form/quote-form/quote-form.component';
import { QuoteFormComponent } from './quote-from/quote-from.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    DateCountPipe,
    QuoteDetailComponent,
    HighlightDirective,
    QuoteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
