import Wave from '@/assets/wave.png';
import ProcessCard from '@/components/ui/Process';
import SectionGrid from '@/components/SectionGrid';

const ApplicationProcess = () => {
  return (
    <div className="py-10 overflow-hidden">
      <div className="@container px-4 max-lg:mx-0 max-lg:px-0">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="relative max-w-[600px] py-[80px] max-lg:py-[40px]">
              <div className="relative z-10 px-4 flex flex-col items-center space-y-6">
                <div className="flex flex-col space-y-4 text-center z-10">
                  <h2 className="heading-lg text-white-100 text-center">
                    Application
                    <span className="inline-block relative px-2">
                      <span>process</span>
                      <img
                        className="absolute top-full -inset-x-1/2 translate-x-1/2"
                        src={Wave}
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
          <div className="flex justify-between gap-8 px-6 max-md:flex-col">
            <ProcessCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;
