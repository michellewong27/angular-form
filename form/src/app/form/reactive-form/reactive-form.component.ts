import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/model/user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  userList: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}