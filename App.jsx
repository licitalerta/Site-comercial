import { ClerkProvider, SignInButton, SignUpButton } from "@clerk/clerk-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <ClerkProvider publishableKey="pk_test_dW5jb21tb24tbW9zcXVpdG8tNTIuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <div className="hero text-white text-center">
        <h1>Licitalerta</h1>
        <p>Não perca mais nenhuma licitação pública</p>
        <SignUpButton><button className="btn btn-light">Criar Conta</button></SignUpButton>
        <SignInButton><button className="btn btn-outline-light mt-2">Entrar</button></SignInButton>
      </div>
    </ClerkProvider>
  );
}

export default App;