import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InterpolationBindingComponent } from './interpolation-binding/interpolation-binding.component';
import { ProbertyBindingComponent } from './proberty-binding/proberty-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterpolationBindingComponent,
    ProbertyBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
