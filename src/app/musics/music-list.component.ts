import { Component, OnInit } from "@angular/core";
import { Music } from "./music";
import { MusicService } from "./music.service";

@Component({
    selector: 'app-music-list',
    templateUrl: './music-list.component.html'
})
export class MusicListComponent implements OnInit {
    
    _musics: Music[] = [];
    _filterBy: string;
    filteredMusics: Music[] = [];
    
    constructor(private musicService:MusicService) {}

    ngOnInit(): void {
        this._musics = this.musicService.getAll();
        this.filteredMusics = this._musics;
    }

    set filter(value : string) {
        this._filterBy = value;
        this.filteredMusics = this._musics.filter((music: Music) => music.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}