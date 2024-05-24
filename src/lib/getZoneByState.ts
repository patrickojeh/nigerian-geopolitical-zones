import zones from "../helpers/fetchZones";
import { ZonesInterface } from "../shared/interfaces";

/**
 * Function that returns zone for a particular state
 * @param {string} state - Name of a state
 * @returns {ZonesInterface}
 */
function getZoneByState(state: string): ZonesInterface | null {
  const query: string = state.replace('-', ' ').toLowerCase();

  const zone: ZonesInterface | undefined = zones.find(({state}) => state.toLowerCase() === query);

  return zone ?? null;
}

export default getZoneByState;