import {Component, Input, OnInit} from '@angular/core';
import {map, interval, take} from 'rxjs';




@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})


export class CountdownTimerComponent implements OnInit{

  public startTime = new Date();
  //public eventTime = new Date('Jan 01 2025 00:00:00');
  public eventTime = new Date();
  public countdownStarted!: boolean;
  public daysRemaining!: number;
  public hoursRemaining!: number;
  public minutesRemaining!: number;
  public secondsRemaining!: number;
  public millisecondsRemaining!: number;


  public timer:any;



  //private duration: number;
 // public updateTime(month: number, day:number, year:number) {


  public  updateTime() {
    //console.log(seconds)

    //this.secondsRemaining = seconds;

    var distance = this.eventTime.getTime() - new Date().getTime();
    if (distance < 0) {

      clearInterval(1000);
      //document.getElementById('countdown').innerHTML = 'EXPIRED!';

      return;
    }
    var milisecondsInASecond = 1000;
    var SecondsInAMinute  = milisecondsInASecond*60;


    var minutesInAnHour = SecondsInAMinute * 60 ;
    var hoursInADay = minutesInAnHour* 24;
    this.daysRemaining = Math.floor(distance / hoursInADay);
    this.hoursRemaining = Math.floor((distance % hoursInADay) / minutesInAnHour);
    this.minutesRemaining = Math.floor((distance % minutesInAnHour) / SecondsInAMinute);
    this.millisecondsRemaining = distance
    this.secondsRemaining = Math.floor((distance % (SecondsInAMinute)) / milisecondsInASecond);

    //this.daysRemaining = this.eventTime.getDay() - this.currentTime.getDay()
    //this.hoursRemaining = this.eventTime.getH() - this.currentTime.getDay()

   // this.minutesRemaining = this.eventTime.getMinutes() - this.currentTime.getMinutes()
    //console.log(this.daysRemaining)
    //console.log(seconds)


    //this.secondsToDday = Math.floor((timeDifference) / (1000) % this.SecondsInAMinute);




  }
  public startTimer(dateInput:any){
   //public startTimer(month: number, day:number, year:number) {
  //console.log(dateInput.Year);
  //var year = document.getElementById("Year")!.value;

    var year =  (<HTMLInputElement>document.getElementById("Year")).value;
    var month =  (<HTMLInputElement>document.getElementById("Month")).value;
    var day =    (<HTMLInputElement>document.getElementById("Day")).value;

    this.startTime = new Date();
    this.eventTime = new Date(`${month}/${day}/${year}`)
    console.log(`${month}/${day}/${year}`)

    this.updateTime();
    this.countdownStarted = true;

    this.timer = setInterval(() => this.updateTime(),1000)


  }  public startCountdown() {
    this.updateTime()
    interval(1000).pipe(take(this.millisecondsRemaining), map(count => this.millisecondsRemaining - count)).subscribe(seconds => {
      this.updateTime();
    })


    const timerInterval = interval(1000)
    timerInterval.pipe(take(this.millisecondsRemaining), map(count => this.millisecondsRemaining - count)).subscribe(seconds => {
      this.updateTime();
      // const timer = timer
      //this.day = 1, this.month = 1, this.year = 2000;
    })}

  ngOnInit(): void {
    this.countdownStarted = false;
    //const duration = 15 * 60 // 15 minutes

    //interval(1000).pipe(take(this.), map(count => duration - count)).subscribe(seconds => {
     // this.updateTime();
      //this.duration = 1000

      //this.subscription = interval(this.duration).subscribe(x => this.timeDifference())
    //})

    // private timeDifference() {
    //   var difference = this.eventTime.getTime() - this.currentTime.getTime()
    //
    // }3
  }}
