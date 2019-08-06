import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const summaryRoutes: Routes = [
  {
    path: "peoplebtn",
    redirectTo: "/peopletech",
    pathMatch: "full"
  },
  {
    path: "databtn",
    redirectTo: "/peopletech",
    pathMatch: "full"
  },
  {
    path: "proofbtn",
    redirectTo: "/bcproofs",
    pathMatch: "full"
  },
  {
    path: "moneybtn",
    redirectTo: "/monstakes",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(summaryRoutes)],
  declarations: []
})
export class SummaryRoutingModule {}
