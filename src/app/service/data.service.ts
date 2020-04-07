import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getIslands() {
    const url = `https://api.turnip.exchange/islands/`;
    return this.http.get(url);
  }

}
