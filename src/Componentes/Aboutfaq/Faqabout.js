import React, { useState } from "react";
import './faqabout.css';

function Faqabout() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleBoxShadow = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active state
  };

  const questiones = [
    {
      question: "How does StockX Work?",
      answer: (
        <>
          StockX is a marketplace where Buyers and Sellers can make anonymous offers on a wide variety of shoes, streetwear, electronics and collectibles. As a live marketplace, StockX empowers Buyers to Bid and Buy at real-time prices that reflect the current demand. This can be done in three easy steps:
          <ul>
            <li>1. Bid or Buy</li>
            <li>2. Authenticate</li>
            <li>3. Receive</li>
          </ul>
        </>
      )
    },
    {
      question: "How does bidding work on StockX?",
      answer: ( <>
      <p>Placing a Bid will allow you to set how much you'd like to pay for an item. If you have the highest bid price for an item on the site, it will be up to a Seller to determine if they are interested in meeting you at your offer.</p>
<p>
    
You can also immediately purchases your item from the Seller with the lowest Ask by clicking 'Buy Now' —if you like the current price of an item with respect to the size you’re trying to purchase, this is the easiest way to lock in with a Seller and make sure it doesn't slip through your fingers.</p>      </>
)    },
    {
      question: "What does Deadstock mean?",
      answer: 
      (
        <>
        <p>
            Shoes sold on StockX are considered "deadstock,"  which means that they're verified, new, and unworn at the time of sale. 

        </p>
        <p>
            
Deadstock sneakers are also sold with the original box including the box lid and the box label indicating the shoe size, as would be acceptable for sale at a retail location. “Deadstock” sneakers also may or may not include additional accessories (such as laces) that were included in the original packaging at purchase.
        </p>
        </>
      
      )
    },
    {
      question: "How do I pay for an item on StockX?",
      answer: "Buyers can pay with all major credit cards, PayPal, Apple Pay, Google Pay, Venmo, Alipay, Sofort, or iDEAL payment. The credit cards we accept are Visa, MasterCard, American Express, JCB, UnionPay, and Discover. We accept debit and gift cards with major card brand logos. "
    },
    {
      question: "Can I cancel my order?",
      answer: "Once a sale has occurred, your Ask or Bid cannot be cancelled. This policy is in place to maintain marketplace integrity, as we need to ensure every Bid and Ask is real, active, and dependable. "
    },
    {
      question: "How do I contact customer service and when can I expect to hear back?",
      answer: (
        <>
<p>
While most of your questions can be answered in our Help Center, we do have a team dedicated to helping you with your recent purchase or sale. You can connect with us on our contact us page or via Chat.
</p>
          
        </>
      )
    }
  ];

  return (
    <div className="backcolor">
<div className="container-fluid pt-3  ">
      <h3 className="text-center mb-4 text-white">FAQs</h3>
      <div className="row  justify-content-between">
        {questiones.map((item, index) => (
          <div key={index} className="  p-4 col-md-4 mb-3 text-white widthmeida"  >
            <div className=" widthmeida-div ">
            <div
              className={`  ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleBoxShadow(index)}
            >
              <h5>{item.question}</h5>
              <p>{item.answer}</p>
              <div><h6 className="text-success text-end mt-3"><b>Read more</b></h6></div>
            </div>

            </div>
          
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
}

export default Faqabout;
