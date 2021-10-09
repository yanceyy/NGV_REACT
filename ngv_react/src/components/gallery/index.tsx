import React, {
  ReactElement, useState, useEffect,
} from 'react';
import './index.css';

interface GalleryImgUrlItem{
  url:string,
  title:string,
  text:string,
  id:string
}

interface GalleryImgUrlItems{
  IMGurl:GalleryImgUrlItem[],
}

export default function Gallery({ IMGurl }:GalleryImgUrlItems):ReactElement {
  const [picIndex, setpicIndex] = useState<number>(0);

  useEffect(() => {
    const t = setInterval(() => {
      setpicIndex((x) => {
        if (x + 1 >= IMGurl.length) {
          return 0;
        }
        return x + 1;
      });
    }, 7000);
    return () => {
      clearInterval(t);
    };
  }, [picIndex]);
  const fastChangePic = (e:React.MouseEvent<HTMLLIElement>):void => {
    setpicIndex(parseInt(e.currentTarget.dataset.index!, 10));
  };
  return (
    <div className="gallery">
      {
        IMGurl.map((url, index) => (
          <div key={url.id} className={index === picIndex ? 'active' : undefined}>
            <img alt={url.title} src={url.url} />
            <div className="info">
              <h3>
                {url.title}
              </h3>
              <p>
                {url.text}
              </p>
            </div>
          </div>
        ))
        }
      <ul className="fastchange">
        {
              IMGurl.map((url, index) => <li key={url.id} data-index={index} className={index === picIndex ? 'active' : undefined} onClick={fastChangePic} />)
        }
      </ul>

    </div>
  );
}
