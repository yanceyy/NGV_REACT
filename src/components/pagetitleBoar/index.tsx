import './index.css';

interface Content {
  title: string;
  text: string | undefined;
}

function PageTitle({ title, text }: Content) {
  return (
    <div className="page-title">
      <h1>{title}</h1>
      {text ? <p>{text}</p> : undefined}
    </div>
  );
}

export default PageTitle;
