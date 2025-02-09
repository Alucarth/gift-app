import { Component, Input } from '@angular/core';
import { Gif } from '../../intefaces/gifs.interfaces';

@Component({
  selector: 'gif-card-list',
  standalone: false,
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  @Input()
  public gifs: Gif[] = [];

}
