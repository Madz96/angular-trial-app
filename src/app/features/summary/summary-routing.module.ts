import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

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
  imports: [RouterModule.forChild(summaryRoutes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule {}
