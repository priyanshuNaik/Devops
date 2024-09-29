import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  items!: Item[];

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.getItems();
  }

  private getItems() {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  updateItem(id: number) {
    this.router.navigate(['edit-item', id]);
  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe(data => {
      console.log(data);
      this.getItems();
    });
  }
}
