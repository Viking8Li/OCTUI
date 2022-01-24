import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {

  public topics = ["Angular", "C#", "React"]
  userModel = new User('', 'john@gmail.com', 123456,'C#', 'morning', true);

  constructor() {

  }
  ngOnInit(): void {

  }

}
