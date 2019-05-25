import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {

  private baseUrl = 'api/items';

  constructor(private http: HttpClient) { }

  loadAllItemDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/itemDetailsAll`);
  }

  submitItems(itemDetails: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/submitItems`, itemDetails);
  }

  loadItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}/load`);
  }


  
}