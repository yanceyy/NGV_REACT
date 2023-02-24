import React from 'react';
import Head from '../../components/header';
import { useDocumentTitle } from '../../utils';
import './index.css';

export default function Loading() {
  useDocumentTitle('Channel|VGN', false);
  return (
    <>
      <div className="maximumbody">
        <Head />
        <div className="homePageContent" />
      </div>
    </>
  );
}
