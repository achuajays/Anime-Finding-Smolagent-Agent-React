
import React from "react";

interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const StatCard = ({ value, label, icon, className = "", style }: StatCardProps) => {
  return (
    <div className={`stat-card ${className}`} style={style}>
      {icon && (
        <div className="flex justify-end">
          <div className="bg-white/20 p-2 rounded-full">{icon}</div>
        </div>
      )}
      <div className="text-2xl sm:text-3xl font-bold">{value}</div>
      <div className="text-sm text-slate-300">{label}</div>
    </div>
  );
};

export default StatCard;
