import { Component, OnInit } from '@angular/core';
import { Brand } from '../models/brand.model';
import { BrandService } from '../shared/services/brand.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];

  constructor(private brandService: BrandService, private router: Router) {}

  ngOnInit() {
    this.brandService.get().subscribe((data: HttpResponse<Brand[]>) => {
      if(data.status == 200){
        this.brands = data.body ?? [];
      }else{
        alert(data.statusText);
      }
    });
  }

  edit(brandId: number) {
    // Navigate to edit-brand component
    this.router.navigate(['/brand', brandId]);
  }

  delete(brandId: number) {
    this.brandService.delete(brandId).subscribe(() => {
      alert('Brand deleted successfully');
      this.ngOnInit();
    });
  }
}
