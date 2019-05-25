import { ExpiredItemDetailsComponent } from './../expired-item-details/expired-item-details.component';
import { ExpiredItemDetailsService } from "../Service/expired-item-details.service";
import { ExpiredItem } from '../Service/expired-item-details';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from "rxjs";


@Component({
  selector: 'app-expired-item-list',
  templateUrl: './expired-item-list.component.html',
  styleUrls: ['./expired-item-list.component.css']
})
export class ExpiredItemListComponent implements OnInit {

  expiredItemDetailsList: Observable<ExpiredItem[]>;

  constructor(private expiredItemDetailsService: ExpiredItemDetailsService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.expiredItemDetailsList = this.expiredItemDetailsService.loadAllItemDetails();
  }

  deleteEmployee(id: number) {
    alert("Progressing");
  }

}
