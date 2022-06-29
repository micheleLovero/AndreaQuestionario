import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexEasyComponent } from './index-easy/index-easy.component';
import { IndexHardComponent } from './index-hard/index-hard.component';
import { IndexMediumComponent } from './index-medium/index-medium.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexEasyComponent,
    IndexMediumComponent,
    IndexHardComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
