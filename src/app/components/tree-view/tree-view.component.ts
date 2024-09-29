import { Component, Input } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { tree } from '../../helpers/createTree';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.scss'
})
export class TreeViewComponent {
  @Input() selectedCategory: any
  
  data: any
  constructor(
    private categoryService: CategoryService,
  ) { }
  ngOnInit(): void {
    this.getDataCategories()
  }

  getDataCategories(): void {
    this.categoryService.getAll().subscribe(
      {
        next: res => {
          this.data = tree(res.data)
        }
      }
    )
  }

  toggleNode(node: any) {
    node.isExpanded = !node.isExpanded;
  }

  getTitle(value: any) {
    console.log(value)
  }
}
