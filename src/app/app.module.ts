import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainViewComponent } from './shared/components/main-view/main-view.component';
import { TabNavComponent } from './shared/components/tab-nav/tab-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    TabNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
