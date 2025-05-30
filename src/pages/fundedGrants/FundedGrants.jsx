import CallToAction from '@/components/CallToAction';
import CardFilter from './components/CardFilter';
import Content from '@/components/Content';

const FundedGrants = () => {
  return (
    <>
      <Content>
        <div className="flex flex-col space-y-10 pt-10">
          <div className="flex justify-center">
            <h2 className="heading-xl text-white-100">Funded grants</h2>
          </div>
          <CardFilter />
        </div>
      </Content>
      <CallToAction />
    </>
  );
};

export default FundedGrants;
