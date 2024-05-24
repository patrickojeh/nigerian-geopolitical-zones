import data from '../data/zones.json';
import { ZonesInterface } from '../shared/interfaces';

const dataToString: string = JSON.stringify(data);
const zones: ZonesInterface[] = JSON.parse(dataToString);

export default zones;