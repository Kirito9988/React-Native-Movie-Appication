import axios from 'axios';
import { apiKey, baseUrl } from './config';

export const tmdbService = async (queryType,param,queryParams = '',page = 1
) => {
  
  const url = `${baseUrl}/${queryType}/${param}?api_key=${apiKey}${
    queryParams ? '&query=' + queryParams : ''
  }&page=${page}`;
 
  const res = await axios.get(url).catch(console.log);
  return res;
};
