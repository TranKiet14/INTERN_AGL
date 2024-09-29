import { Component } from '@angular/core';
import { LogoService } from '../../services/logo.service';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrl: './logos.component.scss'
})
export class LogosComponent {
  logos: any;
  constructor(
    private logoService: LogoService,
  ) { }
  ngOnInit() {
    this.logoService.getAll().subscribe({
      next: res => {
        this.logos = res.data
      }
    })
  }
}
