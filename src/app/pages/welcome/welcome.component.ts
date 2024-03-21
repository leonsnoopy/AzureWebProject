import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpserviceService } from '../../service/httpservice.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message: string = "";
  title: string = "";
  books: any[] = [];

  constructor(private httpService: HttpserviceService, private http: HttpClient) { }

  ngOnInit() {
  }

  Send() {
    this.httpService.sendLineNotifyApi(this.message)
  }

  getBooks() {
    this.http.get<any[]>('https://nodetestapi.azurewebsites.net/api/books')
      .subscribe(
        (response) => {
          this.books = response;
          console.log('Books:', this.books);
        },
        (error) => {
          console.error('Error fetching books:', error);
          alert("瀏覽失敗")
        }
      );
  }

  addBooks() {
    if (this.title.trim() == "") {
      alert("不要空白")
    } else {
      this.http.get<any[]>('https://nodetestapi.azurewebsites.net/api/addbook?title=' + this.title)
        .subscribe(
          (response) => {
            console.log('res:', response);
          },
          (error) => {
            console.error('Error fetching books:', error);
            alert("新增失敗")
          }
        );
    }

  }

  deleteBooks() {
    if (this.title.trim() == "") {
      alert("不要空白")
    } else {
      this.http.get<any[]>('https://nodetestapi.azurewebsites.net/api/deletebook?title=' + this.title)
        .subscribe(
          (response) => {
            console.log('res:', response);
          },
          (error) => {
            console.error('Error fetching books:', error);
            alert("刪除失敗")
          }
        );

    }

  }
}
