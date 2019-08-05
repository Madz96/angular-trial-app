import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainViewComponent } from './shared/components/main-view/main-view.component';
import { TabNavComponent } from './shared/components/tab-nav/tab-nav.component';
import { SummaryComponent } from './features/summary/summary.component';
import { BlockchainProofsComponent } from './features/blockchain-proofs/blockchain-proofs.component';
import { PeopleTechComponent } from './features/people-tech/people-tech.component';
import { MoneyStakesComponent } from './features/money-stakes/money-stakes.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    TabNavComponent,
    SummaryComponent,
    BlockchainProofsComponent,
    PeopleTechComponent,
    MoneyStakesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
