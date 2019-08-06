import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SummaryMainViewComponent } from "./features/summary/summary-main-view/summary-main-view.component";

import { BlockchainProofsComponent } from "./features/blockchain-proofs/blockchain-proofs.component";
import { PeopleTechComponent } from "./features/people-tech/people-tech.component";
import { MoneyStakesComponent } from "./features/money-stakes/money-stakes.component";

const navRoutes: Routes = [
  {
    path: "summary",
    component: SummaryMainViewComponent
  },
  {
    path: "bcproofs",
    component: BlockchainProofsComponent
  },
  {
    path: "peopletech",
    component: PeopleTechComponent
  },
  {
    path: "monstakes",
    component: MoneyStakesComponent
  },
  {
    path: "",
    redirectTo: "summary",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(navRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
