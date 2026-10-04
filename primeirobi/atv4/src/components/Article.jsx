export default function Article(props) {
  return (
    <article id="post">
      <h2>{props.titulo}</h2>
      <p>Por {props.autor} - {props.data}</p>
      {props.conteudo}
    </article>
  );
}
