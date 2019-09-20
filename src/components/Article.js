import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, author, text }) => {
  const styles = {
    paddingRight: 20,
  }

  return (
    <article style={styles}>

      <h3 style={{
        textDecoration: "underline",
        marginBottom: 5,
      }}>{title}</h3>

      <span style={{
        display: "block",
        fontSize: 14,
        marginBottom: 5,
        textTransform: "uppercase"
      }}>{author}</span>

      <p style={{
        marginBottom: 20,
        fontSize: 16,
      }}>{text}</p>

    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Article;