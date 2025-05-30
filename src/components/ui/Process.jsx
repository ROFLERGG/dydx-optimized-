// import Arrow2 from './../../assets/right-arrow-1.png';
// import Arrow3 from './../../assets/right-arrow-2.png';

const ProcessCardData = [
  {
    id: 1,
    number: '1',
    title: 'Apply',
    description:
      'Submit a complete application to the dYdX Grants Team including as many details as possible about the proposed idea and their background.',
    arrow1: false,
  },
  {
    id: 2,
    number: '2',
    title: 'Interview',
    description:
      'Submit a complete application to the dYdX Grants Team including as many details as possible about the proposed idea and their background.',
    arrow2: false,
  },
  {
    id: 3,
    number: '3',
    title: 'Grant offer',
    description:
      'Submit a complete application to the dYdX Grants Team including as many details as possible about the proposed idea and their background.',
    arrow3: false,
  },
];

const ProcessCard = () => {
  return ProcessCardData.map(data => {
    return (
      <div className="relative" key={data.id}>
        <div
          className={`flex flex-1 h-[320px] max-md:h-[300px] p-6 bg-secondary rounded-2xl relative ${
            data.arrow1 == false && '-rotate-1'
          } ${data.arrow2 && 'rotate-2 translate-y-6 max-md:translate-y-0'} ${
            data.arrow3 && '-rotate-2 translate-y-3 max-md:translate-y-0'
          }`}
        >
          <div className="flex flex-col space-y-6">
            <h2 className="number text-white-100">{data.number}</h2>
            <div className="flex flex-col space-y-3">
              <h2 className="heading-md text-white-100">{data.title}</h2>
              <p className="paragraph-md text-white-100">{data.description}</p>
            </div>
          </div>
        </div>
        {data.arrow2 && (
          <img
            src={data.arrow2}
            alt="arrow1"
            className="absolute top-6 -left-24 max-md:w-[90px] max-md:h-[30px] max-md:rotate-90 max-md:left-4 max-md:-top-10"
          />
        )}
        {data.arrow3 && (
          <img
            src={data.arrow3}
            alt="arrow2"
            className="absolute -left-20 -bottom-6 max-md:w-[90px] max-md:h-[30px] max-md:rotate-90 max-md:-left-8 max-md:bottom-full"
          />
        )}
      </div>
    );
  });
};

export default ProcessCard;
