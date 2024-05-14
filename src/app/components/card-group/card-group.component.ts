import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-group',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-group.component.html',
  styleUrl: './card-group.component.css'
})
export class CardGroupComponent {

}
