import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/faqs_data";

function FAQ() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <section className="section bg-extra" id="faq">
        <div>
          <h1 className="section_title text-center mb-4">FAQs</h1>

          <p className="text-center">Got questions? We've got the answers.</p>

          <div className="w-full">
            <div className="flex flex-col items-center mt-10">
              <ul className="flex flex-col gap-3 w-full md:max-w-6xl">
                {faqs.map((faq, index) => (
                  <li
                    key={index}
                    className="bg-bacground shadow-md hover:shadow-xl border border-neutral-200 rounded-lg cursor-pointer transition-all duration-300 ease-in-out overflow-hidden hover:border-neutral-400"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex items-start justify-between p-5 md:p-6">
                      <h3 className="text-base md:text-lg font-medium transition-colors duration-300 ">
                        {faq.question}
                      </h3>

                      <div
                        className={`shrink-0 transition-colors duration-300 text-neutral-500 ${
                          activeFaq === index ? "rotate-180" : ""
                        }`}
                        aria-label="Expand"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                    {activeFaq === index && (
                      <div className="px-5 md:px-6 pb-5 md:pb-6">
                        <p className="text-neutral-600">{faq.answer}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
