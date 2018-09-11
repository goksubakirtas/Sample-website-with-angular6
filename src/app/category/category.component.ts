import { Component, OnInit } from '@angular/core';
import {CategoryService} from './category.service';
import {Category} from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  title = 'Categories';
  categories: Category[];
  selectedCategory: Category;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
    });
  }
  onSelected(category?: Category ) {
    if (category) {
        this.selectedCategory = category;
    } else {
        this.selectedCategory = null;
    }
  }

}
