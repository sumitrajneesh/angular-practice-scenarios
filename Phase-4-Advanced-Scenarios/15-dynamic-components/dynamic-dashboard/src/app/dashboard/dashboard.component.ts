import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  OnInit
} from '@angular/core';
import { WidgetHostDirective } from '../widget-host.directive';
import { WeatherWidgetComponent } from '../widgets/weather-widget/weather-widget.component';
import { NewsWidgetComponent } from '../widgets/news-widget/news-widget.component';
import { StockWidgetComponent } from '../widgets/stock-widget/stock-widget.component';
import { ProfileWidgetComponent } from '../widgets/profile-widget/profile-widget.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  @ViewChild(WidgetHostDirective, { static: true }) widgetHost: WidgetHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  loadWidget(type: string) {
    const viewContainerRef = this.widgetHost.viewContainerRef;
    viewContainerRef.clear();

    let componentFactory;
    let data;

    switch (type) {
      case 'weather':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(WeatherWidgetComponent);
        data = { city: 'Bangalore', temp: 28 };
        break;
      case 'news':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(NewsWidgetComponent);
        data = { headline: 'Angular 8 Released!' };
        break;
      case 'stock':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(StockWidgetComponent);
        data = { symbol: 'GOOGL', price: 1520 };
        break;
      case 'profile':
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(ProfileWidgetComponent);
        data = { name: 'Sumit Choudhary', role: 'SRE & DevOps Lead' };
        break;
    }

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as any).data = data;
  }
}
