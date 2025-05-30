import Badge from '@/components/ui/Badges';
import Button from '@/components/ui/Buttons';
import { useState } from 'react';
import Skeleton from './Skeleton';
import useFetch from '@/hooks/useFetch';

const Filter = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const url =
    'https://raw.githubusercontent.com/ROFLERGG/dYdX/main/src/data/initiatives-data.json';
  const { data, isLoading } = useFetch(url);

  let filteredItem;
  if (activeCategory === 'All') {
    filteredItem = data;
  } else {
    filteredItem = data.filter(item => item.category === activeCategory);
  }
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex justify-center">
        <div className="flex gap-3 snap-mandatory overflow-x-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Button
            onClick={() => setActiveCategory('All')}
            btn={'ghost'}
            className={`text-white-500 shrink-0 snap-start ${
              activeCategory === 'All' && 'bg-secondary !text-white-100'
            }`}
          >
            All
          </Button>
          <Button
            onClick={() => setActiveCategory('Open')}
            btn={'ghost'}
            className={`text-white-500 shrink-0 snap-start ${
              activeCategory === 'Open' && 'bg-secondary !text-white-100'
            }`}
          >
            Open
          </Button>
          <Button
            onClick={() => setActiveCategory('Funded')}
            btn={'ghost'}
            className={`text-white-500 shrink-0 snap-start ${
              activeCategory === 'Funded' && 'bg-secondary !text-white-100'
            }`}
          >
            Funded
          </Button>
          <Button
            onClick={() => setActiveCategory('Completed')}
            btn={'ghost'}
            className={`text-white-500 shrink-0 snap-start ${
              activeCategory === 'Completed' && 'bg-secondary !text-white-100'
            }`}
          >
            Completed
          </Button>
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        {isLoading &&
          Array(10)
            .fill(0)
            .map((_, id) => {
              return <Skeleton key={id} />;
            })}
        {filteredItem.map(item => {
          return (
            <div
              key={item.id}
              className="flex justify-between items-start space-x-8 bg-secondary rounded-2xl p-6 max-[400px]:space-x-0 max-[400px]:space-y-4 max-[400px]:flex-col"
            >
              <div className="flex flex-col space-y-2">
                <h2 className="heading-md text-white-100 w-fit">
                  {item.title}
                </h2>
                <p className="paragraph-md text-white-100 w-fit">
                  {item.description}
                </p>
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2 mono-paragraph-md max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2 max-sm:items-start">
                    <p className="text-white-500">Funding amount:</p>
                    <p className="text-white-500"> {item.amount}</p>
                  </div>
                </div>
              </div>
              {item.category === 'Open' && (
                <Badge variant={'open'}>{item.category}</Badge>
              )}
              {item.category === 'Funded' && (
                <Badge variant={'funded'}>{item.category}</Badge>
              )}
              {item.category === 'Completed' && (
                <Badge variant={'success'}>{item.category}</Badge>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
