import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { DataDisplayComponent } from '../data-display/data-display.component';

@Component({
  selector: 'app-root',
  template: `<app-data-display [data]="data"></app-data-display> `,
})
export class FirstScreenComponent implements OnInit {
  data!: any[];
  searchInput?: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.dataService.getPosts().subscribe(
      (response: Object[]) => {
        this.data = response.map((x) => JSON.stringify(x));
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }
}
