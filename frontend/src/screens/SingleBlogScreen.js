import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { createClient } from 'contentful';
import formatDate from '../utils/formatDate';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Loader from '../components/Loader';

const CONTENTFUL_SPACE_ID = 'fypy5qogy93n';
const CONTENTFUL_ACCESS_TOKEN = 'BdRsoOCQ5JVl8mm8Q4jo8Etu8W6_-VU1E6YNOzxNDk0';

const SingleBlogScreen = () => {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();

  const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });

  const fetchBlog = async () => {
    try {
      const entries = await client.getEntries({
        content_type: 'blog',
        'fields.slug': slug,
      });
      const blog = entries.items[0];
      setBlog(blog?.fields);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <section>
      <div className="section-header">
        <h1>{blog?.title}</h1>
      </div>

      <div className="section section-center single-blog">
        <article className="single-blog-img">
          <img src={blog?.image?.fields.file.url} alt={blog?.title} />
        </article>

        <article className="single-blog-header">
          <span className="blog-date">
            <i className="far fa-calendar"></i>{' '}
            {blog?.date && formatDate(blog?.date)}
          </span>
          <span className="blog-category">{blog?.category}</span>
        </article>

        <article className="single-blog-content">
          {documentToReactComponents(blog?.content)}
        </article>
      </div>
    </section>
  );
};
export default SingleBlogScreen;
