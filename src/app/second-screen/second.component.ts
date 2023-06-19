import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" [(ngModel)]="serachPostId" placeholder="Post ID" />
    <input type="text" [(ngModel)]="searchInput" placeholder="Search..." />
    <button (click)="getData()">Get Data</button>
    <button (click)="getDataByPostId()">Get Data By Post Id</button>
    <ul>
      <li *ngFor="let item of data">{{ item }}</li>
    </ul>
  `,
})
export class SecondComponent implements OnInit {
  data!: any[];
  serachPostId?: string;
  searchInput?: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }

  getDataByPostId(): void {
    if (this.serachPostId) {
      const queryParams = {
        postId: this.serachPostId,
      };

      this.dataService.getCommentsByQuery(queryParams).subscribe(
        (response: Object[]) => {
          this.data = response.map((x) => JSON.stringify(x));
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    }
  }

  getData(): void {
    if (this.searchInput && this.serachPostId) {
      const queryParams = {
        postId: this.serachPostId,
      };

      const vm = this;
      this.dataService.getCommentsByQuery(queryParams).subscribe(
        (response: any[]) => {
          let dataArr = response;

          dataArr = dataArr.filter(
            (data) =>
              data.name.toLowerCase().includes(vm.searchInput) ||
              data.email.toLowerCase().includes(vm.searchInput) ||
              data.body.toLowerCase().includes(vm.searchInput)
          );

          this.data = dataArr.map((x) => JSON.stringify(x));
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    } else {
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
}
