type ZonesWithDashes = 
  | 'north-central'
  | 'north-east'
  | 'north-west'
  | 'south-east'
  | 'south-south'
  | 'south-west';

type ZonesWithoutDashes = 
  | 'north central'
  | 'north east'
  | 'north west'
  | 'south east'
  | 'south south'
  | 'south west';

export type ZoneType = ZonesWithDashes | ZonesWithoutDashes;