import React from 'react';
import styled from '@emotion/styled';

const Masonryitem = styled.div`
padding: 20px;

img{
  width:100%;
}
>div{
  font-size:22px;
  border: 2px solid rgba(0,0,0,0.1);
  >*{
    margin:5px;
  }
  .name{
    font-weight:bolder;
  }
}
`;
function MasonryItem(props:{item:{imgUrl:string, name:string, year:string, content:string}}) {
  const { item } = props;
  const {
    imgUrl, name, year, content,
  } = item;
  return (
    <Masonryitem>
      <img src={imgUrl} alt="" />
      <div>
        <div className="name">{name}</div>
        <div className="year">{year}</div>
        <div className="content">{content}</div>
      </div>
    </Masonryitem>
  );
}

export default MasonryItem;
