import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-auth-layout',
  imports: [ HeaderComponent ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

  @Input() title: string = 'Kerr University';
  @Input() subTitle: string = '';

}
