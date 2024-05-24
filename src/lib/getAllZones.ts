import zones from "../helpers/fetchZones";
import { ZonesInterface } from "../shared/interfaces";

/**
 * Function that gets all geopolitcal zones
 * @returns {ZonesInterface[]}
 */
function getAllZones(): ZonesInterface[] {
  return zones;
}

export default getAllZones;