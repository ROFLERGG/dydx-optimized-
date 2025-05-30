const Skeleton = () => {
  return (
    <div className="flex justify-between items-start space-x-8 bg-secondary rounded-2xl p-6 max-[400px]:space-x-0 max-[400px]:space-y-4 max-[400px]:flex-col">
      <div className="flex flex-1 flex-col space-y-2 w-full">
        <div className="w-1/3 h-8 bg-white-100 opacity-20 animate-pulse rounded-full"></div>
        <div className="w-full h-6 bg-white-100 opacity-20 animate-pulse rounded-full"></div>
        <div className="w-1/2 h-6 bg-white-100 opacity-20 animate-pulse rounded-full"></div>
      </div>
      <div className="w-24 h-8 bg-white-100 opacity-20 animate-pulse rounded-full"></div>
    </div>
  );
};

export default Skeleton;
