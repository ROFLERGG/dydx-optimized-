import FooterLogo from '../assets/footer-logo.svg';
import Button from '@/components/ui/Buttons';
import Sprite from '@/assets/sprite.svg';
import Social from '@/assets/socials.svg';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="relative w-full py-4">
      <div className="relative z-10 @container px-4">
        <div className="flex justify-between items-center max-lg:flex-col max-lg:items-start max-lg:space-y-8">
          <div className="flex items-center space-x-8 max-lg:flex-col max-lg:items-start max-lg:space-x-0 max-lg:space-y-8">
            <Link to="/">
              <img
                className="w-[60px] h-[60px]"
                src={FooterLogo}
                alt="footer-logo"
              />
            </Link>
            <div className="flex items-center space-x-8 max-sm:space-x-0 max-sm:flex-col max-sm:items-start max-sm:space-y-6">
              <Link to={'/about'}>
                <Button
                  link={'sm'}
                  text={'grey'}
                  className={'mono-paragraph-md'}
                >
                  About
                </Button>
              </Link>
              <Link to={'/faq'}>
                <Button
                  link={'sm'}
                  text={'grey'}
                  className={'mono-paragraph-md'}
                >
                  FAQ
                </Button>
              </Link>
              <Link to={'/assets'}>
                <Button
                  link={'sm'}
                  text={'grey'}
                  className={'mono-paragraph-md'}
                >
                  Brand assets
                </Button>
              </Link>
              <Link to={'/foundation'}>
                <Button
                  link={'sm'}
                  text={'grey'}
                  className={'mono-paragraph-md'}
                >
                  <div className="flex items-center space-x-2">
                    <span>dYdX Foundation</span>
                    <svg className="w-4 h-4">
                      <use xlinkHref={Sprite + '#fi_external-link'} />
                    </svg>
                  </div>
                </Button>
              </Link>
              <Link to={'/trading'}>
                <Button
                  link={'sm'}
                  text={'grey'}
                  className={'mono-paragraph-md'}
                >
                  <div className="flex items-center space-x-2">
                    <span>dYdX trading</span>
                    <svg className="w-4 h-4">
                      <use xlinkHref={Sprite + '#fi_external-link'} />
                    </svg>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-8 max-lg:items-start">
            <a href="/">
              <svg className="w-6 h-6">
                <use xlinkHref={Social + '#Twitter'} />
              </svg>
            </a>
            <a href="/">
              <svg className="w-6 h-6 ">
                <use className="" xlinkHref={Social + '#Discord'} />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="absolute z-0 min-h-[400px] w-full h-full bottom-0 grid-image mask-to-top"></div>
    </footer>
  );
};

export default Footer;
