import { Component, OnInit } from "@angular/core";
import { Music } from "./music";
import { MusicService } from "./music.service";

@Component({
    selector: 'app-music-list',
    templateUrl: './music-list.component.html'
})
export class MusicListComponent implements OnInit {
    
    musics: Music[] = [];
    
    constructor(private musicService:MusicService) {}

    ngOnInit(): void {
        this.musics = this.musicService.getAll();
    }
}