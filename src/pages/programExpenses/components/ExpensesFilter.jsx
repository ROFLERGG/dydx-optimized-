import { useState } from 'react';
import Sprite from '@/assets/sprite.svg';
import useFetch from '@/hooks/useFetch';
import Skeleton from './Skeleton';
import Button from '@/components/ui/Buttons';

const ExpensesFilter = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showMoreItems, setShowMoreItems] = useState(6);
  const [loadMoreIsActive, setLoadMoreIsActive] = useState(false);
  const url =
    'https://raw.githubusercontent.com/ROFLERGG/dYdX/main/src/data/program-expenses.json';
  const { data, isLoading } = useFetch(url);

  let filteredItem = data.filter(item => {
    if (activeCategory !== 'All' && item.category !== activeCategory) {
      return false;
    }
    return true;
  });

  const loadMore = () => {
    setLoadMoreIsActive(true);
    setTimeout(() => {
      setShowMoreItems(prev => prev + 3);
      setLoadMoreIsActive(false);
    }, 1000);
  };
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex justify-center">
        <div className="flex gap-3 snap-mandatory overflow-x-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Button
            onClick={() => setActiveCategory('All')}
            btn={'ghost'}
            className={`text-white-500 shrink-0 snap-start ${
              activeCategory === 'All' ? '!text-white-100 bg-secondary' : ''
            }`}
          >
            All
          </Button>
          <Button
            onClick={() => setActiveCategory('Category1')}
            btn={'ghost'}
            className={`text-white-500 shrink-0 snap-start ${
              activeCategory === 'Category1'
                ? '!text-white-100 bg-secondary'
                : ''
            }`}
          >
            Category1
          </Button>
          <Button
            onClick={() => setActiveCategory('Category2')}
            btn={'ghost'}
            className={`text-white-500 shrink-0 snap-start ${
              activeCategory === 'Category2'
                ? '!text-white-100 bg-secondary'
                : ''
            }`}
          >
            Category2
          </Button>
          <Button
            onClick={() => setActiveCategory('Category3')}
            btn={'ghost'}
            className={`text-white-500 shrink-0 snap-start ${
              activeCategory === 'Category3'
                ? '!text-white-100 bg-secondary'
                : ''
            }`}
          >
            Category3
          </Button>
          <Button
            onClick={() => setActiveCategory('Category4')}
            btn={'ghost'}
            className={`text-white-500 shrink-0 snap-start ${
              activeCategory === 'Category4'
                ? '!text-white-100 bg-secondary'
                : ''
            }`}
          >
            Category4
          </Button>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        {isLoading &&
          Array(6)
            .fill(0)
            .map((_, id) => {
              return <Skeleton key={id} />;
            })}
        {filteredItem.slice(0, showMoreItems).map(item => {
          return (
            <div
              key={item.id}
              className="flex justify-between items-start p-6 bg-secondary rounded-2xl gap-8 max-[500px]:flex-col"
            >
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                  <span className="mono-paragraph-md text-white-500 w-fit">
                    {item.category}
                  </span>
                  <h2 className="heading-sm text-white-100 w-fit">
                    {item.title}
                  </h2>
                  <span className="mono-paragraph-md text-white-500 w-fit">
                    {item.date}
                  </span>
                </div>
                <p className="paragraph-md text-white-100 w-fit">
                  {item.description}
                </p>
              </div>
              <a
                href="/expenses"
                className="flex items-center space-x-4 px-2 py-1 rounded-full hover:bg-secondaryHover duration-150 ease-in-out box-content"
              >
                <span className="mono-paragraph-md text-white-500 text-nowrap w-fit">
                  {item.amount}
                </span>
                <svg className="w-4 h-4">
                  <use xlinkHref={Sprite + '#fi_external-link'} />
                </svg>
              </a>
            </div>
          );
        })}
      </div>
      {showMoreItems >= filteredItem.length ? null : (
        <div className="flex justify-center">
          <Button
            onClick={loadMore}
            btn={'secondary'}
            bg={'secondary'}
            text={'white'}
            className={`flex items-center ${
              loadMoreIsActive ? 'space-x-3' : ''
            }`}
          >
            {loadMoreIsActive && (
              <svg
                className="w-6 h-6 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#C8C7D8"
                  d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"
                />
              </svg>
            )}
            {loadMoreIsActive ? null : (
              <span className={`label`}>Load more</span>
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ExpensesFilter;
