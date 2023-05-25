import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand.model';
import { BrandService } from 'src/app/shared/services/brand.service';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.scss']
})
export class EditBrandComponent implements OnInit {
  brand: Brand| any = {};

  constructor(private brandService: BrandService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // Get the brandId from the Url active route
    let stringBrandId = this.activatedRoute.snapshot.paramMap.get('id') ?? "0";
    let brandId = parseInt(stringBrandId);
    this.brandService.getById(brandId).subscribe((data: HttpResponse<Brand>) => {
      if(data.status != 200) {
        alert(data.status + "\nNo se encontro el Brand con id: " + brandId + "\nRedireccionando a la pagina de Brand...");
        this.router.navigate(['/brand']);
      }else{
        // if 204 (No Content) is returned, then the brandId is invalid
        this.brand = data.body;
      }
    });
  }

  update(){
    this.brandService.put(this.brand).subscribe(response => {
      if(response.status == 200) {
        alert('Brand updated successfully!');
        this.router.navigate(['/brand']);
      }else{
        alert('Error: ' + response.status + '\nNo se pudo actualizar el Brand');
      }
    });
  }
}
