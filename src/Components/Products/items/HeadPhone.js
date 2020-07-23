import React, { Component } from "react";
import "./HeadPhone.css";

export class HeadPhone extends Component {
  render() {
    return (
      <>
        <div className="row product-info">
          <div className="col-md-6 offset-5 mt-4">
            <div>
              boAt Bassheads 242 Wired Headset (Active Black, Wired in the ear)
            </div>
            <div>Special price ₹499₹1,49066% off</div>

            <div className="mt-2">Available offers</div>
            <ul>
              <li>
                Bank OfferFlat ₹30 discount on first prepaid transaction using
                RuPay debit card, minimum order value ₹750/T&C
              </li>
              <li>
                Bank Offer₹30 Off on first prepaid transaction using UPI.
                Minimum order value ₹750/-T&C
              </li>
              <li>
                Bank OfferFlat ₹75/- off on RuPay debit card purchase above
                ₹7,500/-T&C
              </li>
              Bank OfferFlat ₹75 discount on UPI transaction above ₹10,000/-T&C
            </ul>
          </div>
        </div>
        <div className="container cart-btn text-left">
          <i class="fas fa-cart-plus"></i>
          <button type="button" className="btn btn-warning btn-lg mr-4">
            ADD TO CART
          </button>
          <button type="button" className="btn btn-warning btn-lg mr-4">
            BUY NOW
          </button>
        </div>
      </>
    );
  }
}

export default HeadPhone;
