import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from 'src/app/models/brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl: string = "https://localhost:7114/Brand";

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get<Brand[]>(this.apiUrl);
  }

  getById(brandId: number) {
    return this.httpClient.get<Brand>(`${this.apiUrl}/${brandId}`);
  }

  delete(brandId: number) {
    return this.httpClient.delete(`${this.apiUrl}/${brandId}`);
  }

  post(brand: Brand) {
    return this.httpClient.post(this.apiUrl, brand);
  }

  put(brand: Brand) {
    return this.httpClient.put(`${this.apiUrl}`, brand);
  }

}
