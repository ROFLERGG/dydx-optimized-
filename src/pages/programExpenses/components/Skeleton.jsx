const Skeleton = () => {
  return (
    <div className="flex justify-between items-start p-6 bg-secondary rounded-2xl gap-8 max-[500px]:flex-col">
      <div className="flex flex-col justify-between space-y-4">
        <div className="flex flex-col space-y-2">
          <div className="bg-white-100 opacity-20 w-20 h-6 rounded-full animate-pulse"></div>
          <div className="bg-white-100 opacity-20 w-14 h-7 rounded-full animate-pulse"></div>
          <div className="bg-white-100 opacity-20 w-8 h-6 rounded-full animate-pulse"></div>
        </div>
        <div className="bg-white-100 opacity-20 w-20 h-6 rounded-full animate-pulse"></div>
      </div>
      <div className="flex items-center space-x-4">
        <span className="bg-white-100 opacity-20 animate-pulse w-32 h-6 rounded-full"></span>
      </div>
    </div>
  );
};

export default Skeleton;
