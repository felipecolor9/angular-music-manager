import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Music } from "./music";
import { MusicService } from "./music.service";

@Component ({
    templateUrl: './music-info.component.html'
})
export class MusicInfoComponent implements OnInit {

    music: Music;

    constructor(private activatedRoute: ActivatedRoute, private musicService: MusicService) { } // Active Route

    ngOnInit(): void {
       this.music = this.musicService.retrieveByID(+this.activatedRoute.snapshot.paramMap.get('id'));
    }

}