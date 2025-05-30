import Filter from './components/filter';
import CallToAction from '@/components/CallToAction';
import Content from '@/components/Content';

const Initiatives = () => {
  return (
    <>
      <Content>
        <div className="flex justify-center pt-10">
          <div className="flex flex-col space-y-10 max-w-[800px] overflow-x-hidden">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="heading-xl text-white-100">
                Discover initiatives (RFPs)
              </h2>
              <p className="paragraph-lg text-white-500">
                The list below includes initial ideas that we think could make
                excellent Grants. This is a living list that will continue to
                update as ideas popup.
              </p>
            </div>
            <Filter />
          </div>
        </div>
      </Content>
      <CallToAction />
    </>
  );
};

export default Initiatives;
