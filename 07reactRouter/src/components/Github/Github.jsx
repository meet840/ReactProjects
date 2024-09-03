import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

function Github() {
   const data = useLoaderData();
   // const [data, setData] = useState([]);

   // useEffect(() => {
   //    fetch("https://api.github.com/users/PatrickAlphaC")
   //       .then((response) => response.json())
   //       .then((data) => {
   //          console.log(data);
   //          setData(data);
   //       });
   // }, []);

   return (
      <div className="text-center m-5 bg-gray-500 text-white p-5 text-3xl">
         Github followers: {data?.followers}
         <img
            src={data?.avatar_url}
            alt="Git Picture"
            width={300}
            style={{ display: "block", margin: "0 auto" }}
         />
      </div>
   );
}

export default Github;

export const githubInfoLoader = async () => {
   const response = await fetch("https://api.github.com/users/PatrickAlphaC");
   return response.json();
};
