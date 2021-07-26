import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import KeenSlider, {TDetails} from 'keen-slider';

@Component({
  selector: 'app-keen-basic',
  templateUrl: './keen-basic.component.html',
  styleUrls: ['./keen-basic.component.scss']
})
export class KeenBasicComponent implements AfterViewInit, OnDestroy {

  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement>
  interval: any = 0
  pause: boolean = false
  slider: KeenSlider = null

  resetInterval() {
    clearInterval(this.interval)
  }
  setInterval() {
    this.resetInterval()
    this.interval = setInterval(() => {
      if (!this.pause) {
        this.slider.next()
      }
    }, 5000)
  }

  setPause(active) {
    this.pause = active
    this.setInterval()
  }

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      duration: 1000,
      dragStart: () => {
        this.setPause(true)
      },
      dragEnd: () => {
        this.setPause(false)
      },
    })
    this.setInterval()
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
}
