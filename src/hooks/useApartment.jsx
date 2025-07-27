 import { useEffect, useState } from "react";
 import { useLocation } from "react-router-dom";
 
 function useApartment() {
  const [flat, setFlat] = useState(null);
  const location = useLocation();

 useEffect(() =>{
  const abortConroller = new AbortController();
  fetch("db.json")
      .then((res) => res.json())
      .then((flats) => {
        // Correction: c'est "selectedFlat" ou "flat" ? ici flat dans find
        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
        setFlat(flat);
      })
      .catch(console.error);
  
     return () =>{
        abortConroller.abort() ; 
      };
  }, []);
  return flat;
 }

  export default useApartment;