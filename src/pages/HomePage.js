import React from 'react';
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: 'What is a Sun?',
    author: 'John Malkovith',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quod aut? Facere laboriosam voluptatum expedita quo hic itaque dicta sit deleniti, facilis saepe quia cum nobis quasi deserunt unde molestias.'
  },
  {
    id: 2,
    title: 'How to recognize out Solar System?',
    author: 'Bruce Wayne',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quod aut? Facere laboriosam voluptatum expedita ipsum dolor sit amet consectetur adipisicing elit quo hic itaque dicta sit deleniti, facilis saepe quia cum nobis quasi deserunt unde molestias ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 3,
    title: 'Can We ever get to Mars?',
    author: 'Elon Musk',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, quod aut? Facere laboriosam voluptatum expedita facilis saepe quia cum nobis quasi deserunt unde molestias.'
  },
]

const HomePage = () => {
  return (
    <div className="home">
      {articles.map(article =>
        <Article
          key={article.id}
          {...article}
        />)}
    </div>
  );
}

export default HomePage;