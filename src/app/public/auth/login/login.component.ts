import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from '../../../shared/components/auth-layout/auth-layout.component';
import { InputComponent } from '../../../shared/components/input/input.component';

@Component({
  selector: 'app-login',
  imports: [ RouterModule, AuthLayoutComponent, InputComponent ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
