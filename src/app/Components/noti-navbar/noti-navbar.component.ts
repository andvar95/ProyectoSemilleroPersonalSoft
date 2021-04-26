import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noti-navbar',
  templateUrl: './noti-navbar.component.html',
  styleUrls: ['./noti-navbar.component.scss']
})
export class NotiNavbarComponent implements OnInit {

  @Input() information! :notinavbar;
  constructor(
    private router:Router) { }

  ngOnInit(): void {
    console.log("noti-nav")
    console.log(this.information)
  }

  gotoPost(){
    this.router.navigate(['/home/post'],{queryParams:{id_post:this.information.id_post}})
  }

}



interface notinavbar{
  content: string,
id_post: number,
type: string,
}
