export default class Item {
    constructor (id, nome, preço, descricaoCurta, descricaoCompleta){
        this.id = id;
        this.nome = nome;
        this.preço = preço;
        this.descricaoCurta = descricaoCurta;
        this.descricaoCompleta = descricaoCompleta;
    }
    get id(){
        return this._id;
    }
    get infoCard(){
        return {
            id: this.id,
            nome: this.nome,
            preço: this.preço,
            descricaoCurta: this.descricaoCurta
        };
    }
}