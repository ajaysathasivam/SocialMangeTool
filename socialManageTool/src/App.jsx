import Button from "./components/button"
import React from 'react';
import AccountsProfile from "./components/loginProfile";
// import FacebookLogin from 'react-facebook-login';

const App = (props) => {
  // const handleFacebookCallback = (response) => {
  //   if (response?.status === "unknown") {
  //       console.error('Sorry!', 'Something went wrong with facebook Login.');
  //    return;
  //   }
  //   console.log(response);
  //     // console will print following object for you.
       
  //  }

  return (
    // <FacebookLogin 
    //   buttonStyle={{padding:"6px"}}  
    //   appId="1320716502478119"  // we need to get this from facebook developer console by setting the app.
    //   autoLoad={false}  
      
    //   callback={handleFacebookCallback}/>
    <>
    <Button/>
    <AccountsProfile/>
    </>
  );
};





// import "./App.css";
// import FacebookLogin from 'react-facebook-login';
// function App() {
//   const responseFacebook = (response) => {
//     console.log(response);
//   }
//   const publishPost = async (accessToken) => {
//     try {
//       const response = await fetch(
//         `https://graph.facebook.com/v18.0/589346337592039/feed`,
//         {
//           message: "Hello, this is an automated post from React!",
//           access_token: accessToken,
//         }
//       );
//       console.log("Post ID:", response.data.id);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <>
//       <h1>Vite + React</h1>

//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <FacebookLogin
//         appId="544872944619572"
//         autoLoad={true}
        
//         callback={responseFacebook}
//         cssClass="my-facebook-button-class"
        
//       />
//     </>
//   );
// }

export default App;
