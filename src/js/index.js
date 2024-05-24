import '../css/style.css';
import '../css/bootstrap.min.css';
import './bootstrap.min.js';
import listaItens from './listaItens.js';


document.addEventListener('DOMContentLoaded', (event) => {
    const url = window.location.href + 'pedido.html';
    document.querySelector('#pedido').setAttribute('href', url);
    alert(url);
    console.log(window.location.href);
});

document.querySelector('#bota').addEventListener('click', (e) => {
    document.querySelector('#lista').innerHTML = listaItens.map((item)=>{
        return `<li>${item.nome}, ${item.preco}</li>`;
    });
});