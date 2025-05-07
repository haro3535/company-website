"use client";

import { useEffect, useState } from "react";
import mqtt from "mqtt";

export default function Dashboard() {
  const [client, setClient] = useState<any>(null);
  const [measurementObjectList, setMeasurementObjectList] = useState<any[]>([]);
  const [selectedMeasurement, setSelectedMeasurement] = useState<any>(null);
  const [cropData, setCropData] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [isSentToAI, setisSentToAI] = useState(false);

  useEffect(() => {
    const connectUrl = "wss://a6faa28a33914e9bba541e6ec9da0741.s1.eu.hivemq.cloud:8884/mqtt";

    const mqttClient = mqtt.connect(connectUrl, {
      username: "boztepe",
      password: "Deneme123",
      clean: true,
      reconnectPeriod: 1000,
      connectTimeout: 30 * 1000,
    });

    mqttClient.on("connect", () => {
      console.log("Connected to MQTT broker");
      mqttClient.subscribe("#", (err: any) => {
        if (err) {
          console.error("Failed to subscribe:", err);
        } else {
          console.log("Subscribed to all topics");
        }
      });
    });

    mqttClient.on("message", (topic: string, message: Buffer) => {
      if (topic === "esp32/measurements") {
        try {
          const jsonData = JSON.parse(message.toString());
          console.log("Received JSON:", jsonData);

          const measurementObject = {
            nitrogen: jsonData.nitrogen ,
            phosphorus: jsonData.phosphorus ,
            potassium: jsonData.potassium ,
            temperature: jsonData.temperature,
            ec: jsonData.ec,
            ph: jsonData.ph ,
            humidity: jsonData.humidity,
          };

          setMeasurementObjectList((prevList) => [...prevList, measurementObject]);
          setLoading(false);
        } catch (err) {
          console.error("Invalid JSON from esp32:", err);
        }
      }
      if (topic === "graid/measurement") {
        try {
          const data = JSON.parse(message.toString());
          setCropData(data);
          console.log("Received crop data:", data);
        } catch (err) {
          console.error("Invalid crop JSON:", err);
        }
      }
    });

    setClient(mqttClient);

    return () => {
      if (mqttClient) {
        mqttClient.end();
      }
    };
  }, []);

  const handleMeasureClick = () => {
    if (!client) return;
    setLoading(true);
    client.publish("esp32/command", "getMeasurements");
    //client.publish("esp32/command", "getMockData");
  };

  const MeasurementListItem = ({ measurement, onSelect }: { measurement: any; onSelect: () => void }) => (
    <div className="w-full py-2 px-3 cursor-pointer hover:bg-[#313131]">
      <h3 className="text-lg font-bold">{measurement.name}</h3>
      <button
        onClick={onSelect}
        className="mt-2 py-1 px-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        View Details
      </button>
    </div>
  );

  const items = [
    { name: "pH", value: "Value 1" },
    { name: "NPK", value: "Value 2" },
    { name: "Temp & Humidity", value: "Value 3" },
    { name: "Ec", value: "Value 4" },
  ];

  return (
    <div className="w-full flex flex-col py-8 px-8 md:py-10 md:px-15">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p className="text-lg">Welcome to the Dashboard!</p>

      <div className="w-full md:w-1/2 min-h-[25vh] flex justify-between bg-[#212121] rounded-lg shadow-md p-6 mt-6">
        <div className="w-full md:w-1/3 mb-4">
          <label htmlFor="select-box" className="block text-sm font-medium">
            Select a Hex Command
          </label>
          <select
            id="select-box"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option className="bg-black" value="" disabled>
              -- Select an Option --
            </option>
            {items.map((item, index) => (
              <option className="bg-black" key={index} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>

          <button type="button" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Submit
          </button>
        </div>

        <div className="w-full md:w-1/2 px-4 pb-2 mb-2">
          <h2>Response</h2>
          <div className="h-full border border-gray-300 rounded-md shadow-sm"></div>
        </div>
      </div>

      <div className="w-full flex justify-between mt-6 min-h-[30vh]">
        <div className="w-full md:w-1/3 bg-[#212121] p-3 mb-4 rounded-lg shadow-md">
          <div className="w-full flex justify-between mb-4 pb-3 border-b-1 border-gray-300">
            <button
              type="button"
              onClick={handleMeasureClick}
              className="py-2 px-3 border-2 rounded-md font-bold cursor-pointer hover:bg-white hover:text-black"
            >
              {loading ? "Measuring..." : "Measure"}
            </button>
            <button
              type="button"
              onClick={() => {
                setMeasurementObjectList([]);
                setSelectedMeasurement(null);
                setCropData({});
                setisSentToAI(false);
              }}
              className="py-2 px-4 border-2 border-red-600 text-red-600 rounded-md font-bold cursor-pointer hover:bg-red-600 hover:text-white"
            >
              Clear
            </button>
          </div>

          <div className="w-full min-h-[25vh] overflow-y-auto">
            {measurementObjectList.length > 0 ? (
              measurementObjectList.map((measurement, index) => (
                <MeasurementListItem
                  key={index}
                  measurement={measurement}
                  onSelect={() => setSelectedMeasurement(measurement)}
                />
              ))
            ) : (
              <p className="text-sm text-gray-400">No measurements available</p>
            )}
          </div>
        </div>

        <div className="w-full md:w-5/8 bg-[#212121] p-3 mb-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Measurement Details</h2>
          <div className="mt-4">
            {selectedMeasurement ? (
              <div>
                <p className="text-sm">Name: {}</p>
                <p className="text-sm">Nitrogen: {selectedMeasurement.nitrogen}</p>
                <p className="text-sm">Phosphorus: {selectedMeasurement.phosphorus}</p>
                <p className="text-sm">Potassium: {selectedMeasurement.potassium}</p>
                <p className="text-sm">Temperature: {selectedMeasurement.temperature}</p>
                <p className="text-sm">EC: {selectedMeasurement.ec}</p>
                <p className="text-sm">pH: {selectedMeasurement.ph}</p>
                <p className="text-sm">Humidity: {selectedMeasurement.humidity}</p>
              </div>
            ) : (
              <p className="text-sm text-gray-400">Select a measurement to view details</p>
            )}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-[#212121] p-3 mb-4 rounded-lg shadow-md">
          <div className="w-full flex justify-between mb-4 pb-3 border-b-1 border-gray-300">
          <button
            type="button"
            onClick={() => {
              if (client && measurementObjectList.length > 0) {
                const payload = JSON.stringify({ measurements: measurementObjectList });
                client.publish("graid/getMeasurements", payload);
                setisSentToAI(true);
              }
            }}
            className="py-2 px-4 border-2 border-green-600 text-green-600 rounded-md font-bold cursor-pointer hover:bg-green-600 hover:text-white"
          >
            Send To AI
          </button>

          </div>

          <div className="w-full min-h-[25vh] overflow-y-auto">
            {isSentToAI && Object.keys(cropData).length > 0 && (
              <div className="mt-4 p-3 bg-[#1a1a1a] border border-gray-600 rounded-md">
                <h3 className="text-lg font-bold mb-2">Suggested Crops & Percentages</h3>
                {Object.entries(cropData).map(([crop, percentage], idx) => (
                  <p key={idx} className="text-sm">
                    🌱 {crop}: <span className="text-green-400">{percentage}</span>
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
    </div>

  );
}
