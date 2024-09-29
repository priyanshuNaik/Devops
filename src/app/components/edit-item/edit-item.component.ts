import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  id!: number;
  item: Item = new Item();

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.itemService.getItem(this.id).subscribe(data => {
      this.item = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.itemService.updateItem(this.id, this.item).subscribe(data => {
      this.goToItemList();
    }, error => console.log(error));
  }

  goToItemList() {
    this.router.navigate(['/items']);
  }
}
