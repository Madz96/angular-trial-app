import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-money-card",
  templateUrl: "./money-card.component.html",
  styleUrls: ["./money-card.component.css"]
})
export class MoneyCardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToMonStakes() {
    this.router.navigate(["/monstakes"]);
  }
}
