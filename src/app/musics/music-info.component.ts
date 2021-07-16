import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component ({
    templateUrl: './music-info.component.html'
})
export class MusicInfoComponent implements OnInit {

    musicId: number;

    constructor(private activatedRoute: ActivatedRoute) { } // Active Route

    ngOnInit(): void {
       this.musicId = +this.activatedRoute.snapshot.paramMap.get('id');
    }

}