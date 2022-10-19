import {CartItem, CartItemBase, Item} from "./cartItemBase";
import {ItemId} from "./itemId";


export class Cart<T extends Item> {
  private items: T[] = new Array<T>;

  add(item: T) {
    this.items.push(item);
  }

  remove(id: ItemId) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  get(id: ItemId) {
    return this.items.find((item) => item.id === id);
  }

  update(id: ItemId, item: T) {
    this.items = this.items.map((item) => item.id === id ? item : item);
  }

  getItems() {
    return this.items;
  }

  getItemsCount() {
    return this.items.length;
  }

  getTotalPrice() {
    return this.items.reduce((acc, item) => acc + item.price * item.amount, 0);
  }
}