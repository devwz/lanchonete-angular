import { Ingrediente } from '../ingredientes/ingrediente';

export interface Lanche {
    id: number;
    titulo: string;
    preco: number;
    ingredientes: Ingrediente[]
}