# Nigerian Geopolitical Zones Data ![NPM Version](https://img.shields.io/npm/v/nigerian-geopolitical-zones)


This library contains in JSON format, Nigerian states with their various geopolitical zones. Other data includes:
- Area (in Km2)
- Capital Cities
- Longitude & Latitude Coordinates
- State Motto
- Population Count
- Population Count Rank
- Year Created
- Zone

## Installation

Package is available via npm:
```
npm install nigerian-geopolitical-zones
```

## Usage
Example:

```ts
// Utils
import { getAllZones, getZoneData, getZoneByState } from 'nigerian-geopolitical-zones';

// All 36 states (incl. FCT) with their zones
getAllZones();

// All states that fall in a zone
getZoneData('south east');
getZoneData('south-east');

// A state with zone data
getZoneByState('abia'); 
```

## Data structure
Example:

```ts
// Zone interface
{
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

// Coordinates interface
{
  latitude: number;
  longitude: number
}
```

## Contributions

PRs are welcome.

## Credits

The data was mostly sourced from [Wikipedia](https://en.wikipedia.org/wiki/States_of_Nigeria) and a number of other public sources across the internet.
