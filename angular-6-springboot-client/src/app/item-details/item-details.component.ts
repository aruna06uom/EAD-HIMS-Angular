import { Component, OnInit } from '@angular/core';
import { ItemDetails } from '../Service/item-details';
import { ItemDetailsService } from "../Service/itemDetails.service";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  itemDetails: ItemDetails = new ItemDetails();
  submitted = false;
  constructor(private itemDetailsService: ItemDetailsService) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.itemDetails = new ItemDetails();
  }

  save() {
    this.itemDetailsService.submitItems(this.itemDetails)
      .subscribe(data => console.log(data), error => console.log(error));
    this.itemDetails = new ItemDetails();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
