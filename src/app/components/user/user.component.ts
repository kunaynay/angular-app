import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService: DataService) {
    console.log("Constructor Runs!");
  }

  ngOnInit() {
    console.log("ngOnIt ran!");

    this.name = "John Doe";
    this.age = 30;
    this.email = "jdoe@gmail.com";
    this.address = {
      street: "50 main st.",
      city: "Chicago",
      state: "IL"
    };
    this.hobbies = ["code", "workout", "sleep"];

    this.dataService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  onClick() {
    this.name = "Kunal Chauhan";
    this.hobbies.push("New hobby");
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
