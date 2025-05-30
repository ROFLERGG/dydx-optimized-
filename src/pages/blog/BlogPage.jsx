import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
import useFetch from '@/hooks/useFetch';
import Content from '@/components/Content';

const BlogPage = () => {
  const { id } = useParams();
  const url =
    'https://raw.githubusercontent.com/ROFLERGG/dYdX/main/src/data/blog-data.json';
  const { data } = useFetch(url);
  const [postIsLoading, setPostIsLoading] = useState(true);
  const [postContent, setPostContent] = useState();

  const fetchPost = async () => {
    try {
      const response = await fetch(`/posts/${id}.md`);
      const text = await response.text();

      const metaDataArray = text
        .split('---')[1]
        .trim()
        .replaceAll('\n', '')
        .split('\r');
      let metaDataObject = {};
      metaDataArray.forEach(e => {
        const [key, value] = e.split(': ');
        metaDataObject[key] = value;
      });

      setPostContent({
        metadata: metaDataObject,
        content: text.split('---')[2],
      });
    } catch (err) {
      console.log('Error: ', err);
    } finally {
      setPostIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const post = data.find(post => post.id == id);

  return (
    <>
      <Content>
        <div
          className={`flex justify-center flex-1 ${
            !postContent ? 'py-0' : 'py-10'
          }`}
        >
          {postContent && post && (
            <div className="w-[800px] flex flex-col space-y-10 max-lg:space-y-5">
              <div className="flex justify-center">
                {/* heading */}
                <div className="flex flex-col">
                  <div className="flex flex-col items-center">
                    <span className="mono-paragraph-md text-white-500">
                      <Markdown>{postContent.metadata.category}</Markdown>
                    </span>
                    <h2 className="heading-xl text-white-100 text-center">
                      <Markdown>{postContent.metadata.title}</Markdown>
                    </h2>
                  </div>
                  {/* author */}
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center space-y-4">
                      <h2 className="heading-sm text-white-100">By:</h2>
                      <div className="flex items-center py-3 px-5 rounded-full bg-secondary hover:bg-secondaryHover cursor-pointer select-none paragraph-md text-white-100">
                        <Markdown>{postContent.metadata.author}</Markdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* content */}
              <div className="flex flex-col space-y-10 max-lg:space-y-5">
                {/* image */}
                {post.image && (
                  <div>
                    <img
                      width={800}
                      height={460}
                      className="object-cover object-center w-full h-full"
                      src={post.image}
                      alt={`image${post.id}`}
                    />
                  </div>
                )}
                <div className="flex justify-center">
                  <Markdown className="prose max-w-full prose-p:text-white-500 prose-p:paragraph-md prose-headings:text-white-100 prose-h1:heading-lg prose-h2:heading-md prose-h3:heading-sm prose-blockquote:p-8 prose-blockquote:bg-secondaryHover prose-blockquote:border-none prose-blockquote:rounded-2xl prose-blockquote:paragraph-lg">
                    {postContent.content}
                  </Markdown>
                </div>
              </div>
            </div>
          )}

          {postIsLoading && (
            <div>
              <h2 className="heading-xl text-white-100">Post is loading...</h2>
            </div>
          )}
        </div>
      </Content>
      {!postContent && !postIsLoading && (
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex justify-center">
            <h1 className="heading-lg text-white-500">Post doesnt exist :(</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogPage;
