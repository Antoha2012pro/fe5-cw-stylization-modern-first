import React from 'react';
import { cn } from '../utils/cn';
import { motion } from "framer-motion";

const SystemToggle = ({ name, active, onToggle }) => {
  return (
    <button onClick={onToggle} className={cn("flex items-center justify-between w-full p-4 rounded-xl border transition-all",
      active ? "bg-blue-600/10 border-blue-500 text-blue-500" : "bg-zinc-900 border-zinc-800 text-zinc-500"
    )}>
      <span className='font-medium'>{name}</span>
      <div className={cn("w-10 h-5 rounded-full relative transition-colors",
        active ? "bg-blue-500" : "bg-zinc-700"
      )}>
        <motion.div animate={{ x: active ? 22 : 2 }} className='absolute top-1 left-0 w-3 h-3 bg-white rounded-full shadow-lg' />
      </div>
    </button>
  );
}

export default SystemToggle;
