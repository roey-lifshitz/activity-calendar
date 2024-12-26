import { Component, inject } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  private readonly _authServiceNOTREAL: AuthService = inject(AuthService);
  public loginTESTINGNOTREAL() {
    this._authServiceNOTREAL.login('fake@yahoo.con', 'Pa55w0rd').subscribe();
  }
}
