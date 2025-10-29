import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  formChanged = false;

  markAsChanged() {
    this.formChanged = true;
  }

  hasUnsavedChanges() {
    return this.formChanged;
  }
}
