import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {


  arrAPI: any;
  arrAPI_Img: any;
  imgNum: number;

  @Input() isPlay: boolean;
  @Output() isPlayChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  // public date;
  date: {year: number, month: number, day: number};

  constructor(private calendar: NgbCalendar, public APIService: ApiService) {
  }

  selectToday() {
    this.date = this.calendar.getToday();
    // console.log(this.date);
  }

  ngOnInit() {
    this.date = {
      year: 2015,
      month: 10,
      day: 31
    };

    this.callAPI();

  }

  callAPI(){
    this.APIService.getAllAPI(this.date).subscribe(
      res => {
        this.arrAPI = res;
        // console.log(a)
        this.imgNum = this.arrAPI.length;

        this.arrAPI_Img = this.APIService.getAllIMG(this.arrAPI, this.date);
        console.log(this.arrAPI_Img);
      }
    );
  }

  ngOnChanges(){
    this.callAPI();
  }

  slidePlayer() {
    this.isPlay = !this.isPlay;
    this.isPlayChange.emit(this.isPlay);
    // if (!this.isPlay) {
    //   this.currentIndexChange.emit(0);
    // }
  }

}
