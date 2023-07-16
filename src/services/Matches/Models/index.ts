export interface Match {
  begin_at: string;
  detailed_stats: boolean;
  draw: boolean;
  end_at: string | null;
  forfeit: boolean;
  game_advantage: null;
  games: Game[];
  id: number;
  league: {
    id: number;
    image_url: string | null;
    modified_at: string;
    name: string;
    slug: string;
    url: string | null;
  };
  league_id: number;
  live: {
    opens_at: null;
    supported: boolean;
    url: null;
  };
  match_type: string;
  modified_at: string;
  name: string;
  number_of_games: number;
  opponents: Opponent[];
  original_scheduled_at: string;
  rescheduled: boolean;
  results: Result[];
  scheduled_at: string;
  serie: {
    begin_at: string;
    end_at: string | null;
    full_name: string;
    id: number;
    league_id: number;
    modified_at: string;
    name: string;
    season: null;
    slug: string;
    winner_id: null;
    winner_type: null;
    year: number;
  };
  serie_id: number;
  slug: string;
  status: string;
  streams_list: any[];
  tournament: {
    begin_at: string;
    end_at: string | null;
    has_bracket: boolean;
    id: number;
    league_id: number;
    live_supported: boolean;
    modified_at: string;
    name: string;
    prizepool: null;
    serie_id: number;
    slug: string;
    tier: string;
    winner_id: null;
    winner_type: string;
  };
  tournament_id: number;
  videogame: {
    id: number;
    name: string;
    slug: string;
  };
  videogame_version: null;
  winner: null;
  winner_id: null;
  winner_type: string;
}

interface Game {
  begin_at: string | null;
  complete: boolean;
  detailed_stats: boolean;
  end_at: string | null;
  finished: boolean;
  forfeit: boolean;
  id: number;
  length: null;
  match_id: number;
  position: number;
  status: string;
  winner: {
    id: null;
    type: string;
  };
  winner_type: string;
}

interface Opponent {
  opponent: {
    acronym: null;
    id: number;
    image_url: string;
    location: string;
    modified_at: string;
    name: string;
    slug: string;
  };
  type: string;
}

interface Result {
  score: number;
  team_id: number;
}
