import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { ViewItemsComponent } from './components/view-items/view-items.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { DeleteItemComponent } from './components/delete-item/delete-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'items', component: ViewItemsComponent },
  { path: 'add-item', component: AddItemComponent },
  { path: 'edit-item/:id', component: EditItemComponent },
  { path: 'delete-item/:id', component: DeleteItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
