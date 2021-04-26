import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-noti-navbar',
  templateUrl: './noti-navbar.component.html',
  styleUrls: ['./noti-navbar.component.scss']
})
export class NotiNavbarComponent implements OnInit {

  @Input() information!:notinavbar;
  constructor() { }

  ngOnInit(): void {
    console.log("noti-nav")
    console.log(this.information)
  }

}

interface notinavbar{
  content: string,
id_post: number,
type: string,
}
