export default function Home() {
  const filmes = [
    { titulo: "Vingadores", imagem: "/filme1.jpg" },
    { titulo: "Barbie", imagem: "/filme2.jpg" },
    { titulo: "Oppenheimer", imagem: "/filme3.jpg" },
    { titulo: "Homem Aranha", imagem: "/filme4.jpg" },
    { titulo: "Duna 2", imagem: "/filme5.jpg" },
    { titulo: "Velozes", imagem: "/filme6.jpg" },
    { titulo: "Deadpool", imagem: "/deadpool.jpg" },
    { titulo: "Coraline", imagem: "/coraline.jpg" },
    { titulo: "Harry Potter", imagem: "/harrypotter.jpg" },
    { titulo: "Divertidamente", imagem: "/divertidamente.jpg" },
  ];

  return (
    <div style={{ padding: "20px", background: "#111", color: "white", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "30px" }}>🎬 Meu Cineclube</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
        {filmes.map((filme, index) => (
          <div key={index} style={{ background: "#222", borderRadius: "12px", padding: "10px", transition: "transform 0.2s" }}>
            <img 
              src={filme.imagem} 
              alt={filme.titulo}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3 style={{ textAlign: "center", marginTop: "10px", fontSize: "1.1rem" }}>{filme.titulo}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
