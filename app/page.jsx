export default function Home() {
  const filmes = [
    { titulo: "Vingadores", imagem: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg" },
    { titulo: "Barbie", imagem: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" },
    { titulo: "Oppenheimer", imagem: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" },
    { titulo: "Homem Aranha", imagem: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1lTcLeRw2dgbwB.jpg" },
    { titulo: "Duna 2", imagem: "https://image.tmdb.org/t/p/w500/czembWxOuMozlO1JbGgWzX4i3Dq.jpg" },
    { titulo: "Deadpool", imagem: "https://image.tmdb.org/t/p/w500/3E53WEZJqP2w0sABmQO0PFUou8r.jpg" },
    { titulo: "Coraline", imagem: "https://image.tmdb.org/t/p/w500/4Uqs3UjQqRlCwYJkR3H3cYcC3aW.jpg" },
    { titulo: "Harry Potter", imagem: "https://image.tmdb.org/t/p/w500/wu1uJM8fNJEO0GA5RHbYbwUjRCB.jpg" },
    { titulo: "Divertida Mente", imagem: "https://image.tmdb.org/t/p/w500/9YpWc6tYQ7sV5JcK9k8qY8qY8qY.jpg" },
    { titulo: "Velozes e Furiosos", imagem: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg" }
  ]

  return (
    <main style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '40px', marginBottom: '30px' }}>CINECLÃ 🍿</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
        {filmes.map((filme) => (
          <div key={filme.titulo} style={{ textAlign: 'center' }}>
            <img 
              src={filme.imagem} 
              alt={filme.titulo}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <p style={{ marginTop: '8px', fontSize: '16px', fontWeight: 'bold' }}>{filme.titulo}</p>
            <button style={{ 
              backgroundColor: '#e50914', 
              color: 'white', 
              border: 'none', 
              padding: '8px 20px', 
              borderRadius: '5px',
              marginTop: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              Assistir
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
