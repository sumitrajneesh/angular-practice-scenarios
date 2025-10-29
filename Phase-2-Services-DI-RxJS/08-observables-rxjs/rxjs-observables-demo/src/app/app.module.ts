import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
