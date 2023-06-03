import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { tap } from 'rxjs';
import { Category } from 'src/app/data/models/category-model';
import { CategoryService } from 'src/app/data/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories!: Category[];
  readonly categoryForm = new FormGroup({
    title: new FormControl('', {
      validators: [Validators.required],
    }),
    description: new FormControl('', {
      validators: [Validators.required],
    }),
  });
  submit() {
    this.categoryService
      .addCategory(this.categoryForm.value)
      .subscribe((category: Category) => {
        this.categories.push(category);
        this.categoryForm.reset();
        this.showMessage('Category added successfully', 'success');
      });
  }
  private showMessage(msg: string, type: string) {
    this.messageService.add({
      severity: type,
      summary: type,
      detail: msg,
    });
  }
  ngOnInit(): void {
    this.categoryService
      .getAllCategory()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
  }
  constructor(
    private categoryService: CategoryService,
    private messageService: MessageService
  ) {}
}
