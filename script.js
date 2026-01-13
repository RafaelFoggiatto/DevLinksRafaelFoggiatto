function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de mayk brito sorrindo com óculos de sol e fundo azul"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de mayk brito sorrindo com fundo amarelo")
  }
}
