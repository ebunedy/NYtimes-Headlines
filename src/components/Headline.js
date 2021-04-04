import React from 'react';
import styled from 'styled-components';

const Headline = ({
  title,
  abstract,
  url,
  uri: id,
  published_date,
  multimedia,
}) => {
  return (
    <Head>
      <img src={multimedia} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>{abstract}</p>
        <p className='date'>
          <span>published: </span>
          {new Date(published_date).toUTCString()}
        </p>
      </div>
      <p>
        <button>
          <a href={url} target='blank'>
            read more
          </a>
        </button>
      </p>
    </Head>
  );
};

const Head = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: auto;
  text-align: center;
  height: 35rem;
  width: 21rem;
  div {
    padding: 0.4rem;
  }
  img {
    width: 100%;
    height: 15rem;
  }
  .date {
    color: var(--lightShadeBrown);
    font-size: 14px;
  }
  .date span {
    color: black;
    text-transform: capitalize;
    font-size: 18px;
  }
  button {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border: none;
    outline: 0;
    padding: 12px;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
  }
  button a {
    text-decoration: none;
    text-transform: capitalize;
    font-size: 22px;
    color: var(--lightShadeBrown);
    font-family: 'Akaya Kanadaka', cursive;
  }
`;

export default Headline;
