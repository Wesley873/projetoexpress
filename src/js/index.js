import '../css/style.css';
import '../css/bootstrap.min.css';
import './bootstrap.min.js';
import listaItens from './listaItens.js';


document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM completamente carregado e analisado');
});

document.querySelector('#bota').addEventListener('click', (e) => {
    document.querySelector('#lista').innerHTML = listaItens.map((item)=>{
        return `<li>${item.nome}, ${item.preco}</li>`;
    });
});