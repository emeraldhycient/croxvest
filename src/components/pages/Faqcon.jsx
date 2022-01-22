import React from "react";

function Faqcon({ index, Faq, toggleIsOpen }) {
  return (
    <div className="faq mb-2" onClick={() => toggleIsOpen(index)}>
      <div className="faqquestion mb-1 border">
        <h6>{Faq.question}</h6>
        <i className={Faq.isOpen ? "fa fa-arrow-up" : "fa fa-arrow-down"}></i>
      </div>
      <div className={Faq.isOpen ? "show text-muted border p-2" : "hide"}>
        <p>{Faq.answer}</p>
      </div>
    </div>
  );
}

export default Faqcon;
