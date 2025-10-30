import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html'
})
export class PipesDemoComponent {
  title = 'Angular Custom Pipes Example';
  today = new Date();

  user = {
    name: 'John Doe',
    role: 'Senior Angular Developer',
    bio: 'Passionate about building scalable web applications with Angular and TypeScript.'
  };

  users = [
    { name: 'John', city: 'New York' },
    { name: 'Jane', city: 'London' },
    { name: 'Alex', city: 'Paris' },
    { name: 'Sam', city: 'Sydney' }
  ];

  searchText = '';
}
