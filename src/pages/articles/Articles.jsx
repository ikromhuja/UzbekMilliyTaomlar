import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";

function Articles() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");
  return (
    <div className="article-container">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}

      {articles &&
        articles.map((article) => {
          return (
            <div className="card" key={article.id}>
              <h3>Milliy Taomlar: {article.milliyTaomlar}</h3>
              <p>
                Muallif: <i>{article.muallif}</i>
              </p>
              <img
                style={{
                  borderRadius: "60%",
                  marginLeft: "auto",
                  width: "200px",
                  display: "flex",
                }}
                src={article.homeimg}
                alt="Article Image"
              />
              <NavLink to={`/articles/${article.id}`}>Read More</NavLink>
            </div>
          );
        })}
    </div>
  );
}

export default Articles;
