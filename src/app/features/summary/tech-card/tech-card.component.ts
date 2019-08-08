import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-tech-card",
  templateUrl: "./tech-card.component.html",
  styleUrls: ["./tech-card.component.css"]
})
export class TechCardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToPeople() {
    this.router.navigate(["/peopletech"]);
  }
}
