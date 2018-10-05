import { Ingrediente } from './ingrediente';

export interface Lanche {
    id: number;
    titulo: string;
    preco: number;
    ingredientes: Ingrediente[]
}