import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading!: Observable<boolean>;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.isLoading = this.loaderService.isLoading.asObservable();
  }
}
