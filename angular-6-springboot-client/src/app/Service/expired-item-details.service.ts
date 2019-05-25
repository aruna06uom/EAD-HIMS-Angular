import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpiredItemDetailsService {

  private baseUrl = 'api/expiredItems';

  constructor(private http: HttpClient) { }

  loadAllItemDetails(): Observable<any> {
    return this.http.get(`${this.baseUrl}/loadDetails`);
  }

}
