import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  categories: any
  selectedCategory: any
  selected: number = 1
  constructor(
    private categoryService: CategoryService,
  ) { }
  ngOnInit(): void {
    this.getDataCategories(),
    this.getDataChildren()
  }

  getDataCategories(): void {
    this.categoryService.getAllParentCategories().subscribe(
      {
        next: res => {
          this.categories = res.data
        }
      }
    )
  }
  getDataChildren(): void {
    this.categoryService.getCategoriesByParentID(this.selected).subscribe(
      {
        next: res => {
          this.selectedCategory = res.data
        },
        error: (e) => {
          this.selectedCategory = null
        }
      }
    )
  }
  selectTag(index: number) {
    this.selected = index;
    this.getDataChildren()
  }
  ngAfterViewInit() {
    const swiperEl = document.querySelector('.mySwiper-category') as any;
    const prevButton = document.querySelector('.category-prev');
    const nextButton = document.querySelector('.category-next');
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
            slidesPerView: 4,
            spaceBetween: 0,
          },
          756: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          0: {
            slidesPerView: 1.5,
            spaceBetween: 0,
          }
        },
      })
      swiperEl.initialize();
    }
  }
}
