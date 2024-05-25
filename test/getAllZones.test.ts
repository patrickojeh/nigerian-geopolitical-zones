import { getAllZones } from '../src/index';
import { ZonesInterface } from '../src/shared/interfaces';

describe('functionality to get data for all zones', () => {
  test('should return available data for all geopolitical zones', () => {
    const zones: ZonesInterface[] = getAllZones(); // get data from zones data file

    expect(Array.isArray(zones)).toBe(true);
    expect(zones.length > 0).toBe(true);
  });
});