import React from 'react';
import './index.css';

interface Content {
  title: string;
  text: string;
}

function PageTitle({ title, text = '' }: Content) {
  return (
    <div className="pagetitle">
      <h1>{title}</h1>
      {text ? <p>{text}</p> : undefined}
    </div>
  );
}

export default PageTitle;
