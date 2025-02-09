import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gif-search-box',
  standalone: false,
  template: `
    <h5>Buscar: </h5>
    <input type="text" class="form-control" placeholder="buscar gifs ..."
        (keyup.enter)="searchTag()"
        #txtTagInput
    >
  `,
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;
  constructor( private gifsService: GifsService){}
  searchTag()
  {
    const newTag = this.tagInput.nativeElement.value
    // console.log({newTag})

    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = ''
  }
}
