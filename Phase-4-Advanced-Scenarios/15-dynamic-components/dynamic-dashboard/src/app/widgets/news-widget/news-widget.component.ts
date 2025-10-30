import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-widget',
  template: `
    <div class="card p-3 shadow-sm">
      <h5>📰 News Widget</h5>
      <p>Headline: {{data.headline}}</p>
    </div>
  `
})
export class NewsWidgetComponent {
  @Input() data: any;
}
