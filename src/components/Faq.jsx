import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I update my billing information?",
      answer: "To update your billing information, log in to your account, go to the billing section, and update your payment details."
    },
    {
      question: "How can I contact customer support?",
      answer: "To contact customer support, look for a 'Contact us' or 'Help' button or link on the website or platform. You may be able to email, call, or chat with customer support for assistance."
    },
    {
      question: "How do I update my profile information?",
      answer: "To update your profile information, log in to your account, go to the profile section, and update your personal details."
    },
    {
      question: "How do I find my purchase history?",
      answer: "To find your purchase history, log in to your account, go to the orders or purchase history section, and view your past orders."
    }
  ];

  return (
    <section className="py-16" style={{fontFamily: "tkt"}}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h6 className="text-lg text-customLightBlue font-medium text-center mb-2">
            FAQs
          </h6>
          <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            ხშირად დასმული კითხვები
          </h2>
        </div>

        <div className="accordion-group" data-accordion="default-accordion">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-blue-50 ${activeIndex === index ? 'accordion-active:bg-indigo-50 active' : ''}`}
              id={`basic-heading-${index + 1}-with-arrow`}
            >
              <button
                className="accordion-toggle group inline-flex items-center justify-between text-lg text-gray-900 w-full transition duration-500 text-left hover:text-
                 accordion-active:text-indigo-600"
                aria-controls={`basic-collapse-${index + 1}-with-arrow`}
                onClick={() => toggleAccordion(index)}
              >
                <h5 className="text-xl">{item.question}</h5>
                <svg
                  className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 ${activeIndex === index ? 'rotate-180' : ''}`}
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                id={`basic-collapse-${index + 1}-with-arrow`}
                className={`accordion-content w-full px-0 overflow-hidden ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
                aria-labelledby={`basic-heading-${index + 1}-with-arrow`}
                style={{ transition: 'max-height 0.5s' }}
              >
                <p className="text-base text-gray-500 leading-6 mt-2">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
