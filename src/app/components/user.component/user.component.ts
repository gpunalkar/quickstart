
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostServices } from '../../services/post.services/post.services';

@Component({
  selector: 'user',
  templateUrl: `./user.component.html`,
  providers:[PostServices]
})

export class UserComponent {
  name: string;
  address: address;
  myPost: myPost[];

    constructor(private router: Router, private postServices:PostServices) {
    this.name = "This is contructor text";
    // this.address.street = 'Nagar Road';
    // this.address.city = 'Pune';
    this.postServices.getPost().subscribe( post => {this.myPost = post})
  }

  testFunction() {
    this.router.navigateByUrl('about');
  }
}

interface address {
  street: string,
  city: string
}

interface myPost{
  id :number,
  title: string, 
  body: string 
}
