import zones from "../helpers/fetchZones";
import { ZonesInterface } from "../shared/interfaces";
import { ZoneType } from "./types";

/**
 * Function that returns data for a particular geopolitical zone. e.g. 'south-east'
 * @param {string} zone - Name of a geopolitical zone
 * @returns {ZonesInterface}
 */
function getZoneData(zone: ZoneType): ZonesInterface[] {
  // allow zone name separated by a dash. e.g. south-east
  const query: string = zone.replace('-', ' ').toLowerCase();

  const data: ZonesInterface[] = zones.filter(({zone}) => zone.toLowerCase() === query);

  return data;
}

export default getZoneData;