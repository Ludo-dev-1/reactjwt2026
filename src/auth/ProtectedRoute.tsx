
import { ReactNode} from "react";
import {Navigate} from "react-router";


type ProtectedRouteProps = {
  children: ReactNode;
};

const token = localStorage.getItem('token');

export default function ProtectedRoute({
                                         children,
                                       }: ProtectedRouteProps) {
  return token ? children : <Navigate to="/" />;
}

