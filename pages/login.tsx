import { Hero } from "../components/Hero";
import { NextPage } from "next";
import { getCurrentProvider } from "../utils";
import { useRouter } from "next/router";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Login: NextPage = () => {
  const auth = getAuth();
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  const handleLogin = async (provider: string) => {
    await signInWithPopup(auth, getCurrentProvider(provider));
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (user) {
    router.push("/clases");
  }

  return (
    <>
      <Hero
        title="Inicia sesión para ver los cursos y talleres"
        image="student.svg"
      />
      <div className="container">
        <section className="login">
          <h2>Inicia sesión</h2>
          <p>
            Para poder disfrutar del contenido de los cursos y talleres, por
            favor logueate
          </p>
          <button
            className="login__button google"
            onClick={() => handleLogin("Google")}
          >
            <span className="icon icon-google"></span>
            <span>Continuar con Google</span>
          </button>
          <button
            className="login__button github"
            onClick={() => handleLogin("Github")}
          >
            <span className="icon icon-github"></span>
            <span>Continuar con Github</span>
          </button>
        </section>
      </div>
    </>
  );
};

export default Login;
