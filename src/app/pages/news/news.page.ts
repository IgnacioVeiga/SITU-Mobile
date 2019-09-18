import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: 'news.page.html'
})
export class NewsPage implements OnInit {
  loading: boolean;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  goHome() {
    this.router.navigate(['home']);
  }

}
