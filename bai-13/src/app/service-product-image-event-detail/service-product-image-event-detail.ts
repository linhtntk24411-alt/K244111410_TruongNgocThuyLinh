import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product';

@Component({
  selector: 'app-service-product-image-event-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-product-image-event-detail.html',
  styleUrls: ['./service-product-image-event-detail.css']
})
export class ServiceProductImageEventDetailComponent {
  selectedProduct: any;

  constructor(private activateRoute: ActivatedRoute, private _fs: ProductService, private router: Router) {
    activateRoute.paramMap.subscribe(
      (param) => {
        let id = param.get('id');
        if (id != null) {
          this.selectedProduct = _fs.getProductDetail(id);
        }
      }
    );
  }

  goBack() {
    this.router.navigate(['service-product-image-event']);
  }
}