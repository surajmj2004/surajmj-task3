import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../api-service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  products:any[]=[];

  constructor(private apisService:ApiService,private cdr:ChangeDetectorRef){}

  ngOnInit(){
    this.apisService.getproduct().subscribe((data: any)=>{
    this.products=data;
    this.cdr.detectChanges();
    
  })
  }
  
}
