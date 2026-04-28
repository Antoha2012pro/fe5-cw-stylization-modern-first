import { cn } from "../utils/cn"
import { motion } from "framer-motion";

const CarInfo = ({ label, value, unit, icon: Icon, className }) => {
    return (
        <div className="bg-indigo-600 p-5 rounded-2xl border border-blue-900 relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
                <div className={cn(
                    "p-2 rounded-lg bg-opacity-10",
                )}>
                    <Icon size={20} className={cn(
                        className,
                        "text-blue-100",
                    )} />
                </div>
                <span className="text-[10px] text-gray-200 font-bold uppercase">
                    {label}
                </span>
            </div>
            <div className="flex items-baseline gap-1">
                <motion.span className="text-3xl text-blue-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
                    {value}
                </motion.span>
                <span className="text-sm text-gray-200">
                    {unit}
                </span>
            </div>
            <motion.div className={cn(
                "absolute bottom-0 left-0 h-1 bg-amber-600",
                className,
            )} initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 6, ease: [.64,.1,.38,1.23] }} />
        </div>
    )
}

export default CarInfo
