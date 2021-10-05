import React from 'react';
import Head from '../../components/header';
import Footer from '../../components/footer';
import { useDocumentTitle } from '../../utils';

export default function Channel() {
  useDocumentTitle('Channel', false);
  return (
    <>
      <div className="maximumbody">
        <Head />
        <div className="homePageContent" />
      </div>
      <Footer />
    </>
  );
}
