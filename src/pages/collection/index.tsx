import 'react-datepicker/dist/react-datepicker.css';

import styled from '@emotion/styled';
import Footer from '../../components/footer';
import Head from '../../components/header';
import Masonry from '../../components/MasonryLayout';
import PageTitle from '../../components/pagetitleBoar';
import { useDocumentTitle } from '../../utils';

const HeaderImg = styled.img`
  height: 500px;
  width: 100%;
  object-fit: cover;
  filter: blur(2px);
  &:hover {
    filter: none;
  }
`;
function Collection() {
  useDocumentTitle('Collection|VGN', false);
  return (
    <div className="tickets">
      <div className="maximum-body">
        <Head />
        <HeaderImg src="https://content.ngv.vic.gov.au/col-images/api/Cd101054/1920" />
        <PageTitle
          title="COLLECTION"
          text="The permanent collection of more than 75,000 works is at the heart of the Gallery’s activities and programs. Since its foundation in 1861, the Collection has come to span the history and development of Australian, Indigenous and international art, design and architecture. As it grows and evolves, the Collection embraces and reflects diversity in cultural identities, artistic practices and geographies as it connects art and people."
        />
        <Masonry />
      </div>
      <Footer />
    </div>
  );
}

export default Collection;
