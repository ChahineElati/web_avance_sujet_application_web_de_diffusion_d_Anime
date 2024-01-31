import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {

  anime_id!: number;
  animedetails!: any;

  constructor(private route: ActivatedRoute, private animeService: AnimeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.anime_id = +params['id'];
    });
    this.animeService.getAnimeInfo(this.anime_id).subscribe(data => {
      this.animedetails = data;
    })
  }

}
