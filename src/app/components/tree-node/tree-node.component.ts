import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.scss'
})
export class TreeNodeComponent {
  @Input() node: any;
  @Input() last: boolean | undefined;

  constructor(
    private categoryService: CategoryService
  ) { }

  toggleNode(node: any) {
    node.isExpanded = !node.isExpanded;
  }

  onClick() {
    this.categoryService.setSelected(this.node.title)
  }
}
