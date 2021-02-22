import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kongpanions',
  templateUrl: './kongpanions.component.html',
  styleUrls: ['./kongpanions.component.css']
})

export class KongpanionsComponent implements OnInit {
  kongpanionData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getKongpanions();
  }

  getKongpanions(): void {
    let kongURL = 'https://api.kongregate.com/api/kongpanions/index.json';
    this.http.get(kongURL).subscribe((response) => {
      this.kongpanionData.push(response['kongpanions'][9], response['kongpanions'][12], response['kongpanions'][54], response['kongpanions'][67], response['kongpanions'][97], response['kongpanions'][105], response['kongpanions'][116]);
      let subset = response['kongpanions'].slice(164,306);
      this.kongpanionData = this.kongpanionData.concat(subset);
      this.kongpanionData.forEach((kp) => {
        kp.description = kp.description.replace(/(<([^>]+)>)/gi, "");
      })
    });
  }

}
