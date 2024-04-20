// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
// import { useState, useEffect } from "react";
// export default function GoogleAuth() {
//   const [name, setName] = useState("");
//   return (
//     <GoogleLogin
//       onSuccess={(credentialResponse) => {
//         const token = jwtDecode(credentialResponse.credential);
//         setName(token.given_name);
//         console.log(name);
//       }}
//       onError={() => {
//         console.log("Login Failed");
//       }}
//     />
//   );
// }

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

let globalName = "";

export const getGlobalName = () => {
  return globalName;
};

export default function GoogleAuth() {
  const [name, setName] = useState("");

  const handleSuccess = (credentialResponse) => {
    const token = jwtDecode(credentialResponse.credential);
    setName(token.given_name);
    globalName = token.given_name; // Set the globalName variable
    // Pass the name to the parent component
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
}
