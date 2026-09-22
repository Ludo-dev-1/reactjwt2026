import {httpClient} from "../api/http-client";

export async function login(username:string, password: string) {
  const response = await httpClient.post("/auth/login", { username, password })
  localStorage.setItem("token", response.data.token)
  return response;
}

export async function logoutFunction(token: string ) {
  return localStorage.removeItem(`${token}`);
}

export function getRoles(token: string) {
  // Séparer le token par les points et récupérer le payload avec l'index 1
  const payload = token.split(".")[1];
  // Décoder le payload Base64 puis le convertir en objet JavaScript
  const data = JSON.parse(atob(payload));
  // Découper la chaîne des scopes en un tableau
  const authorities = data.scope.split(" ");
  // Ne conserver que les scopes correspondant à des rôles
  return authorities.filter((authority: string) => authority.startsWith("ROLE_"))
}


export function hasRole(role: string): boolean {
  // Récupère le token stocké dans le localStorage
  const token = localStorage.getItem("token");
 // Si aucun token n'est présent, l'utilisateur n'est pas connecté
  if (!token) {
    return false;
  }
  // Extrait la liste des rôles contenus dans le token grâce à GetRoles
  const roles = getRoles(token);
  console.log("roles :", roles);
  // Vérifie si le rôle demandé est présent dans la liste des rôles
  return roles.includes(role);
}
