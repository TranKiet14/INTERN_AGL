import { Component } from '@angular/core';
import { CityService } from '../../services/city.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.scss'
})
export class SectionOneComponent {
  selectedCities: string[] = [];
  cities: any;
  constructor(
    private cityService: CityService,
    private categoryService: CategoryService
  ) { }
  ngOnInit() {
    this.cityService.getAll().subscribe({
      next: res => {
        this.cities = res.data
      }
    })
  }
  onCheckboxChange(event: any) {
    const value = event.target.value;
    if (event.target.checked) {
      this.selectedCities.push(value);
    } else {
      const index = this.selectedCities.indexOf(value);
      if (index > -1) {
        this.selectedCities.splice(index, 1);
      }
    }
  }
  getSelectedCity(): string {
    if (this.selectedCities.length === 0) {
      return 'Chọn vị trí';
    } else if (this.selectedCities.length === 1) {
      return this.getLabelCity(this.selectedCities[0]);
    } else if (this.selectedCities.length === 2) {
      return this.getLabelCity(this.selectedCities[0]) + "," + this.getLabelCity(this.selectedCities[1]);
    } else {
      return `${this.selectedCities.length} lựa chọn`;
    }
  }
  getLabelCity(value: string): string {
    for (const item of this.cities) {
      if(item.id === parseInt(value)) {
        return item.title
      }
    }
    return ""
  }
  getSelectedCategory(): string {
    if (!this.categoryService.getSelected()) {
      return 'Bạn cần tìm gì';
    } else {
      return this.categoryService.getSelected();
    }
  }
}
