const toggleTag = document.querySelector("a.toggle-nav");
const mainTag = document.querySelector("main");

//When i click the toggle tag, toggle a class of open to the main tag
// If Open toggle tag should say close

toggleTag.addEventListener("click", function(){
    mainTag.classList.toggle("open")

  if (mainTag.classList.contains("open")){
      toggleTag.innerHTML = `<img src="images/close.svg"> Close`
  } else {
      toggleTag.innerHTML = `<img src="images/menu.svg"> Menu`
    }


})