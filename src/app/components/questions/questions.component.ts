import { Component } from '@angular/core';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  questions: any;
  constructor(
    private questionService: QuestionService,
  ) { }
  ngOnInit() {
    this.questionService.getAll().subscribe({
      next: res => {
        this.questions = res.data
      }
    })
  }
}
