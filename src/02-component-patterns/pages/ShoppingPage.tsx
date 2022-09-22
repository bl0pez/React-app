import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Cofee Mug - card',
  img: './coffee-mug.png',
}

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>

        {/*==Component Patter===*/}

        {/*==Relación directa===*/}
        <ProductCard product={ product } >
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard 
          product={ product } 
          className="bg-dark text-white"
          >
          <ProductImage 
            className='custom-image'
          />
          <ProductTitle
            className="text-bold"
          />
          <ProductButtons
            className="custom-buttons"
          />
        </ProductCard>

        <ProductCard 
          product={ product }
          style={{ background: '#f5f5', color: '#fff'  }} 
          >
          <ProductImage
           style={{scale: -2}}
          />
          <ProductTitle
            style={{ color: '#fff'}}
          />
          <ProductButtons
            style={{ display: 'flex', justifyContent: 'center' }}
          />
        </ProductCard>

      </div>
    </div>
  )
}
