import {Injectable} from '@angular/core';
import {Pokemon} from "./model/pokemon";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, filter, Observable, of, tap} from "rxjs";

@Injectable()
export class PokemonService {

    constructor(private http: HttpClient) {
    }

    getPokemonList(): Observable<Pokemon[]> {
        // return POKEMONS
        return this.http.get<Pokemon[]>('api/pokemons').pipe(
            tap(response => this.log(response)),
            catchError((error) => this.handleError(error, []))
        )
    }

    getPokemonById(idPokemon: number): Observable<Pokemon | undefined> {
        return this.http.get<Pokemon>(`api/pokemons/${idPokemon}`).pipe(
            tap(response => this.log(response)),
            catchError((error) => this.handleError(error, undefined))
        )
    }

    searchPokemonList(search: string): Observable<Pokemon[] | undefined> {
        if (search.length <= 1) {
            return of([]);
        }
        return this.http.get<Pokemon[]>(`api/pokemons/?name=${search}`).pipe(
            tap(response => this.log(response)),
            catchError((error) => this.handleError(error, []))
        )

    }

    updatePokemon(pokemon: Pokemon): Observable<null> {
        const httpOptions =  {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.put<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
            tap(response => this.log(response)),
            catchError((error) => this.handleError(error, null))
        )
    }

    addPokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions =  {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.post<Pokemon>('api/pokemons', pokemon, httpOptions).pipe(
            tap(response => this.log(response)),
            catchError((error) => this.handleError(error, null))
        )
    }

    deletePokemonById(pokemonId: number): Observable<null> {
        return this.http.delete<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
            tap(response => this.log(response)),
            catchError((error) => this.handleError(error, null))
        )
    }

    private log(response: Pokemon[] | Pokemon | undefined) {
        console.table(response)
    }

    private handleError(error: Error, errorValue: any) {
        console.error(error)
        return of(errorValue)
    }

    getPokemonTypeList(): string[] {
        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ]
    }
}