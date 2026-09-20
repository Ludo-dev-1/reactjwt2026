import { Navigate, Route, Routes } from 'react-router';

import { LoginPage } from './auth/LoginPage';
import { TodosPage } from './todos/TodosPage';

export function App() {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
}
