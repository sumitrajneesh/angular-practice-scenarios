import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [AppComponent, UserListComponent],
  imports: [BrowserModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
