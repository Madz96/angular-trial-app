import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-bc-card",
  templateUrl: "./bc-card.component.html",
  styleUrls: ["./bc-card.component.css"]
})
export class BcCardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToBCProofs() {
    this.router.navigate(["/bcproofs"]);
  }
}
