import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MusicInfoComponent } from "./music-info.component";
import { MusicListComponent } from "./music-list.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StarModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app.pipe.module";

@NgModule({
    declarations: [
        MusicListComponent,
        MusicInfoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path:'musics', component: MusicListComponent 
            },
            {
                path:'musics/info/:id', component: MusicInfoComponent
            }   
        ])
    ]
})
export class MusicModule { }