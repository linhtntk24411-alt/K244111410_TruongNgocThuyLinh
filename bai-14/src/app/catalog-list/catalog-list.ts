import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../catalog';

@Component({
  selector: 'app-catalog-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog-list.html',
  styleUrls: ['./catalog-list.css']
})
export class CatalogListComponent {
  public categories: any;

  constructor(private cservice: CatalogService) {
    this.categories = cservice.getCategories();
  }
}