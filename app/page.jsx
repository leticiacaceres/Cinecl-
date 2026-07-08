'use client'
import { useState } from 'react'

export default function Home() {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null)
  
  const filmes = [
    { titulo: "Vingadores", imagem: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg", descricao: "Os maiores heróis da Terra se unem para salvar o mundo de uma invasão alienígena." },
    { titulo: "Barbie", imagem: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg", descricao: "Barbie e Ken vão para o mundo real e descobrem a vida fora da Barbielândia." },
    { titulo: "Oppenheimer", imagem: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", descricao: "A história do pai da bomba atômica e os dilemas morais da ciência." },
    { titulo: "Homem Aranha", imagem: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg", descricao: "Peter Parker enfrenta vilões do multiverso em uma aventura épica." },
    { titulo: "Duna 2", imagem: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", descricao: "Paul Atreides lidera a revolução para controlar o planeta deserto mais importante do universo." },
    { titulo: "Deadpool", imagem: "https://image.tmdb.org/t/p/w500/3E53WEZJqP2w0sABmQO0PFUou8r.jpg", descricao: "O mercenário mais folgado do mundo salva o dia do seu jeito." },
    { titulo: "Coraline", imagem: "https://image.tmdb.org/t/p/w500/6LFsCnwWKAhOHFyWtp1UQuZqKuT.jpg", descricao: "Coraline descobre uma porta secreta para um mundo paralelo sombrio." },
    { titulo: "Harry Potter", imagem: "https://image.tmdb.org/t/p/w500/wu1uJM8fNJEO0GA5RHbYbwUjRCB.jpg", descricao: "O menino que sobreviveu descobre que é um bruxo e vai para Hogwarts." },
    { titulo: "Divertida Mente", imagem: "https://image.tmdb.org/t/p/w500/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg", descricao: "As emoções de uma menina trabalham juntas dentro da cabeça dela." },
    { titulo: "Velozes e Furiosos", imagem: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg", descricao: "Família é tudo. E corrida de carro também." }
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
