import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";

interface ChartProps {
  token: string;
}

const Chart: React.FC<ChartProps> = ({ token }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!token) return; // Don't fetch if token is empty

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${token}/market_chart?vs_currency=usd&days=7`
        );
        const result = await response.json();

        const formattedData = result.prices.map((entry: any) => ({
          time: new Date(entry[0]).toLocaleDateString(),
          price: entry[1],
        }));

        setData(formattedData);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div className="chart-container">
      <h3 className="text-white text-lg mb-2">Price Chart ({token?.toUpperCase() || "N/A"})</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis 
          dataKey="time" 
          tick={{ fontSize: 12 }}
          tickCount={5}
          />
          <YAxis 
          domain={["auto", "auto"]} 
          tick={{ fontSize: 12 }}
          />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
