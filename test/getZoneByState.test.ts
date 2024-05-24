import getZoneByState from '../src/lib/getZoneByState';
import { ZonesInterface } from '../src/shared/interfaces';

describe('functionality to get data for a particular state', () => {
  test('should not be null, and the returned object should have some expected properties when a valid state is passed', () => {
    const query = 'anambra'; // a valid state
    const zone: ZonesInterface | null = getZoneByState(query);

    expect(zone).not.toBeNull();
    expect(zone).toHaveProperty('state');
    expect(zone).toHaveProperty('capitalCity');
  });

  test('should return null when an invalid state is passed', () => {
    const query = 'washington'; // an invalid state
    const zone: ZonesInterface | null = getZoneByState(query);

    expect(zone).toBeNull();
  });
});