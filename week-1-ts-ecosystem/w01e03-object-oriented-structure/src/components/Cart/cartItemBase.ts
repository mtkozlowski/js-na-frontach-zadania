import {ItemId} from "./itemId";

interface ICartItem {
  id: ItemId;
  name: string;
  price: number;
  amount: number;
}

export interface IBuyNowItem extends ICartItem{
  itemType: 'buyNow';
}
export interface IAuctionItem extends ICartItem{
  itemType: 'auction';
}interface IGiveawayItem extends ICartItem{
  itemType: 'giveaway';
}

export type Item = IBuyNowItem | IAuctionItem | IGiveawayItem;

export abstract class CartItemBase {
  abstract readonly itemType: string;
  abstract id: ItemId;
  abstract price: number;
  abstract name: string;
  amount: number = 1;
}

export class BuyNowItem implements IBuyNowItem{
  id: ItemId;
  name: string;
  price: number;
  amount: number;
  itemType: "buyNow";

  constructor(price: number, name: string, amount = 1) {
    this.id = Math.random();
    this.price = price;
    this.name = name;
    this.amount = amount;
    this.itemType = 'buyNow';
  }
}

export class AuctionCartItem implements IAuctionItem{
  itemType: 'auction';
  id: ItemId;
  name: string;
  price: number;
  amount: number;

  constructor(price: number, name: string, amount = 1) {
    this.id = Math.random();
    this.price = price;
    this.name = name;
    this.amount = amount;
    this.itemType = 'auction';
  }
}

export class GiveawayItem extends CartItemBase {
  itemType = 'Giveaway';
  id: ItemId;
  name: string;
  price = 0;

  constructor(name: string, amount: number = 1) {
    super();
    this.id = Math.random();
    this.name = name;
    this.amount = amount;
  }
}

export type CartItem = AuctionCartItem | BuyNowItem | GiveawayItem;
export type CartItemTypes = CartItem['itemType'];