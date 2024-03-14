import "./CatPost.css";

function CatPost(props) {
  const { cat, onBgClick } = props;
  return (
    <div className="cat-post" onClick={onBgClick}>
      <div className="cat-post-content">
        <img src={cat.imgUrl} />
        <h4>{cat.title}</h4>
      </div>
    </div>
  );
}

export default CatPost;
