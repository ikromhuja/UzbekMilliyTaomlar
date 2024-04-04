import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

function ArticleDetail() {
  const { id } = useParams();
  const url = "http://localhost:3000/articles" + id;
  const { data: article, isPending, error } = useFetch(url);

  return (
    <div>
      {isPending && <h2>{isPending}</h2>}
      {error && <h2>{error}</h2>}
      {article && (
        <>
          <img src={article.image} alt={article.milliyTaomlar} height="300" />
          <h2> Haqida: {article.milliyTaomlar}</h2>
          <p>
            Muallif: <i>{article.muallif}</i>
          </p>
          <p>{article.tavsif}</p>
        </>
      )}
    </div>
  );
}

export default ArticleDetail;
