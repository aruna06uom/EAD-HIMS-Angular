import { ViewItemDetailsComponent } from './../view-item-details/view-item-details.component';
import { ItemDetailsService } from "../Service/itemDetails.service";
import { ItemDetails } from '../Service/item-details';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { ItemDetailsComponent } from './../item-details/item-details.component';

@Component({
  selector: 'app-view-item-list',
  templateUrl: './view-item-list.component.html',
  styleUrls: ['./view-item-list.component.css']
})
export class ViewItemListComponent implements OnInit {

  itemDetailsList: Observable<ItemDetails[]>;

  constructor(private itemDetailService: ItemDetailsService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

 btnClick= function () {
        this.router.navigateByUrl('/newItem');
};

  reloadData() {
    this.itemDetailsList = this.itemDetailService.loadAllItemDetails();
  }

}
