
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexEasyComponent } from "./index-easy/index-easy.component";
import { IndexHardComponent } from "./index-hard/index-hard.component";
import { IndexMediumComponent } from "./index-medium/index-medium.component";





const routes : Routes = [
    {path : "", redirectTo: "/home", pathMatch: "full"}, //pathMatch imposta la pagina di default
    {path:"home", component:IndexEasyComponent },
    {path:"medium", component: IndexMediumComponent},
    {path: "hard", component:IndexHardComponent},
    


    
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }