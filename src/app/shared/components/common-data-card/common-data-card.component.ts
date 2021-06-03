import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-data-card',
  templateUrl: './common-data-card.component.html',
  styleUrls: ['./common-data-card.component.scss'],
})
export class CommonDataCardComponent implements OnInit {
  @Input() public cardType: string;
  @Input() public userType: string;

  @Input() public flightdata: any;
  @Input() public passengerData: any;

  constructor(private router: Router) {}

  ngOnInit() {
    // console.log('@Input() flightdata', this.flightdata);
  }

  public navigateOnClick(): void {
    console.log('begin navigation');
    this.router.navigateByUrl(
      '/layout/staff/service/CHECKIN?flight=1A - 1211&passenger='
    );
  }

  public renderCardBackground(): string {
    if (this.cardType === '1AIR') {
      return `linear-gradient(135deg, rgba(244, 244, 244, 0.07) 0%,
      rgba(244, 244, 244, 0.07) 12.5%,
      rgba(211, 211, 211, 0.07) 12.5%,
      rgba(211, 211, 211, 0.07) 25%,
      rgba(178, 178, 178, 0.07) 25%,
      rgba(178, 178, 178, 0.07) 37.5%,
      rgba(145, 145, 145, 0.07) 37.5%,
      rgba(145, 145, 145, 0.07) 50%,
      rgba(113, 113, 113, 0.07) 50%,
      rgba(113, 113, 113, 0.07) 62.5%,
      rgba(80, 80, 80, 0.07) 62.5%,
      rgba(80, 80, 80, 0.07) 75%,
      rgba(47, 47, 47, 0.07) 75%,
      rgba(47, 47, 47, 0.07) 87.5%,
      rgba(14, 14, 14, 0.07) 87.5%,
      rgba(14, 14, 14, 0.07) 100%),
    linear-gradient(45deg, rgba(236, 236, 236, 0.07) 0%,
      rgba(236, 236, 236, 0.07) 12.5%, rgba(210, 210, 210, 0.07) 12.5%,
      rgba(210, 210, 210, 0.07) 25%, rgba(183, 183, 183, 0.07) 25%,
      rgba(183, 183, 183, 0.07) 37.5%, rgba(157, 157, 157, 0.07) 37.5%,
      rgba(157, 157, 157, 0.07) 50%, rgba(130, 130, 130, 0.07) 50%,
      rgba(130, 130, 130, 0.07) 62.5%, rgba(104, 104, 104, 0.07) 62.5%,
      rgba(104, 104, 104, 0.07) 75%, rgba(77, 77, 77, 0.07) 75%,
      rgba(77, 77, 77, 0.07) 87.5%, rgba(51, 51, 51, 0.07) 87.5%,
      rgba(51, 51, 51, 0.07) 100%), linear-gradient(90deg, #ffffff, #ffffff)`;
    } else if (this.cardType === 'Supa Airways') {
      return `linear-gradient(146deg, rgba(44, 35, 109, 0.5) 0%,
      rgba(44, 35, 109, 0.5) 14.286%, rgba(64, 54, 108, 0.5) 14.286%,
      rgba(64, 54, 108, 0.5) 28.572%, rgba(83, 72, 106, 0.5) 28.572%,
      rgba(83, 72, 106, 0.5) 42.858%, rgba(103, 91, 105, 0.5) 42.858%,
      rgba(103, 91, 105, 0.5) 57.144%, rgba(123, 110, 103, 0.5) 57.144%,
      rgba(123, 110, 103, 0.5) 71.43%, rgba(142, 128, 102, 0.5) 71.43%,
      rgba(142, 128, 102, 0.5) 85.716%, rgba(162, 147, 100, 0.5) 85.716%,
      rgba(162, 147, 100, 0.5) 100.002%), linear-gradient(349deg, rgb(203, 4, 7) 0%,
      rgb(203, 4, 7) 14.286%, rgb(178, 9, 6) 14.286%, rgb(178, 9, 6) 28.572%,
      rgb(152, 13, 5) 28.572%, rgb(152, 13, 5) 42.858%, rgb(127, 18, 4) 42.858%,
      rgb(127, 18, 4) 57.144%, rgb(101, 22, 3) 57.144%, rgb(101, 22, 3) 71.43%,
      rgb(76, 27, 2) 71.43%, rgb(76, 27, 2) 85.716%, rgb(50, 31, 1) 85.716%,
      rgb(50, 31, 1) 100.002%)`;
    } else {
      return `linear-gradient(66deg, rgba(37, 37, 37, 0.05) 0%,
      rgba(37, 37, 37, 0.05) 33.333%, rgba(89, 89, 89, 0.05) 33.333%,
      rgba(89, 89, 89, 0.05) 66.666%, rgba(234, 234, 234, 0.05) 66.666%,
      rgba(234, 234, 234, 0.05) 99.999%), linear-gradient(130deg, rgba(104, 104, 104, 0.05) 0%,
      rgba(104, 104, 104, 0.05) 33.333%, rgba(246, 246, 246, 0.05) 33.333%,
      rgba(246, 246, 246, 0.05) 66.666%, rgba(178, 178, 178, 0.05) 66.666%,
      rgba(178, 178, 178, 0.05) 99.999%), linear-gradient(72deg, rgba(168, 168, 168, 0.05) 0%,
      rgba(168, 168, 168, 0.05) 33.333%, rgba(73, 73, 73, 0.05) 33.333%,
      rgba(73, 73, 73, 0.05) 66.666%, rgba(253, 253, 253, 0.05) 66.666%,
      rgba(253, 253, 253, 0.05) 99.999%), linear-gradient(139deg, rgba(241, 241, 241, 0.05) 0%,
      rgba(241, 241, 241, 0.05) 33.333%, rgba(109, 109, 109, 0.05) 33.333%,
      rgba(109, 109, 109, 0.05) 66.666%, rgba(100, 100, 100, 0.05) 66.666%,
      rgba(100, 100, 100, 0.05) 99.999%), linear-gradient(111deg, rgba(65, 65, 65, 0.05) 0%,
      rgba(65, 65, 65, 0.05) 33.333%, rgba(223, 223, 223, 0.05) 33.333%,
      rgba(223, 223, 223, 0.05) 66.666%, rgba(50, 50, 50, 0.05) 66.666%,
      rgba(50, 50, 50, 0.05) 99.999%), linear-gradient(90deg, rgb(41, 89, 88),
      rgb(80, 210, 116))`;
    }
  }
  public renderCardFontColor(): string {
    if (this.cardType === '1AIR') {
      return 'black';
    } else {
      return `white`;
    }
  }
}
