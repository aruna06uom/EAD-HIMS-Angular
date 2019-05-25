import { ItemDetailsService } from "../Service/itemDetails.service";
import { ItemDetails } from '../Service/item-details';
import { Component, OnInit, Input } from '@angular/core';
import { ViewItemListComponent } from '../view-item-list/view-item-list.component';



@Component({
  selector: 'app-view-item-details',
  templateUrl: './view-item-details.component.html',
  styleUrls: ['./view-item-details.component.css']
})
export class ViewItemDetailsComponent implements OnInit {

  @Input() itemDetails: ItemDetails;

  constructor(private itemDetailsService: ItemDetailsService, private listComponent: ViewItemListComponent) { }

  ngOnInit() {
  }

}
