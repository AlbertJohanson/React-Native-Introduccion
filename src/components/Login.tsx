import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string | null;
  name: string | null;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: null,
  name: null,
};

type LoginPayload = {
    username: string;
    name: string;
}

type AuthAction = 
  |{type: "logout" }
  |{type: "login", payload: LoginPayload}


const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        username: null,
        name: null,
      };
    case "login":
        const {name, username} = action.payload;
        return {
            validando: false,
            token: 'ABC123',
            name,
            username,
        }

    default:
        return state;
  }
};

export const Login = () => {
  const [{validando, token, username}, dispatch] = useReducer(authReducer, initialState);
  

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);


  const login = () => {
    setTimeout(() => {
        dispatch({
            type: "login",
            payload: {
              name: 'Albert',
              username: '@Johanson_AJ',
            },
          });
      }, 1500);
  }

  const logout = () => {
      dispatch({ type: "logout" });
  }

  if (validando) {
    return <div className="alert alert-info">validando....</div>;
  }

  return (
    <>
      <h1>Login</h1>
      {
          (token) 
          ? <div className="alert alert-success">Autenticado como {username}</div>
          :<div className="alert alert-danger">No autenticado</div>
      }

      {
        (token) 
        ?<button className="btn btn-danger" onClick={logout}>logout</button>
        :<button className="btn btn-success" onClick={login}>login</button>
      }
    </>
  );
};
