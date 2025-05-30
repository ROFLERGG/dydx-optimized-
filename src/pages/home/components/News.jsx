import Sprite from '@/assets/sprite.svg';
import Sparkle from '@/assets/sparkle.svg';
import { PostCard } from '@/components/ui/PostCard';
import Button from '@/components/ui/Buttons';
import BlogData from '@/data/blog-data.json';
import SectionGrid from '@/components/SectionGrid';

const News = () => {
  const lastPosts = BlogData.slice(-2).reverse();
  return (
    <div className="py-10 overflow-hidden">
      <div className="@container px-4 max-lg:mx-0 max-lg:px-0">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="relative max-w-[600px] py-[80px] max-lg:py-[40px] z-10">
              <div className="relative z-10 px-4 flex flex-col items-center space-y-6">
                <div className="flex flex-col space-y-4 text-center">
                  <h2 className="heading-lg text-white-100 text-center">
                    What’s
                    <span className="relative inline-block px-2">
                      <span>new?</span>
                      <img
                        className="absolute bottom-full left-full -translate-x-1/3 translate-y-1/3 max-sm:-translate-x-1/2 max-sm:translate-y-1/3 max-sm:w-[30px] max-sm:h-[28px]"
                        src={Sparkle}
                        alt="underline"
                      />
                    </span>
                  </h2>
                  <p className="paragraph-lg text-white-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque nulla risus, consectetur ut bibendum non, gravida
                    non libero.
                  </p>
                </div>
                <Button
                  href="/"
                  link={'sm'}
                  text={'brand'}
                  className="paragraph-lg flex items-center space-x-2"
                >
                  <span>Read more on our blog</span>
                  <svg className="w-6 h-6">
                    <use xlinkHref={Sprite + '#fi_arrow-right'} />
                  </svg>
                </Button>
              </div>
              <SectionGrid />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex gap-6 z-10 max-w-[800px] max-md:flex-col max-lg:px-6">
              {/* blog post */}
              {lastPosts.map(post => {
                return <PostCard post={post} key={post.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
