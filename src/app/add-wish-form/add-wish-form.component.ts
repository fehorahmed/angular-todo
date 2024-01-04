import { Component, Output,EventEmitter } from '@angular/core';
 import { CommonModule } from '@angular/common';
import { WishItem } from '../../shared/modules/wishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  standalone: true,
   imports: [CommonModule, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {

  @Output() addNewWish = new EventEmitter<WishItem>();
  newWishText = '';

  addWish() {
   // this.items.push(new WishItem(this.newWishText));
   this.addNewWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
