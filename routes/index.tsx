/** @jsx h */
import { h } from "preact";
import { PageProps, Handlers } from "$fresh/server.ts";
import { tw } from 'twind';
import axiod from 'axiod';

import PokemonData from '../pokemon.d.ts';

interface Data {
    pokemon: PokemonData;
}

export default function Greet({ data, params }: PageProps<Data>) {
    const { pokemon } = data; 
    return (
    <div class={tw`w-screen h-screen flex items-center justify-center flex-col`}>
      <div class={tw`w-56`}>
        <img src={pokemon.sprites.front_default} alt={`${pokemon.name} sprite`} class={tw`w-full`} />
        <h1 class={tw`text-4xl text-center`}>
          {(pokemon.name)}
        </h1>
        <p class={tw`text-center font-bold`}>Type: {pokemon.types.map((type: PokemonType) => type.type.name).join(',')}</p>
        <div class={tw`text-center`}>
          <h2 class={tw`text-2xl`}>10 Moves</h2>
          <ul>
            {pokemon.moves.slice(0,10).map((move: PokemonMove) => <li>{move.move.name}</li> )}
          </ul>
        </div>
      </div>
    </div>
    );
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const pokemonReponse = await axiod.get<PokemonData>(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 100 * 5)}`);
    return ctx.render({ pokemon: pokemonReponse.data });
  },
};