import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsService){
  }

  ngOnInit(): void {
    // this.gifsService.getLocalHistory()
  }

  public getTagHistories(): string []
  {
    return this.gifsService.tagsHistory
  }

  loadGifs(tag: string)
  {
    this.gifsService.searchTag(tag)
  }

}
