import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SummaryMainViewComponent } from "./summary-main-view/summary-main-view.component";
import { PeopleCardComponent } from "./people-card/people-card.component";
import { SummaryRoutingModule } from "./summary-routing.module";
import { TechCardComponent } from './tech-card/tech-card.component';
import { BcCardComponent } from './bc-card/bc-card.component';
import { MoneyCardComponent } from './money-card/money-card.component';

@NgModule({
  imports: [CommonModule, SummaryRoutingModule],
  declarations: [SummaryMainViewComponent, PeopleCardComponent, TechCardComponent, BcCardComponent, MoneyCardComponent]
})
export class SummaryModule {}
