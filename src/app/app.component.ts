import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishItem } from '../shared/modules/wishItem';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, AddWishFormComponent ,WishListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'My Wishlist';
  items: WishItem[] = [
    new WishItem('Coffee'),
    new WishItem('go to school', true),
    new WishItem('come back to home'),
  ];

  listFilter: any = '0';

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }


}
