import storage from './storage';

export const calcSubTotal = (products) => {
  let subtotal = 0;

  if (!products) {
    return subtotal;
  } else {
    for (const product of products) {
      subtotal += product['price'] * product['quantity'];
    }

    return subtotal.toFixed(2);
  }
};

export const calcGst = (products) => {
  const subtotal = parseFloat(calcSubTotal(products));
  const gstRate = 0.05;
  return (subtotal * gstRate).toFixed(2);
};

export const calcQst = (products) => {
  const subtotal = parseFloat(calcSubTotal(products));
  const qstRate = 0.09975;
  return (subtotal * qstRate).toFixed(2);
};

export const calcTotalTax = (products) => {
  const gst = parseFloat(calcGst(products));
  const qst = parseFloat(calcQst(products));
  return (gst + qst).toFixed(2);
};

export const calcTotalPrice = (products) => {
  const subtotal = parseFloat(calcSubTotal(products));
  const taxes = parseFloat(calcTotalTax(products));
  return (subtotal + taxes).toFixed(2);
};

export const getQuantityOfItemInCart = (item) => {
  const cart = storage.get('cart');
  const quantityInCart = 0;
  if (!cart) {
    return [-1, [], quantityInCart];
  } else {
    const index = cart.findIndex((_item) => _item._id == item._id);

    if (index < 0) {
      return [index, cart, quantityInCart];
    }
    return [index, cart, cart[index]['quantity']];
  }
};

export const addToCart = (item, quantity) => {
  console.info('000', item)
  const [index, cart, quantityInCart] = getQuantityOfItemInCart(item);

  if (quantityInCart) {
    cart[index]['quantity'] += quantity ? quantity : 1;
  } else {
    cart.push({ ...item, quantity: quantityInCart + quantity ? quantity : 1 });
  }
  storage.set('cart', cart);
};

export const removeFromCart = (item) => {
  let [index, cart, quantityInCart] = getQuantityOfItemInCart(item);
  if (quantityInCart < 2) {
    cart = cart.filter((_item) => _item._id != item._id);
  } else {
    cart[index]['quantity'] -= 1;
  }

  storage.set('cart', cart);
};

export const removeAllFromCart = (item) => {
  let [index, cart, quantityInCart] = getQuantityOfItemInCart(item);
  cart = cart.filter((_item) => _item._id != item._id);
  storage.set('cart', cart);
}

export const clearCart = () => {
  storage.clear('cart');
};

export const getAllItemsInCart = () => {
  const cart = storage.get('cart');
  if (!cart) {
    return [];
  }
  return cart;
};
