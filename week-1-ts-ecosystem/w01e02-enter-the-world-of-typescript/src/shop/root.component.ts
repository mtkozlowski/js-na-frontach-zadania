import { div } from '../framework/dom-creators'
import { cartPanel } from './cart-panel.component.js'
import { hero } from './hero.component.js'
import {ICartItem} from "./cart-item.component";

const items: Array<ICartItem> = [
  {
    name: 'Tomatoes',
    amount: 2,
    unit: 'kg',
    price: { value: 20, currency: 'PLN' },
  },
  {
    name: 'Banana',
    amount: 5,
    unit: 'kg',
    price: { value: 36, currency: 'PLN' },
  },
]

export function root() {
  const $hero = hero({ title: 'Shopping App', subTitle: 'buy and sell' })
  const $container = div('container')
  $container.append($hero, cartPanel({ items }))
  return $container
}
