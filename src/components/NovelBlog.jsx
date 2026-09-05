function NovelBlog({ title, author, type, description }) {
  return (
    <div className="novel-post">
      <h2>{title}</h2>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Type:</strong> {type}</p>
      <p>{description}</p>
    </div>
  );
}

export default NovelBlog;