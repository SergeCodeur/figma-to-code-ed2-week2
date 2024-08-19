import { CustomError } from "@/types/error";
import { Recommendation } from "@/types/product";
import { fetchRecommandations } from "@/utils/fetch-recommandations";
import { useEffect, useState } from "react";

const useFetchRecommendations = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<CustomError>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRecommandations();
        setRecommendations(data);
      } catch (error) {
        setError(error instanceof Error ? error : new Error("Unknown error"));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { recommendations, loading, error };
};

export default useFetchRecommendations;
