import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SummaryComponent } from "./features/summary/summary.component";
import { BlockchainProofsComponent } from "./features/blockchain-proofs/blockchain-proofs.component";
import { PeopleTechComponent } from "./features/people-tech/people-tech.component";
import { MoneyStakesComponent } from "./features/money-stakes/money-stakes.component";

const navRoutes: Routes = [
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
  },
  {
    path: "",
    redirectTo: "summary",
    pathMatch: "full"
  }
];

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
  imports: [
    RouterModule.forRoot(navRoutes),
    RouterModule.forRoot(summaryRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
