import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-widget',
  template: `
    <div class="card p-3 shadow-sm">
      <h5>🌤 Weather Widget</h5>
      <p>City: {{data.city}}</p>
      <p>Temperature: {{data.temp}} °C</p>
    </div>
  `
})
export class WeatherWidgetComponent {
  @Input() data: any;
}
