import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'frontend-countdown',
  template: `
    <span *ngIf="displayTimer">
      <span *ngIf="displayTimeLeftText"> Time left | </span>
      <span> {{ isFuture ? '-' : '' }}{{ counter }} </span>
    </span>
  `,
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input() displayTimeLeftText?: boolean = false;
  @Input() nextTime!: Date;
  @Input() displayAlways?: boolean = false;

  isFuture = false;
  displayTimer = false;
  currentTime: Date = new Date();
  counter = '';
  MILLISECONDS_IN_AN_HOUR = -3600000;
  interval: any;

  ngOnInit() {
    this.startCounter();
  }

  startCounter() {
    this.isFuture = new Date() > new Date(this.nextTime);

    this.interval = setInterval(() => {
      let timeDiff;

      if (this.isFuture) {
        timeDiff = new Date(this.nextTime).getTime() - new Date().getTime();
        this.displayTimer = true;
      } else {
        timeDiff = new Date().getTime() - new Date(this.nextTime).getTime();

        this.displayTimer = this.displayAlways ? true : timeDiff > this.MILLISECONDS_IN_AN_HOUR;
      }
      const time = timeDiff < 0;

      if (time) {
        timeDiff = -timeDiff;
      }

      this.counter = this.formatTimeDiff(timeDiff);

      if ((time && timeDiff <= 0) || (!time && timeDiff >= 0)) {
        clearInterval(this.interval);
        this.startCounter();
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  formatTimeDiff(timeDiff: number) {
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const time =
      hours > 0 ? `${this.pad(hours)}h ${this.pad(minutes % 60)}m` : `${this.pad(minutes % 60)}m`;

    return time;
  }

  pad(num: number) {
    return num < 10 ? `0${num}` : num.toString();
  }
}
