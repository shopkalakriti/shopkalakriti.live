import React from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../utils/formatDate';
import ReactMarkdown from 'react-markdown';

const BlogCard = ({ blog }) => {
  const { slug, title, image, description, category, date } = blog;

  const finalDescription =
    description.length > 250 ? description.substr(0, 250) + '...' : description;

  return (
    <>
      <Link to={`/blog/${slug}`} className="blog">
        <article className="info">
          <h4 className="blog-title">{title}</h4>
          <p className="blog-description">
            <ReactMarkdown>{finalDescription}</ReactMarkdown>
          </p>
          <div className="blog-footer">
            <small className="blog-category">{category}</small>
            <p className="blog-date">
              <i className="far fa-calendar"></i> {formatDate(date)}
            </p>
          </div>
        </article>

        <img src={image.fields.file.url} alt={title} />
      </Link>

      <hr />
    </>
  );
};
export default BlogCard;
