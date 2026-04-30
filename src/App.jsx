import { useEffect, useState } from "react";
import "./App.css";
import CarInfo from "./components/CarInfo";
import { Navigation, Gauge, Battery } from "lucide-react";
import SystemToggle from "./components/SystemToggle";

const App = () => {
  const [systems, setSystems] = useState({
    autopilot: true,
    lights: true,
    climate: false,
  });

  const [range, setRange] = useState(500);
  const [speed, setSpeed] = useState(200);
  const [battery, setBattery] = useState(51);

  useEffect(() => {
    const interval = setInterval(() => {
      if (systems.autopilot) {
        setSpeed(prev => Math.min(prev + 5, 300))
        setRange(prev => Math.max(prev - 0.5, 0))
        setBattery(prev => Math.max(prev - 0.1, 0))
      } else {
        setSpeed(prev => Math.max(prev - 8, 0))
      }
    }, 500)

    return () => clearInterval(interval)
  }, [systems.autopilot])

  const toggleSystems = (key) => {
    setSystems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-blue-100">
      <div className="min-h-screen bg-blue-200 text-violet-500 p-6 md:p-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <CarInfo label="Запас ходу" value={range.toFixed(0)} unit="км" icon={Navigation} className="text-white" />
          <CarInfo label="Швидкість" value={speed} unit="км/г" icon={Gauge} className="text-white" />
          <CarInfo label="Заряд" value={battery.toFixed(1)} unit="%" icon={Battery} className="text-white" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2>Car Systems</h2>
            <SystemToggle name="Autopilot" active={systems.autopilot} onToggle={() => toggleSystems("autopilot")} />
            <SystemToggle name="Climate-control" active={systems.climate} onToggle={() => toggleSystems("climate")} />
            <SystemToggle name="Lights" active={systems.lights} onToggle={() => toggleSystems("lights")} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
