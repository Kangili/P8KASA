import { useState, useEffect } from "react";

 const useApartments = () =>{
   const [apartments, setApartments] = useState([]);
   useEffect(() => {
     const abortConroller = new AbortController();
     fetch("/db.json", {signal : abortConroller.signal})
       .then((res) => res.json())
       .then((res) => setApartments(res))
       .catch(console.error);

      return () => {
        console.log ("cleanup");
        abortConroller.abort();
      };
    }, []);
    return apartments;
 }

 export default useApartments;