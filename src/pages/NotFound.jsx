import Content from '@/components/Content';

const NotFound = () => {
  return (
    <>
      <Content />
      <div className="flex flex-col justify-center flex-1 z-10">
        <div className="@container px-4">
          <div className="flex justify-center">
            <div className="max-w-[600px] flex flex-1 flex-col items-center space-y-6">
              <h1 className="hero text-white-500">404</h1>
              <h2 className="heading-lg text-white-500">Page not found :(</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
