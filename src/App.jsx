import { useState } from "react";
import "./App.css";
import CarInfo from "./components/CarInfo";
import { Navigation, Gauge } from "lucide-react";

const App = () => {
  const [systems, setSystems] = useState({
    autopilot: false,
    lights: true,
    climate: false,
  });

  const toggleSystems = (key) => {
    setSystems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-blue-100">
      <div className="min-h-screen bg-blue-200 text-violet-500 p-6 md:p-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <CarInfo label="Запас ходу" value={500} unit="км" icon={Navigation} className="text-amber-800!" />
          <CarInfo label="Швидкість" value={200} unit="км" icon={Gauge} className="text-amber-800" />
          <CarInfo label="Запас ходу" value={500} unit="км" icon={Navigation} className="text-amber-800!" />
          <CarInfo label="Запас ходу" value={500} unit="км" icon={Navigation} className="text-amber-800!" />
          <CarInfo label="Запас ходу" value={500} unit="км" icon={Navigation} className="text-amber-800!" />
        </div>
      </div>
    </div>
  );
}

export default App
