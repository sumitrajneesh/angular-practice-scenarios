import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, takeUntil, tap } from 'rxjs/operators';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<void>();
  private searchSubject = new Subject<string>();

  users: any[] = [];
  loading = false;
  errorMsg = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(() => {
        this.loading = true;
        this.errorMsg = '';
      }),
      switchMap(query =>
        this.userService.searchUsers(query)
      ),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (res: any) => {
        this.users = res.items || [];
        this.loading = false;
      },
      error: () => {
        this.errorMsg = 'Error fetching users';
        this.loading = false;
      }
    });
  }

  onSearch(term: string) {
    this.searchSubject.next(term);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
