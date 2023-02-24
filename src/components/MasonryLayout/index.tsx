import React from 'react';
import styled from '@emotion/styled';
import MasonryItem from '../MasonryLayoutItem';

const data = [
  {
    imgUrl: 'https://content.ngv.vic.gov.au/col-images/api/Df107137/large',
    name: 'Sally Morgan',
    year: '(1987)',
    content: 'from The bicentennial folio: prints by twenty-five Australian artists 1988',
  },
  {
    imgUrl: 'https://content.ngv.vic.gov.au/col-images/api/Fe102865/large',
    name: 'Sally Morgan',
    year: '(1987)',
    content: 'from The bicentennial folio: prints by twenty-five Australian artists 1988',
  },
  {
    imgUrl: 'https://content.ngv.vic.gov.au/col-images/api/Ed000018/large',
    name: 'Sally Morgan',
    year: '(1987)',
    content: 'from The bicentennial folio: prints by twenty-five Australian artists 1988',
  },
  {
    imgUrl: 'https://content.ngv.vic.gov.au/col-images/api/Fe102939/large',
    name: 'Sally Morgan',
    year: '(1987)',
    content: 'from The bicentennial folio: prints by twenty-five Australian artists 1988',
  },
  {
    imgUrl: 'https://content.ngv.vic.gov.au/col-images/api/De108882/large',
    name: 'Sally Morgan',
    year: '(1987)',
    content: 'from The bicentennial folio: prints by twenty-five Australian artists 1988',
  },
];

const MasonryContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 20px 3%;
  .column {
    width: 25%;
    display: flex;
    flex-flow: column nowrap;
  }
`;

function Masonry() {
  return (
    <MasonryContainer>
      <div className="column">
        <MasonryItem item={data[3]} />
        <MasonryItem item={data[0]} />
      </div>
      <div className="column">
        <MasonryItem item={data[1]} />
        <MasonryItem item={data[2]} />
        <MasonryItem item={data[3]} />
      </div>
      <div className="column">
        <MasonryItem item={data[2]} />
        <MasonryItem item={data[3]} />
      </div>
      <div className="column">
        <MasonryItem item={data[0]} />
        <MasonryItem item={data[3]} />
        <MasonryItem item={data[4]} />
      </div>
    </MasonryContainer>
  );
}

export default Masonry;
