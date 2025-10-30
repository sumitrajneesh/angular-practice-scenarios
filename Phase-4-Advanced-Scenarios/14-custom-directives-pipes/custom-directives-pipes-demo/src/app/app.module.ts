import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PipesDemoComponent } from './components/pipes-demo/pipes-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HighlightDirective,
    UnlessDirective,
    TruncatePipe,
    FilterPipe,
    PipesDemoComponent
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
