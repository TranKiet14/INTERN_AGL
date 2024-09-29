import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { ProductsCategoryComponent } from './components/products-category/products-category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { LogosComponent } from './components/logos/logos.component';
import { FooterComponent } from './components/footer/footer.component';
import { register } from 'swiper/element/bundle';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';
import { SectionSevenComponent } from './components/section-seven/section-seven.component';
import { SectionEightComponent } from './components/section-eight/section-eight.component';
import { SectionNineComponent } from './components/section-nine/section-nine.component';
import { SectionTenComponent } from './components/section-ten/section-ten.component';
import { SectionElevenComponent } from './components/section-eleven/section-eleven.component';
import { SectionTwelveComponent } from './components/section-twelve/section-twelve.component';
import { QuestionItemComponent } from './components/question-item/question-item.component';
import { provideHttpClient } from '@angular/common/http';
register();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SectionOneComponent,
    ProductsCategoryComponent,
    CategoriesComponent,
    QuestionsComponent,
    LogosComponent,
    FooterComponent,
    TreeViewComponent,
    TreeNodeComponent,
    SectionSevenComponent,
    SectionEightComponent,
    SectionNineComponent,
    SectionTenComponent,
    SectionElevenComponent,
    SectionTwelveComponent,
    QuestionItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
