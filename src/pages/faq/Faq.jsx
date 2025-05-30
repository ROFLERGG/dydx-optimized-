import CallToAction from '@/components/CallToAction';
import Content from '@/components/Content';
import { AllFaqQuestions } from '@/components/ui/Faq';

const FaqPage = () => {
  return (
    <>
      <Content>
        <div className="flex justify-center pt-10">
          <div className="flex flex-col space-y-20 w-[800px]">
            <div className="flex justify-center">
              <h2 className="heading-xl text-white-100 text-center">
                Frequently asked questions
              </h2>
            </div>
            <AllFaqQuestions />
          </div>
        </div>
      </Content>
      <CallToAction />
    </>
  );
};

export default FaqPage;
