import { Component, Input } from '@angular/core';
import { Gif } from '../../intefaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  standalone: false,
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.scss'
})
export class GifsCardComponent {
  @Input()
  public gif!: Gif;

}
