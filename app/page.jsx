export default function Home() {
  const filmes = [
    { 
      titulo: "Vingadores", 
      imagem: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg" 
    },
    { 
      titulo: "Barbie", 
      imagem: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" 
    },
    { 
      titulo: "Oppenheimer", 
      imagem: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" 
    }
  ]

  return (
    <main style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', padding: '40px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '40px' }}>CINECLÃ 🍿</h1>
      
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px', flexWrap: 'wrap' }}>
        {filmes.map((filme) => (
          <div key={filme.titulo} style={{ textAlign: 'center' }}>
            <img 
              src={filme.imagem} 
              alt={filme.titulo}
              style={{ width: '200px', borderRadius: '10px' }}
            />
            <p style={{ marginTop: '10px' }}>{filme.titulo}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
