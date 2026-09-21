import axios from 'axios';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

httpClient.interceptors.request.use(
  function(config){
    console.log("je passe par l'interceptor", config);
    const token = localStorage.getItem(`token`);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function(error){
    return Promise.reject(error);
  }
)

httpClient.interceptors.response.use(
  function (response){
    console.log(response.data);
    return response;
  },
  function(error){
    const status = error.status;

    switch (status) {
      case 401:
        console.error("Identifiants incorrects ou token invalide. Veuillez réessayer.");
        break;

      case 403:
        console.error("Action interdite : vous n'avez pas les droits nécessaires.");
        break;

      default:
        console.error("Une erreur est survenue. Veuillez réessayer plus tard.");
        break;
    }
    return Promise.reject(error);
  }
)
