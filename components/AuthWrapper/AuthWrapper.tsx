import { useSelector } from "react-redux";
import { RootState } from "../../store/modules";
import LoginPage from "../Login/Page/LoginPage";

interface Props {
  children: React.ReactNode;
}

const AuthWrapper: React.FC<Props> = ({ children }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return <LoginPage></LoginPage>;
  }
  return (
    <div
      style={{
        minHeight: "100vh",
        height: "100%",
        backgroundColor: "whitesmoke",
      }}
    >
      {children}
    </div>
  );
};

export default AuthWrapper;
