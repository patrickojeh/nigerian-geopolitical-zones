import { getZoneData } from '../src/index';
import { ZonesInterface } from '../src/shared/interfaces';

describe('functionality to get data for a particular zone', () => {
  test('getZoneData should return an array of zones containing more than one element when a valid zone name separated by a space is provided', () => {
    const query = 'south east'; // valid zone name with space
    const zone: ZonesInterface[] = getZoneData(query);

    expect(Array.isArray(zone)).toBeTruthy();
    expect(zone.length > 0).toBeTruthy();
  });

  test('getZoneData should return an array of zones containing more than one element when a valid zone name separated by a dash is provided', () => {
    const query = 'south-east'; // valid zone name with dash
    const zone: ZonesInterface[] = getZoneData(query);

    expect(Array.isArray(zone)).toBeTruthy();
    expect(zone.length > 0).toBeTruthy();
  });
});