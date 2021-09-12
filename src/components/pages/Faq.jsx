import React, { useState } from "react";

import Header from "../Header";
import Footer from "../Footer";
import Faqcon from "./Faqcon";
import Question from "../../images/question.png";

function Faq() {
  const [faqs, setFaqs] = useState([
    {
      question: "what is bitcoin",
      answer:
        " Bitcoin is a new currency that was created in 2009 by an unknown person using the alias Satoshi Nakamoto. Transactions are madewith no middle men – meaning, no banks! Bitcoin can be used tobook hotels on Expedia, shop for furniture on Overstock and buy Xbox games. ",
      isOpen: false,
    },
    {
      question: "Is Bisquecrypto Registered",
      answer:
        "Bisquecrypto is registered with the Uk Securities & Investment company , and also registered with the UK Department of Industry, Innovation & Science.we are also registered with Eu",
      isOpen: false,
    },
    {
      question: "Are my Personal details secured",
      answer:
        "We take a number of precautionary measures to ensure that the personal details of our investors are held in absolute confidence and are securely stored so as not to be accessible by unauthorized persons.",
      isOpen: false,
    },
    {
      question: "How do i become a part of this",
      answer:
        "You can become a part of the company by creating an account from the home page",
      isOpen: false,
    },
  ]);

  const toggleIsOpen = (index) => {
    setFaqs(
      faqs.map((item, i) => {
        if (i === index) {
          item.isOpen = !item.isOpen;
        } else {
          item.isOpen = false;
        }
        return item;
      })
    );
  };

  return (
    <>
      <Header />
      <div className="container mt-5 pt-5">
        <div className="row pt-5">
          <div className="col-md-4">
            <img src={Question} className="w-100 h-100" alt="" srcset="" />
          </div>
          <div className="col-md-8 m-auto p-5">
            {faqs.map((Faq, index) => (
              <Faqcon
                key={index}
                index={index}
                Faq={Faq}
                toggleIsOpen={toggleIsOpen}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Faq;
