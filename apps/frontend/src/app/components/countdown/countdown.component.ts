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
    const interval = setInterval(() => {
      let timeDiff = new Date(this.nextTime).getTime() - new Date().getTime();
      const countUp = (timeDiff < 0);

      if (countUp) {
        timeDiff = -timeDiff;
      }

      this.counter = this.formatTimeDiff(timeDiff);

      if ((countUp && timeDiff <= 0) || (!countUp && timeDiff >= 0)) {
        clearInterval(interval);
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
