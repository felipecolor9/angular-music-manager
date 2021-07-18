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
       this.musicService.retrieveByID(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
        next: music => this.music = music,
        error: err => console.log('Error', err)
       });
    }

    save(): void {
        this.musicService.save(this.music).subscribe({
            next: music => console.log('Saved with Success!', music),
            error: err => console.log('Error', err)
        });
    }
}