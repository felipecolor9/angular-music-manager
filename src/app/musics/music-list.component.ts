import { Component, OnInit } from "@angular/core";
import { Music } from "./music";

@Component({
    selector: 'app-music-list',
    templateUrl: './music-list.component.html'
})
export class MusicListComponent implements OnInit {
    
    musics: Music[] = [];
    
    ngOnInit(): void {
        this.musics = [ // Mock music
            {
                id: 1,
                name: 'Rose in Harlem',
                coverUrl:'',
                artist: 'Teyana Taylor',
                durationMS: 34200,
                rating: 3.9,
                releaseDate: '29/08/1998'
            } , {
                id: 2,
                name: 'N.Y State of mind',
                coverUrl:'',
                artist: 'NAS',
                durationMS: 45400,
                rating: 4.8,
                releaseDate: '20/05/1994'
            }
        ]
    }
}