import axios from 'axios';

//set up preconfigured instance of the axios client with default properties
export default axios.create({
   baseURL: 'https://api.unsplash.com',
   headers: {
      Authorization: 'Client-ID 2bc80e7e9d5635d68711dc8a5dfa8bb4411505837a209759a6c5a7124b2e822b',
   }
});