import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',

  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  date: any;
  //@Input()  size!: number | string;
  dateForm: any;
  constructor() {}
  profileForm = this.group({
    firstName: [''],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
  ngOnInit(): void {

  }
  countdown(){

  }

  onClick() {
    //const evtMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : '';
    //alert('Saved.');
    alert(this.date)
  }


}

