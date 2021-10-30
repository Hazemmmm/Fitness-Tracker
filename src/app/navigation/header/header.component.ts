import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter();
  isAuth: boolean = false;
  authSupsription: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authSupsription = this.authService.authChange.subscribe(
      (authStatus) => {
        this.isAuth = authStatus;
      }
    );
  }
  onToggle(): void {
    this.sidenavToggle.emit();
  }
  onLogout(): void{
    this.authService.logout();
  }
  ngOnDestroy(): void {
    this.authSupsription.unsubscribe();
  }
}
