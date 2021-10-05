import React from 'react';
import Head from '../../components/header';
import Footer from '../../components/footer';
import { useDocumentTitle } from '../../utils';

export default function WhatsOn() {
  useDocumentTitle('What\'s on', false);
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
