import { useEffect, useState } from "react";
import axios from "axios";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  const apiURL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_X4TAfjCvFzixDTSa6gljHv4TGQ5rTwmztalkePFl";

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(apiURL);
        console.log(response.data);

        const rates = response.data.data;
        const date = response.data.meta.last_updated_at;
        
        setRatesData({
          state: "success",
          rates,
          date,
        });
      } catch (error) {
        setRatesData({
          state: "error",
          error: error.message,
        });
      }
    };

    fetchRates();
  }, []);

  return ratesData;
};