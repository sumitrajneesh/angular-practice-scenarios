import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';   // ✅ MUST be imported

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';  // ✅ correct path

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule   // ✅ MUST be included here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
