import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';

@Injectable({ providedIn: 'root' })
export class UnsavedChangesGuard implements CanDeactivate<ProfileComponent> {
  canDeactivate(component: ProfileComponent): boolean {
    if (component.hasUnsavedChanges()) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
}
