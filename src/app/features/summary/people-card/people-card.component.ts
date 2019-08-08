import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-people-card",
  templateUrl: "./people-card.component.html",
  styleUrls: ["./people-card.component.css"]
})
export class PeopleCardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToPeople() {
    this.router.navigate(["/peopletech"]);
  }
}
