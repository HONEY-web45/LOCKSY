import { useAuth0 } from "@auth0/auth0-react";

const AuthGuard = ({ children }) => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
     <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-red-500"></div>
  </div>
    );
  }

  return children;
};

export default AuthGuard;
