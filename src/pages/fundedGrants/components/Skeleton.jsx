const Skeleton = ({ className = '' }) => {
  return (
    <div className={`flex shrink-0 min-h-[500px] ` + className}>
      <div className="flex flex-1 snap-center flex-col bg-secondary rounded-2xl">
        {/* image */}
        <div className="w-full h-[180px] bg-white-100 opacity-20 rounded-2xl animate-pulse"></div>
        {/* content */}
        <div className="p-6 flex flex-1 flex-col justify-between space-y-4">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <div className="w-64 h-6 bg-white-100 opacity-20 animate-pulse rounded-full"></div>
              <div className="w-40 h-8 bg-white-100 opacity-20 animate-pulse rounded-full"></div>
              <div className="w-full h-6 bg-white-100 opacity-20 animate-pulse rounded-full"></div>
            </div>
            <div className="w-full h-20 bg-white-100 opacity-20 animate-pulse rounded-3xl"></div>
          </div>
          {/* avatars */}
          <div className="w-full h-10 bg-white-100 opacity-20 animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
