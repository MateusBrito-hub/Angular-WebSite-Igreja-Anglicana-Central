import { Component } from '@angular/core';
import { InfosComponent } from '../../components/infos/infos.component';
import { CardGroupComponent } from '../../components/card-group/card-group.component';
import { SlideshowComponent } from '../../components/slideshow/slideshow.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InfosComponent, CardGroupComponent, SlideshowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
