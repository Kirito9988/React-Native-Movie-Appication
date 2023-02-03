import axios from 'axios';
import { apiKey, baseUrl } from './config';

export const tmdbService = async (queryType,param,queryParams = '',
) => {
  
  const url = `${baseUrl}/${queryType}/${param}?api_key=${apiKey}${
    queryParams ? '&query=' + queryParams : ''
  }`;
 
  const res = await axios.get(url).catch(console.log);
  return res;
};
