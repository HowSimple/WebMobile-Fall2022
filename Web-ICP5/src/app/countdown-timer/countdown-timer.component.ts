import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {map, Observable, take} from 'rxjs';
import { timer, Subscription, interval } from 'rxjs';



@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})


export class CountdownTimerComponent implements OnInit{

  public currentTime = new Date();
  public eventTime = new Date('Jan 01 2025 00:00:00');
  public daysRemaining!: number;
  public hoursRemaining!: number;
  public minutesRemaining!: number;
  //public secondsRemaining!: number;



  //private duration: number;
  public updateTime(seconds: number) {
    //console.log(seconds)
    var hoursInADay = 24;
    var minutesInAnHour = 60;
    var SecondsInAMinute  = 60;
    //this.secondsRemaining = seconds;

    this.daysRemaining = this.eventTime.getTime() - this.currentTime.getTime()

    this.minutesRemaining = this.eventTime.getMinutes() - this.currentTime.getMinutes()
    console.log(this.daysRemaining)
    //console.log(seconds)


    //this.secondsToDday = Math.floor((timeDifference) / (1000) % this.SecondsInAMinute);




  }

  public startCountdown() {
    const timerInterval = interval(1000)
    // const timer = timer
  }

  ngOnInit(): void {

    const duration = 15 * 60 // 15 minutes

    interval(1000).pipe(take(duration), map(count => duration - count)).subscribe(seconds => {
      this.updateTime(seconds);
      //this.duration = 1000

      //this.subscription = interval(this.duration).subscribe(x => this.timeDifference())
    })

    // private timeDifference() {
    //   var difference = this.eventTime.getTime() - this.currentTime.getTime()
    //
    // }
  }}
