import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

export const getCurrentProvider = (provider: string) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  switch (provider) {
    case "Google":
      return googleProvider;
    case "Github":
      return githubProvider;
    default:
      return googleProvider;
  }
};
