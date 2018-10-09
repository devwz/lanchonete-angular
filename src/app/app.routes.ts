import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { LancheComponent } from './lanche/lanche.component';

export const ROUTES : Routes = [
    { path: '', component: HomeComponent },
    { path: 'ingredientes', component: IngredientesComponent },
    { path: 'bebidas', component: BebidasComponent },
    { path: 'lanche/:id', component: LancheComponent }
]