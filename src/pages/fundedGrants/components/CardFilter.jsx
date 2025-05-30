import { useState } from 'react';
import Button from '@/components/ui/Buttons';
import GrantCard from '@/components/ui/Card';
import Skeleton from './Skeleton';
import useFetch from '@/hooks/useFetch';

const CardFilter = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);
  const url =
    'https://raw.githubusercontent.com/ROFLERGG/dYdX/main/src/data/grant-data.json';
  const { data, isLoading } = useFetch(url);

  let filteredCard = data.filter(card => {
    if (activeCategory !== 'All' && card.category !== activeCategory) {
      return false;
    }
    if (showCompletedOnly && !card.completed) {
      return false;
    }
    return true;
  });

  return (
    <div className={`flex flex-col space-y-10`}>
      <div className="flex flex-col space-y-6">
        <div className="flex justify-start lg:justify-center">
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
              onClick={() => setActiveCategory('Technical / Tool Development')}
              btn={'ghost'}
              className={`text-white-500 shrink-0 snap-start ${
                activeCategory === 'Technical / Tool Development'
                  ? '!text-white-100 bg-secondary'
                  : ''
              }`}
            >
              Technical / Tool Development
            </Button>
            <Button
              onClick={() => setActiveCategory('Governance')}
              btn={'ghost'}
              className={`text-white-500 shrink-0 snap-start ${
                activeCategory === 'Governance'
                  ? '!text-white-100 bg-secondary'
                  : ''
              }`}
            >
              Governance
            </Button>
            <Button
              onClick={() => setActiveCategory('Growth / Marketing')}
              btn={'ghost'}
              className={`text-white-500 shrink-0 snap-start ${
                activeCategory === 'Growth / Marketing'
                  ? '!text-white-100 bg-secondary'
                  : ''
              }`}
            >
              Growth / Marketing
            </Button>
            <Button
              onClick={() => setActiveCategory('Analytics')}
              btn={'ghost'}
              className={`text-white-500 shrink-0 snap-start ${
                activeCategory === 'Analytics'
                  ? '!text-white-100 bg-secondary'
                  : ''
              }`}
            >
              Analytics
            </Button>
            <Button
              onClick={() => setActiveCategory('Third Party Provider')}
              btn={'ghost'}
              className={`text-white-500 shrink-0 snap-start ${
                activeCategory === 'Third Party Provider'
                  ? '!text-white-100 bg-secondary'
                  : ''
              }`}
            >
              Third Party Provider
            </Button>
          </div>
        </div>
        <div className="flex justify-start lg:justify-center">
          <label className="flex items-center cursor-pointer pl-2">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={() => setShowCompletedOnly(!showCompletedOnly)}
            />
            <div className="relative peer size-[18px] rounded-full bg-secondary transition-all duration-100 ease-in-out after:transition-all border-2 border-white-500 after:content-[''] after:absolute peer-checked:after:bg-brand after:inset-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:size-[14px]"></div>
            <span className="ms-3 text-white-500 peer-checked:text-white-100 duration-300">
              Show only completed
            </span>
          </label>
        </div>
      </div>
      <div
        className={`grid grid-cols-4 auto-rows-fr max-[1600px]:grid-cols-3 max-[1200px]:grid-cols-2 max-md:grid-cols-1 gap-4 ${
          filteredCard.length === 0 && !isLoading ? 'hidden' : ''
        }`}
      >
        {isLoading &&
          Array(6)
            .fill(0)
            .map((_, id) => {
              return <Skeleton key={id} />;
            })}
        {/* cards */}
        {filteredCard.map(post => {
          return <GrantCard key={post.id} {...post} />;
        })}
      </div>
      {filteredCard.length === 0 && !isLoading && (
        <div className="flex justify-center items-center min-h-[400px]">
          <h2 className="heading-md text-white-500">Nothing found :(</h2>
        </div>
      )}
    </div>
  );
};

export default CardFilter;
