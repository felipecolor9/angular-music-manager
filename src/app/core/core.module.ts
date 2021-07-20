import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavigationBarComponent } from "./component/nav_bar/nav_bar.compoment";

@NgModule ({
    declarations: [ NavigationBarComponent],
    imports: [RouterModule],
    exports: [ NavigationBarComponent]   
})
export class CoreModule {}