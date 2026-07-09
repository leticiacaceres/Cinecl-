export default function Home() {
  const filmes = [
    { titulo: "Filme 1", imagem: "/filme1.jpg" },
    { titulo: "Filme 2", imagem: "/filme2.jpg" },
    { titulo: "Filme 3", imagem: "/filme3.jpg" },
    { titulo: "Filme 4", imagem: "/filme4.jpg" },
    { titulo: "Filme 5", imagem: "/filme5.jpg" },
    { titulo: "Filme 6", imagem: "/filme6.jpg" },
    { titulo: "Deadpool", imagem: "/deadpool.jpg" },
    { titulo: "Coraline", imagem: "/coraline.jpg" },
    { titulo: "Harry Potter", imagem: "/harrypotter.jpg" },
    { titulo: "Divertidamente", imagem: "/divertidamente.jpg" },
  ];

  return (
    <div style={{ padding: "20px", background: "#111", color: "white", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>🎬 Meu Cineclube</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px", marginTop: "20px" }}>
        {filmes.map((filme, index) => (
          <div key={index} style={{ background: "#222", borderRadius: "10px", padding: "10px" }}>
            <img 
              src={filme.imagem} 
              alt={filme.titulo}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3 style={{ textAlign: "center", marginTop: "10px" }}>{filme.titulo}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
