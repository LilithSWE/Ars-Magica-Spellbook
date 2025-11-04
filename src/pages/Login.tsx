import { useNavigate } from "react-router-dom";
import { Button } from "../components/generic/Button";

export const Login = () => {
  const navigate = useNavigate();

  const handlePasswordPopup = () => {
    alert("Alas... this feature is not yet implemented.");
    // TODO Get popup for password entry -> navigate to /startPage on success
  };

  return (
    <section>
      <h1>Login</h1>
      <p>
        Why, hello there!
        <br></br> And who might you be?
      </p>
      <div className="buttonContainer">
        <Button onClick={handlePasswordPopup} bgColor="primary">
          <>Amanda</>
        </Button>
        <Button onClick={handlePasswordPopup} bgColor="secondary">
          <>Simen</>
        </Button>
        <Button onClick={() => navigate("/guest")} bgColor="tertiary">
          <>Guest</>
        </Button>
      </div>
    </section>
  );
};
