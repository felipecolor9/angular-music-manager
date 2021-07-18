import { Component, OnInit } from "@angular/core";
import { Music } from "./music";
import { MusicService } from "./music.service";

@Component({
    templateUrl: './music-list.component.html'
})
export class MusicListComponent implements OnInit {
    
    _musics: Music[] = [];
    _filterBy: string;
    filteredMusics: Music[] = [];
    
    constructor(private musicService:MusicService) {}

    ngOnInit(): void {this.retrieveAll()}

    retrieveAll():void {
        this.musicService.getAll().subscribe({
            next: musics => { this._musics = musics;
            this.filteredMusics = this._musics;
            },
            error: err => console.log('Error', err)
        });  
    }

    deleteById(id: number): void {
        this.musicService.deleteById(id).subscribe({
            next: () => { console.log('Deleted with success!');
            this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    } 

    set filter(value : string) {
        this._filterBy = value;
        this.filteredMusics = this._musics.filter((music: Music) => music.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}