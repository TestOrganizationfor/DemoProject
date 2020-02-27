import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.css']
})
export class NextPageComponent implements OnInit {

  constructor(private demoservice: DemoService) { }

  ngOnInit() {
    // this.Getdata();
    this.PostSignIn();
  }

  async Getdata() {
    await this.demoservice.getProduct().subscribe(data => {
      if (data != null) {
        console.log(data);
      }

    },
      (error) => {
        // console.error(error);
      });
  }
  async PostSignIn() {
    await this.demoservice.PostSignIn().subscribe(data => {
      if (data != null) {
        console.log(data);
      }

    },
      (error) => {
        // console.error(error);
      });
  }

}
