const initialState = {
  productos: [],
};

const carritoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AGREGAR_PRODUCTO_AL_CARRITO':
      const { id, title, image, price, description, category, quantity } = action.payload;
      const existingProductIndex = state.productos.findIndex((producto) => producto.id === id);

      if (existingProductIndex !== -1) {
        const updatedProductos = state.productos.map((producto, index) => {
          if (index === existingProductIndex) {
            return {
              ...producto,
              quantity: parseInt(producto.quantity) + parseInt(quantity),
            };
          }
          return producto;
        });

        return {
          ...state,
          productos: updatedProductos,
        };
      } else {
        return {
          ...state,
          productos: [
            ...state.productos,
            {
              id,
              title,
              image,
              price,
              description,
              category,
              quantity,
            },
          ],
        };
      }

    case 'AUMENTAR_CANTIDAD':
      const productIdToIncrease = action.payload.productId;
      const productToIncrease = state.productos.find((producto) => producto.id === productIdToIncrease);

      if (productToIncrease) {
        const updatedProductosIncrease = state.productos.map((producto) => {
          if (producto.id === productIdToIncrease) {
            return {
              ...producto,
              quantity: producto.quantity + 1,
            };
          }
          return producto;
        });

        return {
          ...state,
          productos: updatedProductosIncrease,
        };
      }
      return state;

    case 'DISMINUIR_CANTIDAD':
      const productIdToDecrease = action.payload.productId;
      const productToDecrease = state.productos.find((producto) => producto.id === productIdToDecrease);

      if (productToDecrease && productToDecrease.quantity > 1) {
        const updatedProductosDecrease = state.productos.map((producto) => {
          if (producto.id === productIdToDecrease) {
            return {
              ...producto,
              quantity: producto.quantity - 1,
            };
          }
          return producto;
        });

        return {
          ...state,
          productos: updatedProductosDecrease,
        };
      }
      return state;

    case 'ELIMINAR_PRODUCTO':
      const productIdToDelete = action.payload.productId;
      const updatedProductosDelete = state.productos.filter((producto) => producto.id !== productIdToDelete);

      return {
        ...state,
        productos: updatedProductosDelete,
      };

    default:
      return state;
  }
};

export default carritoReducer;