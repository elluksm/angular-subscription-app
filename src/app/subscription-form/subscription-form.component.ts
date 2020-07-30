import { Component, OnInit } from '@angular/core';
import { Subscription } from './subscription';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss'],
})
export class SubscriptionFormComponent implements OnInit {
  constructor() { }

  model = new Subscription();

  onSubmit(): void {
    console.log('form submitted!', JSON.stringify(this.model));
  }

  ngOnInit(): void { }

  // TODO: DEBUG
  get diagnostic(): string { return JSON.stringify(this.model); }

}
