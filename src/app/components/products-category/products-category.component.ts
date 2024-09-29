import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrl: './products-category.component.scss'
})
export class ProductsCategoryComponent {
  @Input() title!: string;
  @Input() slug!: string;
  products: any
  constructor(
    private productService: ProductService,
  ) { }
  ngOnInit() {
    this.productService.getProductsByCategorySlug(this.slug).subscribe({
      next: res => {
        this.products = res.data
      }
    })
  }
  ngAfterViewInit() {
    const swiperEl = document.querySelector(`.mySwiper-${this.slug}`) as any;
    const prevButton = document.querySelector(`.${this.slug}-prev`);
    const nextButton = document.querySelector(`.${this.slug}-next`);
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
            slidesPerView: 5,
            spaceBetween: 20,
          },
          756: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          }
        },
      })
      swiperEl.initialize();
    }
  }
}
