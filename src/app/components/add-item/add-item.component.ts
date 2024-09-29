import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  item: Item = new Item();

  constructor(private itemService: ItemService, private router: Router) { }

  onSubmit() {
    this.itemService.createItem(this.item).subscribe(data => {
      console.log(data);
      this.goToItemList();
    },
    error => console.log(error));
  }

  goToItemList() {
    this.router.navigate(['/items']);
  }
}
