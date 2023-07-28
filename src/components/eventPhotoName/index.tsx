import './index.css';

interface EventProp {
  imgUrl: string;
  title: string;
}

function Event({ imgUrl, title }: EventProp) {
  return (
    <div className="event">
      <img src={imgUrl} alt="" />
      <h5>{title}</h5>
    </div>
  );
}

export default Event;
