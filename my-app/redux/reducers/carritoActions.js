export const agregarProductoAlCarrito = (producto) => ({
    type: 'AGREGAR_PRODUCTO_AL_CARRITO',
    payload: { ...producto, quantity: Math.max(1, parseInt(producto.quantity || 1)) },
});

export const aumentarCantidad = (productId) => ({
    type: 'AUMENTAR_CANTIDAD',
    payload: { productId },
});

export const disminuirCantidad = (productId) => ({
    type: 'DISMINUIR_CANTIDAD',
    payload: { productId },
});

export const eliminarProducto = (productId) => ({
    type: 'ELIMINAR_PRODUCTO',
    payload: { productId },
});