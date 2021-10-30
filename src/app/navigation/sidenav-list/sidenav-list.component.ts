import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSideNav = new EventEmitter<void>();
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

  onSideNavClose(): void {
    this.closeSideNav.emit();
  }

  onLogout(): void {
    this.onSideNavClose();
    this.authService.logout();
  }
  ngOnDestroy(): void {
    this.authSupsription.unsubscribe();
  }
}
