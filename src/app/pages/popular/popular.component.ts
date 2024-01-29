import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  popularAnime: any = [];

  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.animeService.getPopular().subscribe((data: any) => {
    this.popularAnime = data;
    console.log(this.popularAnime[0].animeTitle);
    });
  }

}
