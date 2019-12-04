import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, OnChanges {


  @Input() date: any;

  arrAPI: any;
  arrAPI_Img: any;

  imgNum: number;

  // date: {year: number, month: number, day: number};

  constructor(public APIService: ApiService) {
  }

  ngOnInit() {
    this.callAPI();
    // this.imgNum = this.arrAPI_I.length;
  }

  callAPI(){
    this.APIService.getAllAPI(this.date).subscribe(
      res => {
        this.arrAPI = res;
        this.arrAPI_Img = this.APIService.getAllIMG(this.arrAPI, this.date);
        this.imgNum = this.arrAPI_Img.length;
        // console.log(this.arrAPI_Img)
      }
    );
  }

  ngOnChanges(){
    this.callAPI();
    // this.imgNum = this.arrAPI_Img.length();
  }

}
