import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';
import { NewsWidgetComponent } from './widgets/news-widget/news-widget.component';
import { StockWidgetComponent } from './widgets/stock-widget/stock-widget.component';
import { ProfileWidgetComponent } from './widgets/profile-widget/profile-widget.component';
import { WidgetHostDirective } from './widget-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WeatherWidgetComponent,
    NewsWidgetComponent,
    StockWidgetComponent,
    ProfileWidgetComponent,
    WidgetHostDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [
    WeatherWidgetComponent,
    NewsWidgetComponent,
    StockWidgetComponent,
    ProfileWidgetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
