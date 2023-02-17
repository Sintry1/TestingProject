import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'frontend-countdown',
  template: '<p>{{ counter }}</p>',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {
  currentTime: Date = new Date();
  @Input() nextTime!: Date;
  counter = '';

  ngOnInit() {
    this.startCounter();
  }

  startCounter() {
    console.log(new Date(this.nextTime));
    console.log(new Date())
    console.log('is in the past:', new Date() > new Date(this.nextTime));
    console.log('is in the future:', new Date() < new Date(this.nextTime));

    const interval = setInterval(() => {
      let timeDiff;

      if(new Date() > new Date(this.nextTime)) {
        timeDiff = new Date(this.nextTime).getTime() - new Date().getTime();
      } else {
        timeDiff = new Date().getTime() - new Date(this.nextTime).getTime();
      }
      const countUp = (timeDiff < 0);

      if (countUp) {
        timeDiff = -timeDiff;
      }

      this.counter = this.formatTimeDiff(timeDiff);

      if ((countUp && timeDiff <= 0) || (!countUp && timeDiff >= 0)) {
        clearInterval(interval);
        this.startCounter();
      }
    }, 1000);
  }

  formatTimeDiff(timeDiff: number) {
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    return `${this.pad(hours)}:${this.pad(minutes % 60)}:${this.pad(seconds % 60)}`;
  }

  pad(num: number) {
    return (num < 10) ? `0${num}` : num.toString();
  }
}
