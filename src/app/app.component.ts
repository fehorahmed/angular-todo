import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/modules/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Wishlist';
  items : WishItem[] = [
    new WishItem('Coffee'),
    new WishItem('go to school',true),
    new WishItem('come back to home'),
    ];

    toggleItem(item : WishItem){
      item.isComplete= !item.isComplete
      console.log(item);
    }
    addWish(){

    }
}
