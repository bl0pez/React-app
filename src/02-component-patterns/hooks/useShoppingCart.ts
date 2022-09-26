import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';
export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        setShoppingCart(oldShoppingCart => {

            const productInCart = oldShoppingCart[product.id] || { ...product, count: 0 };
            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            //Borrar el producto del carrito
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;


            // //remueve el producto del carrito si la cantidad es 0
            // if (count === 0) {
            //   //Propiedad computada de ES6
            //   const { [product.id]: toDeletete, ...rest } = oldShoppingCart;
            //   return rest;
            // }

            // return {
            //   ...oldShoppingCart,
            //   [product.id]: { ...product, count }
            // }

        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }

}