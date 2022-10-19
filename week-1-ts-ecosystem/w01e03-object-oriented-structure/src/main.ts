/**
 * To tutaj mamy "START" programu.
 *
 * Przygotuj tutaj kawałek kodu potwierdzający poprawność działania koszyka.
 *
 * Np. Utwórz 3 różne koszyki — dodaj do nich różne produkty.
 * Potem wyświetl te produkty.
 * Wykaż, że koszyki mają różne produkty — inną ich ilość etc.
 * Przygotuj koszyki dla każdego rodzaju produktów.
 * - po prostu: wykaż, że przygotowana logika i modele danych — działają :)
 * */

import {Cart} from './components/Cart';
import {AuctionCartItem, BuyNowItem, CartItemBase, IBuyNowItem} from "./components/Cart/cartItemBase";

const cart = new Cart<IBuyNowItem>();
const newItem = new BuyNowItem(100, 'test')
newItem.itemType
cart.add(newItem);