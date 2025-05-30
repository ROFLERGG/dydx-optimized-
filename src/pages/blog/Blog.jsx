import Content from '@/components/Content';
import BlogFilter from './components/BlogFilter';

const Blog = () => {
  return (
    <Content>
      <div className="flex justify-center py-10">
        <div className="flex flex-col space-y-10 w-[800px] overflow-x-hidden">
          <div className="flex flex-col items-center space-y-6 text-center">
            <h2 className="heading-xl text-white-100">Blog</h2>
          </div>
          <BlogFilter />
        </div>
      </div>
    </Content>
  );
};

export default Blog;
