import './index.css';

import Head from '../../components/header';
import { useDocumentTitle } from '../../utils';

export default function Loading() {
  useDocumentTitle('Channel|VGN', false);
  return (
    <div className="maximum-body">
      <Head />
      <div className="homePageContent" />
    </div>
  );
}
