'use client'
import { useState } from 'react'

export default function Home() {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null)
  
  const filmes = [
    { titulo: "Vingadores", imagem: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg", descricao: "Os maiores heróis da Terra se unem para salvar o mundo de uma invasão alienígena." },
    { titulo: "Barbie", imagem: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg", descricao: "Barbie e Ken vão para o mundo real e descobrem a vida fora da Barbielândia." },
    { titulo: "Oppenheimer", imagem: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", descricao: "A história do pai da bomba atômica e os dilemas morais da ciência." },
    { titulo: "Homem Aranha", imagem: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg", descricao: "Peter Parker enfrenta vilões do mult
