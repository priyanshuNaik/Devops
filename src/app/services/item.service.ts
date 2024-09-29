import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseUrl = 'http://localhost:8080/api/items';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}`);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/${id}`);
  }

  createItem(item: Item): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, item);
  }

  updateItem(id: number, item: Item): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, item);
  }

  deleteItem(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
