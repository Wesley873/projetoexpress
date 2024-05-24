import '../css/style.css';
import '../css/bootstrap.min.css';
import './bootstrap.min.js';
import listaItens from './listaItens.js';


document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#pedido').setAttribute('href', window.location.href+'pedido.html');
    document.querySelector('#ofertas').setAttribute('href', window.location.href+'ofertas.html');
    document.querySelector('#buscar').setAttribute('href', window.location.href+'buscar.html');
    document.querySelector('#meusdados').setAttribute('href', window.location.href+'meusdados.html');
    document.querySelector('#formasdepagamento').setAttribute('href', window.location.href+'formasdepagamento.html');
    document.querySelector('#historico').setAttribute('href', window.location.href+'historico.html');
    document.querySelector('#configuracoes').setAttribute('href', window.location.href+'configuracoes.html');
});

document.querySelector('#bota').addEventListener('click', (e) => {
    document.querySelector('#lista').innerHTML = listaItens.map((item)=>{
        return `<li>${item.nome}, ${item.preco}</li>`;
    });
});
