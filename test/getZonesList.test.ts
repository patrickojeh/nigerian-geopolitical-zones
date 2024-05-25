import { getZonesList } from '../src/index';

describe('functionality to return just the names of all geopolitical zones', () => {
  test('should return an array containing strings of 6 items', () => {
    const zones: string[] = getZonesList();

    expect(Array.isArray(zones)).toBeTruthy();
    expect(zones.length == 6).toBeTruthy();
    expect(typeof zones[0] === 'string').toBeTruthy();
  })
})