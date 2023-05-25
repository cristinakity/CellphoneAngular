import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand.model';
import { BrandService } from 'src/app/shared/services/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent implements OnInit {
  brand: Brand= { brandId: 0, name: ''};

  constructor(
    private brandService: BrandService, 
    private router: Router) 
  { }

  ngOnInit(): void {
    this.brand = { brandId: 0, name: ''};
  }

  save() { 
    this.brandService.post(this.brand).subscribe(response => {
      console.log(response);
      if(response.status == 201) {
        alert('Brand added successfully!');
        this.router.navigate(['/brand']);
      }else{
        alert('Error: ' + response.status + '\nNo se pudo agregar el Brand');
      }
    });
  }
}
