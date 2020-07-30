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

  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit(): void { }
}
