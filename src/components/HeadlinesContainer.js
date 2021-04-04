import React from 'react';
import { useGlobalContext } from '../context';
import Headline from './Headline';
import styled from 'styled-components';
import img from '../img/news.png';

const HeadlinesContainer = () => {
  const { newsPage, loading, nextPage, prevPage } = useGlobalContext();
  if (loading) {
    return (
      <HeadlinesWrapper>
        <div className='error-page'>
          <p>loading...... page</p>
        </div>
      </HeadlinesWrapper>
    );
  }
  return (
    <HeadlinesWrapper>
      <div className='cards-container'>
        {newsPage.map((item) => {
          const {
            title,
            abstract,
            url,
            uri,
            published_date,
            multimedia,
          } = item;
          return (
            <article className='card' key={uri}>
              <Headline
                title={title}
                abstract={abstract}
                url={url}
                published_date={published_date}
                multimedia={multimedia ? multimedia[4].url : img}
                uri={uri}
              />
            </article>
          );
        })}
      </div>
      <div className='btn-container'>
        <div>
          <button onClick={() => nextPage()} className='previous page-btn'>
            previus
          </button>
          <button onClick={() => prevPage()} className='next page-btn'>
            next
          </button>
        </div>
      </div>
    </HeadlinesWrapper>
  );
};

const HeadlinesWrapper = styled.div`
  margin: 0 auto;
  .cards-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flrx-direction: row;
    flex-wrap: wrap;
  }
  .card {
    max-width: 30%;
    margin: 1.7rem 0.6rem 0 0.6rem;
  }
  @media (max-width: 800px) {
    .card {
      max-width: 47%;
    }
  }
  @media (max-width: 600px) {
    .cards-container {
      flex-direction: column;
    }
    .card {
      max-width: 100%;
    }
  }
  .btn-container {
    margin: 0 auto;
    width: 70%;
  }
  .btn-container div {
    margin: 18px 0;
  }
  .previous {
    float: left;
  }
  .next {
    float: right;
  }
  .page-btn {
    width: 5rem;
    border: transparent;
    border-radius: 8px;
    padding: 8px;
    text-transform: capitalize;
  }
  .error-page {
    text-align: center;
    margin-top: 3rem;
    font-size: 2.5rem;
    text-transform: capitalize;
    line-height: 0.8;
  }
`;

export default HeadlinesContainer;
