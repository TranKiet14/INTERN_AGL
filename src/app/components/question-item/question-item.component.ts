import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrl: './question-item.component.scss'
})
export class QuestionItemComponent {
  @Input() data: any
  expanded: boolean = false
  changeExpand () {
    this.expanded = !this.expanded
  }
}
