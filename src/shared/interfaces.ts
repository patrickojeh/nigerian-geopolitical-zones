interface Coordinates {
  latitude: number;
  longitude: number
}

export interface ZonesInterface {
  areaKm2: string;
  capitalCity: string;
  coordinates: Coordinates;
  motto: string;
  population: number;
  populationRank: number | null;
  state: string;
  yearCreated: number;
  zone: string;
}