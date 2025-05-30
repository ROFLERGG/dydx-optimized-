import { Link } from 'react-router';
import Button from '@/components/ui/Buttons';

const CallToAction = () => {
  return (
    <div className="relative z-10 py-20">
      <div className="@container px-4">
        <div className="bg-gradient-to-br from-brand to-brandHover w-full py-10 flex justify-center rounded-2xl">
          <div className="flex flex-col space-y-10 px-10">
            <div className="max-w-[640px] flex flex-col space-y-2 text-center">
              <p className="paragraph-lg text-white-100">
                Have a project in mind?
              </p>
              <h2 className="heading-lg text-white-100">
                Let’s create something awesome.
              </h2>
            </div>
            <Link to={'/apply'} className="flex justify-center">
              <Button
                btn={'primary'}
                bg={'white'}
                text={'brand'}
                className={'label text-center max-md:w-full'}
              >
                Apply for grant
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
