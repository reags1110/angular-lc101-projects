import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos That Make Me Smile!';
  image1 = 'https://media.vanityfair.com/photos/5eb06b3ec135d48f5b12097d/5:3/w_1395,h_837,c_limit/baby-yoda-craze.jpg';
  image2 = 'https://www.jokejive.com/images/jokejive/a5/a5149fac2ea9518d84269480aa4180da.jpeg';
  image3 = 'https://pbs.twimg.com/media/CnLShkXXEAEzpZ2.jpg';

  constructor() { }

  ngOnInit() {
  }

}