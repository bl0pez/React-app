import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';
export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        setShoppingCart(oldShoppingCart => {

            //remueve el producto del carrito si la cantidad es 0
            if (count === 0) {
                //   //Propiedad computada de ES6
                const { [product.id]: toDeletete, ...rest } = oldShoppingCart;
                return rest;
            }

            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count }
            }

        })
    }

    return {
        shoppingCart,
        onProductCountChange
    }

}