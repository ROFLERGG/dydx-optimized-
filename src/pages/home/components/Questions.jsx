import Oval from '@/assets/oval.png';
import { FrequentlyAskedQuestions } from '@/components/ui/Faq';
import SectionGrid from '@/components/SectionGrid';

const Questions = () => {
  return (
    <div className="py-10 overflow-hidden">
      <div className="@container px-4 max-lg:mx-0 max-lg:px-0">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="relative max-w-[600px] py-[80px] max-lg:py-[40px]">
              <div className="relative z-10 px-4 flex flex-col items-center space-y-6">
                <div className="flex flex-col space-y-4 text-center z-10">
                  <h2 className="heading-lg text-white-100 text-center">
                    Frequently asked
                    <span className="inline-block relative px-2">
                      <span>questions</span>
                      <img
                        className="absolute inset-y-1/2 inset-x-1/2 -translate-x-1/2 -translate-y-1/2"
                        src={Oval}
                        alt="Oval"
                      />
                    </span>
                  </h2>
                  <p className="paragraph-lg text-white-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nulla risus, consectetur ut bibendum non, gravida
                    non libero.
                  </p>
                </div>
              </div>
              <SectionGrid />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="max-lg:px-6 max-w-[800px] z-10">
              <div className="flex flex-col border-t border-b border-subtle divide-y divide-subtle">
                <FrequentlyAskedQuestions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
