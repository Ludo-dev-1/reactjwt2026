import { type SubmitEvent, useState } from 'react';
import { useNavigate } from 'react-router';
import { login} from "./auth.service";

export function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('bastien@example.com');
  const [password, setPassword] = useState('tacostacos');

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    login(username, password).then(() => {
      navigate('/todos');
    }).catch(error => {
      console.error(error);
    })

  }

  return (
    <>
      <h2>Sign in</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Email: </span>
          <input
            type="email"
            autoComplete="username"
            placeholder="email@example.com"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </label>

        <label>
          <span>Password: </span>
          <input
            type="password"
            autoComplete="current-password"
            placeholder="**********"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>

        <button type="submit">Send</button>
      </form>
    </>
  );
}
