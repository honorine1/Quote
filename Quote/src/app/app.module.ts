import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { VoteComponent } from './vote/vote.component';
import { DateCountPipe } from './date-count.pipe';
import { FormQuoteComponent } from './form-quote/form-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    VoteComponent,
    DateCountPipe,
    FormQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
