
export class Produto {

    private _id: number;
    private _descricao: string;
    private _preco: number;

    get id(): number {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }

    get descricao(): string {
        return this._descricao;
    }
    set descricao(value: string) {
        this._descricao = value;
    }

    get preco(): number {
        return this._preco;
    }
    set preco(value: number) {
        this._preco = value;
    }
}