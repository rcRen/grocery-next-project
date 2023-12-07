import React, { useEffect, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/CheckoutForm';
import { useCart } from '../../contexts/cart';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function App() {
  const [clientSecret, setClientSecret] = React.useState('');

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: {'order_price': total} }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
    hidePostalCode: true,
  };

  const { products, subTotal, tax, total } = useCart();

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-top gap-y-16 gap-x-32 py-4 px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className=" p-6 border rounded-lg shadow-md">
          <p className="text-xl font-medium tracking-tight text-gray-700 pb-8 sm:text-xl">
            Order summary
          </p>
          <ul role="list" className="m-6 -my-6 divide-y divide-gray-200 ">
            {products &&
              products.map((product, index) => (
                <li key={index} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={product.image}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href="">{product.title}</a>
                        </h3>
                        <p className="ml-4">{(product.price * product.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center space-x-3">
                        <p className="text-gray-500">${product.price}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center space-x-3">
                        <p className="text-gray-500">Qty: {product.quantity}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            <li className="flex py-6">
              <div className="ml-4 flex flex-1 flex-col">
                <div className="my-3 flex justify-between text-base font-medium text-gray-900">
                  <h3 className="text-gray-500">Subtotal</h3>
                  <p className="ml-4">${subTotal}</p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3 className="text-gray-500">Taxes</h3>
                  <p className="ml-4">${tax}</p>
                </div>
              </div>
            </li>
            <li className="flex py-6">
              <div className="ml-4 flex flex-1 flex-col">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3 className="text-gray-500">Total</h3>
                  <p className="ml-4">${total}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className=" p-6">
          <div className="App">
            <p className="text-xl font-medium tracking-tight text-gray-700 pb-8 sm:text-xl">
              Payment information
            </p>

            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
