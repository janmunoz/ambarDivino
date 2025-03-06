import React from 'react';
import './product.css';

const Products = () => {
  const productos = [
    { id: 1, 
      name: 'Mantequilla corporal', 
      size: 'Pequeña',
      scent: 'Maracuya',
      price: '$25.000', 
      img: 'url-de-imagen-1' 

    },
    
    { id: 2, 
      name: 'Mantequilla corporal', 
      size: 'Grande',
      scent: 'Maracuya',
      price: '$45.000', 
      img: 'url-de-imagen-2' 
    },
    
    { id: 3, 
      name: 'Mantequilla corporal',
      size: 'Pequeña',
      scent: 'Invictus', 
      price: '$25.000', 
      img: 'url-de-imagen-3' 
    },
    
    { id: 4, 
      name: 'Mantequilla corporal', 
      size: 'Grande',
      scent: 'Invictus',
      price: '$45.000', 
      img: 'url-de-imagen-3' 
    },
    
    { id: 5, 
      name: 'Mantequilla corporal', 
      size: 'Pequeña',
      scent: 'Love Spell',
      price: '$25.000', 
      img: 'url-de-imagen-3' 
    },
    
    { id: 6, 
      name: 'Mantequilla corporal', 
      size: 'Grande',
      scent: 'Love Spell',
      price: '$45.000', 
      img: 'url-de-imagen-3' 
    },
    
    { id: 7, 
      name: 'Mantequilla corporal', 
      size: 'Pequeña',
      scent: 'Durazno',
      price: '$25.000', 
      img: 'url-de-imagen-3' 
    },
    
    { id: 8, 
      name: 'Mantequilla corporal', 
      size: 'Grande',
      scent: 'Durazno',
      price: '$45.000', 
      img: 'url-de-imagen-3' 
    },
    
    { id: 9, 
      name: 'Mantequilla corporal', 
      size: 'Pequeña',
      scent: 'One Million',
      price: '$25.000', 
      img: 'url-de-imagen-3' 
    },
    
    { id: 10, 
      name: 'Mantequilla corporal', 
      size: 'Grande',
      scent: 'One Million',
      price: '$45.000', 
      img: 'url-de-imagen-3' 
    },
    
    { id: 11, 
      name: 'Mantequilla corporal', 
      size: 'Pequeña',
      scent: 'Coco',
      price: '$25.000', 
      img: 'url-de-imagen-3' 
    },

    { id: 12, 
      name: 'Mantequilla corporal', 
      size: 'Grande',
      scent: 'Coco',
      price: '$45.000', 
      img: 'url-de-imagen-3' 
    },

    { id: 13, 
      name: 'Mantequilla corporal', 
      size: 'Pequeña',
      scent: 'Coco Vainilla',
      price: '$25.000', 
      img: 'url-de-imagen-3' 
    },

    { id: 14, 
      name: 'Mantequilla corporal', 
      size: 'Grande',
      scent: 'Coco Vainilla',
      price: '$45.000', 
      img: 'url-de-imagen-3' 
    },

    { id: 15, 
      name: 'Mantequilla corporal', 
      size: 'Pequeña',
      scent: 'Kiss',
      price: '$25.000', 
      img: 'url-de-imagen-3' 
    },

    { id: 16, 
      name: 'Mantequilla corporal', 
      size: 'Grande',
      scent: 'Kiss',
      price: '$45.000', 
      img: 'url-de-imagen-3' 
    },

    { id: 17, 
      name: 'Mantequilla corporal', 
      size: 'Pequeña',
      scent: 'Paris',
      price: '$25.000', 
      img: 'url-de-imagen-3' 
    },

    { id: 18, 
      name: 'Mantequilla corporal', 
      size: 'Grande',
      scent: 'Paris',
      price: '$45.000', 
      img: 'url-de-imagen-3' 
    },

    { id: 19, 
      name: 'Mantequilla corporal', 
      size: 'Pequeña',
      scent: 'Frutos Rojos',
      price: '$25.000', 
      img: 'url-de-imagen-3' 
    },

    { id: 20, 
      name: 'Mantequilla corporal', 
      size: 'Grande',
      scent: 'Frutos Rojos',
      price: '$45.000', 
      img: 'url-de-imagen-3' 
    },
  ];

  return (
    <section className="products" id="productos">
      <h2>Nuestros Productos</h2>
      <div className="product-list">
        {productos.map((producto) => (
          <div className="product-card" key={producto.id}>
            <img src={producto.img} alt={producto.nombre} />
            <h3>{producto.name}</h3>
            <h4>{producto.size}</h4>
            <p>{producto.scent}</p>
            <p>{producto.price}</p>
            <button id='buttonShop'>Comprar</button>
            <button id='buttonInfo'>Info</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
