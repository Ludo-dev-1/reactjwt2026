
import { ReactNode} from "react";
import {Navigate} from "react-router";
import {hasRole} from "./auth.service";


type RoleRouteProps = {
  role: string[];
  children: ReactNode;
};


export default function RoleRoute({
                                    children,
                                    role,
                                  }: RoleRouteProps) {

  const authorized = Array.isArray(role)
                ? role.some(r => hasRole(r))
                : hasRole(role);

  return authorized ? children : <Navigate to="/" />;
}

