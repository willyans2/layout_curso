function toggleMode(){
  const ahtml = document.documentElement
  ahtml.classList.toggle("light")

  //pegar a tag img
 const img = document.querySelector("#profile img")
 
 //substituir a imagem 
  if(ahtml.classList.contains('light')){
    //se estiver em ligth mode, adicionar a imagem light
   img.setAttribute('src', 'assets/assets/avatar-light.png')
   img.setAttribute("alt", "deveria ter uma foto aqui darkMode")
  } 
  else {
    //se tiver sem litgh mode, manter a imagem normal
    img.setAttribute("src", "assets/assets/avatar.png")
    img.setAttribute("alt", "deveria ter uma foto aqui lightMode")
  }
  
}
