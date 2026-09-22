
import { ReactNode} from "react";
import {Navigate} from "react-router";
import { isAuthenticated} from "./auth.service";


type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({
                                         children,
                                       }: ProtectedRouteProps) {
  return isAuthenticated() ? children : <Navigate to="/" />;
}

