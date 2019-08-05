import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SummaryComponent } from "./features/summary/summary.component";
import { BlockchainProofsComponent } from "./features/blockchain-proofs/blockchain-proofs.component";
import { PeopleTechComponent } from "./features/people-tech/people-tech.component";
import { MoneyStakesComponent } from "./features/money-stakes/money-stakes.component";

const routes: Routes = [
  {
    path: "summary",
    component: SummaryComponent
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
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
