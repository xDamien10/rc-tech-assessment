import { useEffect, useState, useCallback } from "react";
import { Hero } from "./components/hero-list-items";
import { callApi } from "./call-api";

export default function useFetchHeroes(){

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [heroes, setHeroes] = useState<Hero[]>([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try{
      const data = await callApi("heroes") as Hero[];
      setHeroes(data);
    }
    catch(err:any){
      setError(err);
    }
    finally{
      setIsLoading(false)
    }

  }, []);


  useEffect(() => {    
     fetchData();
  }, [fetchData]);
  
  return {heroes, setHeroes, isLoading, error}

}