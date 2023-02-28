import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components';

import { PokemosModule } from './pokemos/pokemos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ToolbarComponent, PokemosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
