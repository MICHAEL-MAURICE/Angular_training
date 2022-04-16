import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InterpolationBindingComponent } from './Data_binding/interpolation-binding/interpolation-binding.component';
import { ProbertyBindingComponent } from './Data_binding/proberty-binding/proberty-binding.component';
import { ClassBindingComponent } from './Data_binding/class-binding/class-binding.component';
import { StyleBindingComponent } from './Data_binding/style-binding/style-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterpolationBindingComponent,
    ProbertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
