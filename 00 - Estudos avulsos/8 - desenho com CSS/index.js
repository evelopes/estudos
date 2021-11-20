const marioContainer = document.getElementsByClassName('corpo-mario')[0];
const linesToAdd = 400;

for (let i = 0; i < linesToAdd; i++) {
  let div = document.createElement('DIV');
  marioContainer.appendChild(div);
}
