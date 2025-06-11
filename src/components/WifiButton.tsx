
import React from 'react';
import { Button } from '@/components/ui/button';
import { Wifi, Home, Coffee, Building } from 'lucide-react';

interface WifiButtonProps {
  title: string;
  icon: 'home' | 'coffee' | 'office';
  onClick: () => void;
  delay: string;
}

const icons = {
  home: Home,
  coffee: Coffee,
  office: Building,
};

const WifiButton: React.FC<WifiButtonProps> = ({ title, icon, onClick, delay }) => {
  const IconComponent = icons[icon];
  
  return (
    <Button
      onClick={onClick}
      className={`group relative w-full h-24 bg-white hover:bg-salmon/5 border-2 border-salmon/20 hover:border-salmon/40 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 animate-bounce-in`}
      style={{ animationDelay: delay }}
      variant="outline"
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-salmon/10 group-hover:bg-salmon/20 rounded-full flex items-center justify-center transition-colors">
          <IconComponent className="w-6 h-6 text-salmon" />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-lg font-semibold text-gray-800">{title}</span>
          <span className="text-sm text-gray-500 flex items-center">
            <Wifi className="w-4 h-4 mr-1" />
            Wi-Fi пароль
          </span>
        </div>
      </div>
      <div className="absolute inset-0 bg-salmon/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Button>
  );
};

export default WifiButton;
