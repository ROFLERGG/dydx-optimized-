import { Link } from 'react-router';
import Button from '@/components/ui/Buttons';
import DownArrow from '@/assets/down-arrow.svg';
import Underline from '@/assets/underline.svg';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center flex-1 pt-[98px]">
      <div className="absolute top-0 w-full min-h-full grid-image mask-to-bottom"></div>
      <div className="relative @container px-4">
        <div className="flex justify-center py-[80px]">
          <div className="flex flex-col max-w-[800px] space-y-[80px] max-sm:space-y-[40px]">
            <div className="flex flex-col space-y-[40px]">
              <h1 className="hero text-white-100 text-center">
                Powering the future of dYdX through community
                <span className="relative inline-block px-2">
                  <span>grants</span>
                  <img
                    className="absolute right-0 top-full"
                    src={Underline}
                    alt="underline"
                  />
                </span>
              </h1>
              <div className="flex justify-center space-x-8 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-4">
                <Link to="/initiatives">
                  <Button
                    btn={'secondary'}
                    bg={'secondary'}
                    text={'white'}
                    className={'text-center flex justify-center w-full'}
                  >
                    Discover RFPs
                  </Button>
                </Link>
                <Link to={'/apply'}>
                  <Button
                    btn={'primary'}
                    bg={'brand'}
                    text={'white'}
                    className={'text-center flex justify-center w-full'}
                  >
                    Apply for grant
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-between items-center max-sm:flex-col max-sm:space-y-8">
              <div className="flex flex-col items-center">
                <p className="mono-paragraph-xl text-white-100">100+</p>
                <p className="mono-paragraph-lg text-white-500">
                  projects funded
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="mono-paragraph-xl text-white-100">$3+ milion</p>
                <p className="mono-paragraph-lg text-white-500">awarded</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="mono-paragraph-xl text-white-100">400+</p>
                <p className="mono-paragraph-lg text-white-500">
                  projects funded
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg className="absolute bottom-8 inset-x-1/2 -translate-x-1/2 w-[32px] h-[100px] max-sm:bottom-0 max-sm:translate-y-1/2 ">
        <use xlinkHref={DownArrow + '#down-arrow'}></use>
      </svg>
    </div>
  );
};

export default Hero;
