import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SummaryMainViewComponent } from "./summary-main-view/summary-main-view.component";
import { PeopleCardComponent } from "./people-card/people-card.component";
import { SummaryRoutingModule } from "./summary-routing.module";

@NgModule({
  imports: [CommonModule, SummaryRoutingModule],
  declarations: [SummaryMainViewComponent, PeopleCardComponent]
})
export class SummaryModule {}
