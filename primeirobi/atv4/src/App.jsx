import Header from './components/Header';
import Navigation from './components/Navigation';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default function App() {
  const titulo = 'Aprendendo sobre osu!';
  const autor = 'Marcos';
  const data = '03/10/2026';
  const conteudo = (
    <>

            <section>
                <h2>O que é osu!?</h2>
                <p>osu! é um jogo de ritmo em que você acerta círculos na tela acompanhando uma música. As músicas são jogadas em beatmaps, que são mapas criados pela comunidade. Uma mesma música pode ter mapas com várias dificuldades.</p>
                <p>O jogo tem quatro modos: osu!standard, taiko, catch e mania. O standard é o modo dos círculos e é o que vou apresentar aqui.</p>
            </section>

            <section>
                <h2>Como jogar</h2>
                <p>No standard, você move o cursor com o mouse ou uma mesa digitalizadora. Para acertar os objetos, pode usar os botões do mouse ou as teclas Z e X do teclado.</p>
                <ul>
                    <li>Círculos: clique quando o anel que diminui chegar à borda do círculo.</li>
                    <li>Sliders: segure o botão e acompanhe o caminho com o cursor.</li>
                    <li>Spinners: segure o botão e gire o cursor ao redor do centro.</li>
                </ul>
                <p>Não basta acertar a posição: também é preciso acertar o tempo. A precisão mostra a qualidade dos acertos, enquanto o combo conta a sequência de acertos e pode ser quebrado por erros.</p>
            </section>

            <section>
                <h2>Dificuldade dos mapas</h2>
                <p>Os mapas têm uma classificação por estrelas. Quanto maior essa classificação, mais difícil o mapa tende a ser. A velocidade e a posição dos objetos mudam de acordo com o mapa.</p>
                <p>Também existem os mods, que alteram os beatmaps. O Double Time aumenta a velocidade, e o Hidden faz os objetos desaparecerem antes da hora de acertar.</p>
            </section>

            <section>
                <h2>Free-to-win</h2>
                <p>osu! é gratuito e se apresenta como free-to-win. Existe o osu!supporter, uma opção paga para apoiar o jogo, mas ele não oferece vantagem na gameplay ou na pontuação.</p>
                <p>Para começar, você pode baixar o jogo no <a href="https://osu.ppy.sh/home/download">site oficial</a> e escolher mapas mais simples para aprender os controles.</p>
            </section>

            <section>
                <h2>11/01/2024 - Uma demonstração do autor jogando osu! aos 16 anos</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Q_rPupzAE1o?si=WqIDJntFo1Mf0K1Y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <p><a href="https://www.youtube.com/watch?v=Q_rPupzAE1o">Assistir no YouTube</a></p>
            </section>

    </>
  );

  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Article titulo={titulo} autor={autor} data={data} conteudo={conteudo} />
<section>
            <h2>Deixe um comentário</h2>
            <p>Este formulário é um exemplo da atividade e não envia os dados.</p>
            <form onSubmit={(event) => event.preventDefault()}>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" required minLength="2" />

                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" required />

                <label htmlFor="comentario">Comentário:</label>
                <textarea id="comentario" rows="4" required></textarea>

                <button type="submit">Validar</button>
            </form>
        </section>
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}
