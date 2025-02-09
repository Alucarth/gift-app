import { Gif, SearchResponse } from './../intefaces/gifs.interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];
  private apikey: string = '5NzNhizYF22vIwHkKKRo2qKkt5oqakO3';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  public gifList: Gif[] = []

  constructor(private http: HttpClient) {
    this.getLocalHistory()

    console.log('gif service ready')
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string){
    tag = tag.toLocaleLowerCase()
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter( (oldtag) => oldtag !== tag )
    }
    this._tagsHistory.unshift(tag)
    this._tagsHistory = this._tagsHistory.splice(0,10)
    this.saveLocalStorage()
  }

  saveLocalStorage(): void{
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  getLocalHistory():void  {
    if(localStorage.getItem('history')) this._tagsHistory = JSON.parse( localStorage.getItem('history')! )

    if(this._tagsHistory.length === 0 ) return;
    this.searchTag(this._tagsHistory[0])
  }

  searchTag(tag: string): void {
    tag = tag.trim()
    if(tag.length === 0 ) return;

    this.organizeHistory(tag)
    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '10')
      .set('q',tag)
    this.http.get <SearchResponse> (`${this.serviceUrl}/search`,{params})
             .subscribe( resp => {
                // console.log(resp.data)
                this.gifList = resp.data;
                console.log(this.gifList)
             })

    // this._tagsHistory.unshift( tag )
    console.log(this._tagsHistory)
  }


}
