import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import { nanoid } from 'nanoid';
import AppContext from '../context/AppContext';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const history = useHistory();
  const { cart, buyer } = state;
  const clientId =
    'AQ8B-If181D1_U1RiXsgbBOm62tcFRItQ__I_lSfywjIsvBt30q08ZCKjyyCK9oDGTacM_wMLniJHeyD';

  const paypalOptions = {
    clientId,
    intent: 'capture',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };
  console.log(['Buyer'], buyer);
  return (
    <div className="Payment CurrentRoute">
      <div className="Payment-content">
        <h2>Sale Summary</h2>
        {cart.map((item) => (
          <div className="Payment-item" key={nanoid()}>
            <div className="Payment-item-content">
              <div className="Payment-item-data">
                <h2>Product data</h2>
                <h4>{item.product_name}</h4>
                <h4>{item.product_price}</h4>
                <h4>{item.product_brand}</h4>
              </div>
              <figure className="Payment-item-figure">
                <img src={item.product_url} alt={item.product_title} />
              </figure>
            </div>
          </div>
        ))}
        {state.total && (
          <div className="Payment-item">
            <h2>
              {'$'}
              {state.total}
            </h2>
          </div>
        )}
        <div className="Payment-user-data">
          <h2>User data</h2>
          <div className="Payment-user-info">
            <h3>{buyer.name}</h3>
          </div>
          <div className="Payment-user-info">
            <h3>{buyer.lastname}</h3>
          </div>
          <div className="Payment-user-info">
            <h3>{buyer.email}</h3>
          </div>
          <div className="Payment-user-info">
            <h3>{buyer.country}</h3>
          </div>
          <div className="Payment-user-info">
            <h3>{buyer.state}</h3>
          </div>
          <div className="Payment-user-info">
            <h3>{buyer.city}</h3>
          </div>
          <div className="Payment-user-info">
            <h3>{buyer.address}</h3>
          </div>
          <div className="Payment-user-info">
            <h3>{buyer.cp}</h3>
          </div>
          <div className="Payment-user-info">
            <h3>{buyer.phone}</h3>
          </div>
        </div>
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={state.total}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
