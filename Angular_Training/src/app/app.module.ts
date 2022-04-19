import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InterpolationBindingComponent } from './Data_binding/interpolation-binding/interpolation-binding.component';
import { ProbertyBindingComponent } from './Data_binding/proberty-binding/proberty-binding.component';
import { ClassBindingComponent } from './Data_binding/class-binding/class-binding.component';
import { StyleBindingComponent } from './Data_binding/style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TempleteRefranceVarableComponent } from './templete-refrance-varable/templete-refrance-varable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { NgIfComponent } from './Stracture directives/ng-if/ng-if.component';
import { NgswitchComponent } from './Stracture directives/ngswitch/ngswitch.component';
import { NgForComponent } from './Stracture directives/ng-for/ng-for.component';
import { PipesComponent } from './pipes/pipes.component';
import { SquarePipe } from './square.pipe';
import { ParentComponentComponent } from './Component interaction/parent-component/parent-component.component';
import { ChildComponentComponent } from './Component interaction/child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterpolationBindingComponent,
    ProbertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TempleteRefranceVarableComponent,
    TwoWayBindingComponent,
    NgIfComponent,
    NgswitchComponent,
    NgForComponent,
    PipesComponent,
    SquarePipe,
    ParentComponentComponent,
    ChildComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
