import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { Music } from "./music"

@Injectable({
    providedIn: 'root'
})
export class MusicService {

    private musicUrl:string = 'http://localhost:3100/api/musics';

    constructor(private httpClient:HttpClient) {}

    getAll(): Observable<Music[]> { return this.httpClient.get<Music[]>(this.musicUrl) }

    retrieveByID(id:number): Observable<Music> { return this.httpClient.get<Music>(`${this.musicUrl}/${id}`)}

    save(music: Music): Observable<Music> {
       if (music.id) {
            return this.httpClient.put<Music>(`${this.musicUrl}/${music.id}`, music);
       } else {
            return this.httpClient.post<Music>(`${this.musicUrl}`, music);
            }
        } 

    deleteById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.musicUrl}/${id}`);
    }
}