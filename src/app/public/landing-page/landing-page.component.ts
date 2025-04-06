import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SUBSCRIPTION_PLANS } from '../constants/subscription-plans.constants';
import { FAQ_LIST } from '../constants/faq.constants';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'landing-page',
  imports: [ RouterModule, HeaderComponent ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  plans = SUBSCRIPTION_PLANS;
  faqs = FAQ_LIST;

  get activeFAQ() {
    return this.faqs.find(faq => faq.isActive);
  }

  selectFAQ(selectedId: string): void {
    this.faqs.forEach(faq => faq.isActive = faq.id === selectedId);
  }
}
