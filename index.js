const buttonElem = document.querySelectorAll('.btn');
for (let i = 0; i < buttonElem.length; i++) {
  let button = buttonElem[i];
  function handleClick(event) {
    console.log(event.target.textContent);
  }
  button.addEventListener('click', handleClick);
}
