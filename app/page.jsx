'use client'
import { useState } from 'react'

export default function Home() {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null)
  
  const filmes = [
    { titulo: "Vingadores", imagem: "https://lumiere-a.akamaihd.net/v1/images/p_avengers_endgame_19751_8a0d88ab.jpeg", descricao: "Os maiores heróis da Terra se unem para salvar o mundo de uma invasão alienígena." },
    { titulo: "Barbie", imagem: "https://br.web.img3.acsta.net/pictures/23/05/25/18/28/0996523.jpg", descricao: "Barbie e Ken vão para o mundo real e descobrem a vida fora da Barbielândia." },
    { titulo: "Oppenheimer", imagem: "https://br.web.img2.acsta.net/pictures/23/05/11/16/34/1081246.jpg", descricao: "A história do pai da bomba atômica e os dilemas morais da ciência." },
    { titulo: "Homem Aranha", imagem: "https://br.web.img3.acsta.net/pictures/23/04/06/16/49/5900273.jpg", descricao: "Peter Parker enfrenta vilões do multiverso em uma aventura épica." },
    { titulo: "Duna 2", imagem: "https://br.web.img2.acsta.net/pictures/24/01/24/10/28/4932151.jpg", descricao: "Paul Atreides lidera a revolução para controlar o planeta deserto mais importante do universo." },
    { titulo: "Deadpool", imagem: "https://br.web.img3.acsta.net/pictures/24/04/22/18/11/5852432.jpg", descricao: "O mercenário mais folgado do mundo salva o dia do seu jeito." },
    { titulo: "Coraline", imagem: "https://br.web.img3.acsta.net/pictures/09/02/20/17/38/204942.jpg", descricao: "Coraline descobre uma porta secreta para um mundo paralelo sombrio." },
    { titulo: "Harry Potter", imagem: "https://br.web.img3.acsta.net/pictures/14/07/22/12/43/580254.jpg", descricao: "O menino que sobreviveu descobre que é um bruxo e vai para Hogwarts." },
    { titulo: "Divertida Mente", imagem: "https://br.web.img3.acsta.net/pictures/15/06/01/16/03/120123.jpg", descricao: "As emoções de uma menina trabalham juntas dentro da cabeça dela." },
    { titulo: "Velozes e Furiosos", imagem: "https://br.web.img3.acsta.net/pictures/23/03/06/17/07/3285040.jpg", descricao: "Família é tudo. E corrida de carro também." }
  ]

  if (filmeSelecionado) {
    return (
      <main style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', padding: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>{filmeSelecionado.titulo}</h1>
        <img src={filmeSelecionado.imagem} style={{ width: '300px', borderRadius: '10px', margin: '20px 0' }}/>
        <p style={{ maxWidth: '500px', margin: '0 auto', fontSize: '18px' }}>{filmeSelecionado.descricao}</p>
        <button onClick={() => setFilmeSelecionado(null)} style={{ marginTop: '30px', padding: '12px 30px', backgroundColor: '#e50914', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}>
          Voltar
        </button>
      </main>
    )
  }

  return (
    <main style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '40px', marginBottom: '30px' }}>CINECLÃ 🍿</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
        {filmes.map((filme) => (
          <div key={filme.titulo} style={{ textAlign: 'center' }}>
            <img src={filme.imagem} alt={filme.titulo} style={{ width: '100%', borderRadius: '10px' }}/>
            <p style={{ marginTop: '8px', fontSize: '16px', fontWeight: 'bold' }}>{filme.titulo}</p>
            <button onClick={() => setFilmeSelecionado(filme)} style={{ 
              backgroundColor: '#e50914', color: 'white', border: 'none', 
              padding: '8px 20px', borderRadius: '5px', marginTop: '8px',
              cursor: 'pointer', fontWeight: 'bold'
            }}>
              Assistir
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
