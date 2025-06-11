
import React, { useState } from 'react';
import WifiButton from '@/components/WifiButton';
import WifiCard from '@/components/WifiCard';

interface WifiData {
  title: string;
  networkName: string;
  password: string;
  icon: 'home' | 'coffee' | 'office';
}

const wifiData: WifiData[] = [
  {
    title: 'Основной корпус',
    networkName: 'WiFi',
    password: 'Password',
    icon: 'home'
  },
  {
    title: 'Ресторан',
    networkName: 'Cafe_Guest_Network',
    password: 'CoffeeLovers2024!',
    icon: 'coffee'
  },
  {
    title: 'Апартаменты',
    networkName: 'Office_Secure_WiFi',
    password: 'WorkSecure2024#',
    icon: 'office'
  }
];

const Index = () => {
  const [selectedWifi, setSelectedWifi] = useState<WifiData | null>(null);

  const handleWifiClick = (wifi: WifiData) => {
    setSelectedWifi(wifi);
  };

  const handleCloseCard = () => {
    setSelectedWifi(null);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(245, 151, 148)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Звёздный
            </h1>
            <p className="text-white/90 text-lg">
              Выберите сеть для просмотра пароля
            </p>
          </div>

          {/* WiFi Buttons */}
          <div className="space-y-6">
            {wifiData.map((wifi, index) => (
              <WifiButton
                key={wifi.title}
                title={wifi.title}
                icon={wifi.icon}
                onClick={() => handleWifiClick(wifi)}
                delay={`${index * 0.2}s`}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-white/70 text-sm">
              Нажмите на карточку, чтобы скопировать данные
            </p>
          </div>
        </div>
      </div>

      {/* WiFi Card Modal */}
      {selectedWifi && (
        <WifiCard
          title={selectedWifi.title}
          networkName={selectedWifi.networkName}
          password={selectedWifi.password}
          onClose={handleCloseCard}
        />
      )}
    </div>
  );
};

export default Index;
