import { Component, OnInit } from '@angular/core';
import { Brand } from '../models/brand.model';
import { BrandService } from '../shared/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];

  constructor(private brandService: BrandService) {}

  ngOnInit() {
    this.brandService.get().subscribe((data: Brand[]) => {
      this.brands = data;
    });
  }

  edit(brand: Brand) {}

  delete(brand: Brand) {}
}
