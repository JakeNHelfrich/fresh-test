interface NamedAPIResource {
  name: string;
  url: string;
}

interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
}

interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion;
}

interface PokemonStat {
  stat: NamedAPIResource;
  effort: number;
  base_state: number;
}

interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

interface PokemonSprites {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_default: string;
    back_shiny: string;
    back_female: string;
    back_shiny_female: string;
  }
  
  interface PokemonData {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_defualt: boolean;
    order: number;
    weight: number;
    sprites: PokemonSprites;
    moves: PokemonMove[];
    stats: PokemonStat[];
    types: PokemonType[];
  }
  