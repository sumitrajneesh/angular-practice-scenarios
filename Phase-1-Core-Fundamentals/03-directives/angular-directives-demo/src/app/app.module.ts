import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { HighlightTaskDirective } from './directives/highlight-task.directive';
import { IfRoleDirective } from './directives/if-role.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    HighlightTaskDirective,
    IfRoleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
