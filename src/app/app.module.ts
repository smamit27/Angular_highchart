import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-highcharts';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from './chart/chart.component';
import { ProfileComponent } from './profile/profile.component';
declare var require: any;

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChartComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ChartModule.forRoot(require('highcharts')),
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
