import { Injectable } from '@angular/core';
import {Category} from './category';

@Injectable()
export class CategoryDataService {



    // Placeholder for category's
    categories: Category[] = [];

    // Placeholder for last id so we can simulate
    // automatic incrementing of id's
    lastId = 0;

    i = 2;

  constructor() { }

  // Simulate POST /categories
  addCategory(category: Category): CategoryDataService {
    if (!category.id) {
      this.lastId = this.categories.length;
      category.id = ++this.lastId;

    }

    for (let cat of this.categories){
      if (category.name === cat.name) {
        category.name = cat.name + " " + this.i;
        this.i = this.i + 1;
      }

    }

    this.categories.push(category);
    return this;
  }

  // Simulate DELETE /categories/:id
  deleteCategoryById(id: number): CategoryDataService {
    this.categories = this.categories
      .filter(category => category.id !== id);
      let newId = 0;
      for (let category of this.categories){
        category.id = ++newId;
      }
    return this;
  }

  // Simulate PUT /categories/:id
  updateCategoryById(id: number, values: Object = {}): Category | any {
    let category = this.getCategoryById(id);
    if (!category) {
      return null;
    }
    Object.assign(category, values);
    return category;
  }

  // Simulate GET /categories
  getAllCategories(): Category[] {
    return this.categories;
  }

  // Simulate GET /categories/:id
  getCategoryById(id: number): Category | any{
    return this.categories
      .filter(category => category.id === id)
      .pop();
  }
}
