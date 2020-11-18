import { UrlObject } from 'url';
import config from '../config';

function getUrlWithParamsConfig(endpointConfig: string, query: object): UrlObject {
  return {
    ...config.client.server,
    // @ts-ignore
    ...config.client.endpoint[endpointConfig].uri,
    query,
  };
}
export default getUrlWithParamsConfig;
