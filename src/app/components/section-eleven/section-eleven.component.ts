import { Component } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';

@Component({
  selector: 'app-section-eleven',
  templateUrl: './section-eleven.component.html',
  styleUrl: './section-eleven.component.scss'
})
export class SectionElevenComponent {
  feedback: any
  constructor(
    private feedbackService: FeedbackService,
  ) { }
  ngOnInit() {
    this.feedbackService.getAll().subscribe({
      next: res => {
        this.feedback = res.data
      }
    })
  }
  ngAfterViewInit() {
    const swiperEl = document.querySelector('.mySwiper-feedback') as any;
    const prevButton = document.querySelector('.feedback-prev');
    const nextButton = document.querySelector('.feedback-next');
    if (swiperEl && prevButton && nextButton) {
      prevButton.addEventListener('click', () => {
        swiperEl.swiper.slidePrev();
      });

      nextButton.addEventListener('click', () => {
        swiperEl.swiper.slideNext();
      });
      Object.assign(swiperEl, {
        breakpoints: {
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          0: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          }
        },
      })
      swiperEl.initialize();
    }
  }
}
