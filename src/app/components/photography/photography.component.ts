import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {

  loadedInstagramApi = false;
  private apiUrl = 'https://www.instagram.com/arijitpatra/?__a=1';
  data: any = [];
  imgUrl: any = [];
  i: number;

  constructor(private http: HttpClient) {     
    // this.getInstagram();
    this.saveLinks('fakeLink');
  }

  getInstagram() {
    this.http.get(this.apiUrl).subscribe(data => {
      this.data = data;
      for ( this.i = 0; this.i< this.data['graphql']['user']['edge_owner_to_timeline_media']['edges'].length ; this.i++) {
      this.saveLinks(this.data['graphql']['user']['edge_owner_to_timeline_media']['edges'][this.i]['node']['display_url']);
      }
    });
  }

  saveLinks(link: any) {
    // this.imgUrl.push(link);
    this.imgUrl = ["https://bit.ly/2rcRkLl", "https://bit.ly/2FpMRJe", "https://bit.ly/2HAxfEM"];
    this.loadedInstagramApi = true;
  }

  passLink(passedUrl : string) {
      console.log("url is ", passedUrl);
  }

  ngOnInit() {
  }

}
