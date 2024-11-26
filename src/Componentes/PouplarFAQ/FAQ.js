import React, { useState } from "react";
import "./Fqc.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleBoxShadow = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle active state
  };

  const questions = [
    "Can I cancel my purchase?",
    "How do I sell on Soleexhange?",
    "What is the Soleexhange Buyer Promise?",
    "What is the Soleexhange Return Policy?",
    "What is the Soleexhange Seller Program? What are Seller Levels?",
    "When can I expect to receive my item?",
  ];

  return (
    <div className="bg-dark text-white">
      <div className="container bg-dark text-white">
        <div className="row py-5">
          <h4 className="text-center">Popular FAQs</h4>
          {questions.map((question, index) => (
            <div key={index} className="col-lg-6 p-3">
              <div
                className={`p-4 whiteborder ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleBoxShadow(index)}
              >
                <div>
                  <p className="Fquestion">{question}</p>
                </div>
                <p className="text-start mt-2">
                  <a href="#" className="text-decoration-none text-success">
                    Read More <i class="fa-solid fa-chevron-right"></i>
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
