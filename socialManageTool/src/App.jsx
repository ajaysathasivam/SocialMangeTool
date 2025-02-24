import "./App.css";
import FacebookLogin from 'react-facebook-login';
function App() {
  const responseFacebook = (response) => {
    console.log(response);
  }
  return (
    <>
      <h1>Vite + React</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <FacebookLogin
        appId="589346337592039"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        
      />
    </>
  );
}

export default App;
