import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { mergeAll, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  // private API =
  //   'https://epic.gsfc.nasa.gov/api/natural/date/2018-11-01?api_key=XfGFzxsjGrHgVPJIHyhdk4RWfSNj5r2SiBdTMsNT';
  public key = '?api_key=XfGFzxsjGrHgVPJIHyhdk4RWfSNj5r2SiBdTMsNT';


  constructor(private http: HttpClient) {}

  getAllAPI(date) {
    return this.http.get( `${environment.apiURL}/api/natural/date/${date.year}-${date.month}-${date.day}${this.key}`);
  }

  // private API_Img = 'https://epic.gsfc.nasa.gov/archive/natural/2018/11/01/png/';

  getAllIMG(arrAPI: any, date) {
    return arrAPI.map(item => {
      // console.log(item);
      // const urlImg = `${this.API_Img}${item.image}.png`;
      const urlImg = `${environment.apiURL}/archive/natural/${date.year}/${date.month}/${date.day}/png/${item.image}.png`;
      return urlImg;
    });
  }
}
