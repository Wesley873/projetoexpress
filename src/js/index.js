import '../css/style.css';
import adicionaClasse from './adicionaClasse.js';

function adicionaTexto() {
  const texto = document.createElement('p');
  texto.textContent = 'Texto adicionado com sucesso!';
  document.body.appendChild(texto);

}
function adicionaLink() {
  const link = document.createElement('a');
  link.textContent = 'Pagina 2';
  link.href = '/pagina2.html';
  document.body.appendChild(link);
};
adicionaLink();
adicionaTexto();
setTimeout(() => adicionaClasse('h1', 'animated-item'), 500);
setTimeout(() => adicionaClasse('p', 'animated-item'), 1000);