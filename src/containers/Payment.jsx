import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import { nanoid } from 'nanoid';
import AppContext from '../context/AppContext';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const history = useHistory();
  const { cart, buyer } = state;
  const clientId = 'AQ8B-If181D1_U1RiXsgbBOm62tcFRItQ__I_lSfywjIsvBt30q08ZCKjyyCK9oDGTacM_wMLniJHeyD';

  const paypalOptions = {
    clientId,
    intent: 'capture',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(['Payment Data'], data);

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

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={nanoid()}>
            <div className="Payment-element">
              <h4>{item.product_title}</h4>
              <span>Total $ {item.product_price}</span>
            </div>
          </div>
        ))}
        <span>$ {state.total}</span>
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
      <div />
    </div>
  );
};

export default Payment;
