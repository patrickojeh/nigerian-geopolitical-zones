import zones from "../helpers/fetchZones";

/**
 * Function that returns an array containing only the names of the 6 geopolitical zones in Nigeria
 * @returns {Array<string>}
 */
function getZonesList(): string[] {
  const list: string[] = zones.map(item => item.zone);

  const uniqueList: Set<string> = new Set(list);
  
  return Array.from(uniqueList);
}

export default getZonesList;