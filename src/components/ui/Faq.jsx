import { useState } from 'react';

const faqData = {
  first: [
    {
      id: 0,
      question: 'How do I apply?',
      answer: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: 1,
      question: 'Can I apply as a U.S. based person/company?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, dignissimos!',
    },
    {
      id: 2,
      question: 'How will I be compensated?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo eaque quis error accusantium sunt!',
    },
    {
      id: 3,
      question: 'What type of project will qualify for a Grant?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in, maiores fugit rerum at nobis ipsa rem fugiat eos doloribus!',
    },
    {
      id: 4,
      question:
        'What is the application timeline? When can I expect to hear back?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laborum, earum porro, provident amet accusantium nam animi quaerat iste, fugit dolorem totam quis rerum exercitationem.',
    },
    {
      id: 5,
      question: 'How can I increase my chances of getting funded?',
      answer:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id maiores quaerat animi cum et, impedit nesciunt veniam porro tempora itaque, adipisci ea pariatur ipsum. Quaerat amet odit harum. Quisquam, iste.',
    },
    {
      id: 6,
      question: 'How often do you approve new Rounds of funding?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quo vero accusantium pariatur eaque nulla at aperiam molestiae possimus consequuntur nostrum accusamus libero voluptates, deserunt iste non voluptatum quisquam consectetur facilis sint error. Dolorum, rerum?',
    },
  ],
  second: [
    {
      id: 0,
      question: 'What is the dYdX Grants Trust?',
      answer: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: 1,
      question: 'Where are funds held?',
      answer: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: 2,
      question: 'When was the program launched?',
      answer: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: 3,
      question: 'Who are the Trustees?',
      answer: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: 4,
      question: 'What and who is the Enforcer?',
      answer: 'Lorem ipsum dolor sit amet.',
    },
  ],
  third: [
    {
      id: 0,
      question: 'What is the dYdX Grants Trust?',
      answer: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: 1,
      question: 'Where are funds held?',
      answer: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: 2,
      question: 'When was the program launched?',
      answer: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: 3,
      question: 'Who are the Trustees?',
      answer: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: 4,
      question: 'What and who is the Enforcer?',
      answer: 'Lorem ipsum dolor sit amet.',
    },
  ],
};

const FaqButton = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const setIsOpenHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <input type="checkbox" name="question" id={id + 1} className="hidden" />
      <label
        onClick={setIsOpenHandler}
        htmlFor={id + 1}
        className={`flex flex-col justify-center duration-150 overflow-hidden ${
          isOpen ? 'space-y-6' : ''
        } py-6 cursor-pointer`}
      >
        <div className="flex justify-between items-center space-x-6">
          <p className="paragraph-md text-white-100">{question}</p>
          <div className={`w-4 h-4 relative items-center shrink-0`}>
            <div className="absolute inset-x-1/2 inset-y-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-white-100 rounded-full"></div>
            <div
              className={`absolute inset-x-1/2 inset-y-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 bg-white-100 rounded-full duration-150 ${
                isOpen ? 'h-0' : 'h-full'
              }`}
            ></div>
          </div>
        </div>
        <div
          className={`origin-left ${
            isOpen
              ? 'w-fit max-h-96 transition-all opacity-100 scale-100 duration-150'
              : 'w-fit max-h-0 overflow-hidden scale-90 opacity-0 transition-all duration-150'
          }`}
        >
          <p className="paragraph-md text-white-500 w-fit">{answer}</p>
        </div>
      </label>
    </div>
  );
};

const AllFaqQuestions = () => {
  return (
    <div className="flex flex-col space-y-20">
      {/* first section */}
      <div className="flex flex-col space-y-6">
        <div className="flex justify-start">
          <h2 className="heading-md text-white-100">
            Grant application process
          </h2>
        </div>
        <div className="flex flex-col border-t border-b border-subtle divide-y divide-subtle">
          {faqData.first.map(({ question, answer, id }) => {
            return (
              <FaqButton question={question} answer={answer} id={id} key={id} />
            );
          })}
        </div>
      </div>
      {/* second section */}
      <div className="flex flex-col space-y-6">
        <div className="flex justify-start">
          <h2 className="heading-md text-white-100">Selection criteria</h2>
        </div>
        <div className="flex flex-col border-t border-b border-subtle divide-y divide-subtle">
          {faqData.second.map(({ question, answer, id }) => {
            return (
              <FaqButton question={question} answer={answer} id={id} key={id} />
            );
          })}
        </div>
      </div>
      {/* second section */}
      <div className="flex flex-col space-y-6">
        <div className="flex justify-start">
          <h2 className="heading-md text-white-100">The Grants Trust</h2>
        </div>
        <div className="flex flex-col border-t border-b border-subtle divide-y divide-subtle">
          {faqData.third.map(({ question, answer, id }) => {
            return (
              <FaqButton question={question} answer={answer} id={id} key={id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const FrequentlyAskedQuestions = () => {
  return faqData.first.map(({ question, answer, id }) => {
    return <FaqButton question={question} answer={answer} id={id} key={id} />;
  });
};

export { AllFaqQuestions, FrequentlyAskedQuestions, FaqButton };
