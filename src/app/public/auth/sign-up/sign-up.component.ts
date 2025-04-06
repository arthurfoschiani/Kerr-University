import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from '../../../shared/components/auth-layout/auth-layout.component';
import { InputComponent } from '../../../shared/components/input/input.component';

@Component({
  selector: 'app-sign-up',
  imports: [ RouterModule, AuthLayoutComponent, InputComponent ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

}
