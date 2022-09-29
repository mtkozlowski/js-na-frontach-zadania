import { div } from '../framework/dom-creators'

interface CartItemSum {
  value: number,
  currency: string
}

export function cartItemSum({ value, currency = 'PLN' }: CartItemSum): HTMLElement {
  const $panelBlock = div('panel-block is-justify-content-end')
  $panelBlock.innerHTML = `Total price: ${value} ${currency}`
  return $panelBlock
}
