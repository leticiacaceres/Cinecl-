'use client'
import { useState } from 'react'

export default function Home() {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null)
  
  const filmes = [
    { titulo: "Vingadores", imagem: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg", descricao: "Os maiores heróis da Terra se unem para salvar o mundo." },
    { titulo: "Barbie", imagem: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg", descricao: "Barbie e Ken vão para o mundo real e descobrem a vida." },
    { titulo: "Oppenheimer", imagem: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", descricao: "A história do pai da bomba atômica." }
  ]

  if (filmeSelecionado) {
    return (
      <main style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', padding: '40px', textAlign: 'center' }}>
        <h1>{filmeSelecionado.titulo}</h1>
        <img src={filmeSelecionado.imagem} style={{ width: '300px', borderRadius: '10px', margin: '20px 0' }}/>
        <p style={{ maxWidth: '500px', margin: '0 auto' }}>{filmeSelecionado.descricao}</p>
        <button onClick={() => setFilmeSelecionado(null)} style={{ marginTop: '20px', padding: '10px 30px', backgroundColor: 'gray', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer' }}>
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
