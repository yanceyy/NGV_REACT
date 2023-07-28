import './index.css';

import React, { ReactElement, useEffect, useState } from 'react';

export interface GalleryImgUrlItem {
  url: string;
  title: string;
  text: string;
  id: string;
}

interface GalleryImgUrlItems {
  IMGurl: GalleryImgUrlItem[];
}

export default function Gallery({ IMGurl }: GalleryImgUrlItems): ReactElement {
  const [pictureIndex, setPictureIndex] = useState<number>(0);

  useEffect(() => {
    const t = setInterval(() => {
      setPictureIndex((x) => {
        if (x + 1 >= IMGurl.length) {
          return 0;
        }
        return x + 1;
      });
    }, 7000);
    return () => {
      clearInterval(t);
    };
  }, [pictureIndex]);

  const jumpToPicture = (e: React.MouseEvent<HTMLLIElement>): void => {
    setPictureIndex(parseInt(e.currentTarget.dataset.index!, 10));
  };

  return (
    <section className="gallery">
      {IMGurl.map((url, index) => (
        <div
          key={url.id}
          className={index === pictureIndex ? 'active' : undefined}
        >
          <img alt={url.title} src={url.url} />
          <div className="info">
            <h3>{url.title}</h3>
            <p>{url.text}</p>
          </div>
        </div>
      ))}
      <ul className="picture-jump-section">
        {IMGurl.map((url, index) => (
          <li
            key={url.id}
            data-index={index}
            className={index === pictureIndex ? 'active' : undefined}
            onClick={jumpToPicture}
          />
        ))}
      </ul>
    </section>
  );
}
