import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService,private httpClientService: HttpClientService) {
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpiner(SpinnerType.BallScaleMultiple);

       this.httpClientService.get<Product[]>({
        controller:"products"
        //fullEndPoint:"https://localhost:7283/api/Products"
       }).subscribe(data=> console.log(data));

    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   name:"Kalem",
    //   stock:20,
    //   price:15
    // }).subscribe();

    // this.httpClientService.put({
    //   controller:"products"
    // },{
    //   id:"a80e7afe-783b-45ce-9778-08db191da4e4",
    //   name:"Pilot Kalem",
    //   stock:130,
    //   price:50
    // }).subscribe();

    //  this.httpClientService.delete({
    //    controller:"products"
    //  },"1ecd0b2d-7b8e-455c-9779-08db191da4e4").subscribe();
   }

}
