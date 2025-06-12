import React, { useState } from 'react';
import WifiButton from '@/components/WifiButton';
import WifiCard from '@/components/WifiCard';
import { FaVk } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";


interface WifiData {
  title: string;
  networkName: string;
  password: string;
  icon: 'home' | 'coffee' | 'office';
}

const wifiData: WifiData[] = [
  {
    title: 'Основной корпус',
    networkName: 'ZA_POVODOM',
    password: 'qwerty123456',
    icon: 'home'
  },
  {
    title: 'Белый Корпус',
    networkName: 'Mfzksk',
    password: 'kskzv2023s',
    icon: 'home'
  },
  {
    title: 'Берёзки',
    networkName: 'Apart1',
    password: 'berezki2025',
    icon: 'home'
  }
];

const socialLinks = [
  {
    label: 'Вконтакте',
    url: 'https://vk.com/restoran_zapovodom',
    Icon: FaVk,
  },
  {
    label: 'Телеграм',
    url: 'https://t.me/zvezdniycomplex',
    Icon: FaTelegramPlane,
  },
  {
    label: 'Телеграм Bot',
    url: 'https://t.me/stars_hotel_bot',
    Icon: FaTelegramPlane,
  },
  {
    label: 'Запись на СПА',
    url: 'https://widget.sonline.su/ru/services/13277408/?placeid=164608873',
    Icon: BsFillGeoAltFill,
  }
];

const Index = () => {
  const [selectedWifi, setSelectedWifi] = useState<WifiData | null>(null);
  const [showWifiMenu, setShowWifiMenu] = useState(false);

  const handleWifiClick = (wifi: WifiData) => {
    setSelectedWifi(wifi);
  };

  const handleCloseCard = () => {
    setSelectedWifi(null);
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
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
              Добро пожаловать! Выберите действие ниже.
            </p>
          </div>

          {/* Main Buttons */}
          <div className="flex flex-col gap-4 mb-10">
            {socialLinks.map(({ label, url, Icon }) => (
              <button
                key={label}
                onClick={() => handleSocialClick(url)}
                className="w-full py-3 px-6 rounded-lg bg-white/90 hover:bg-white text-pink-700 font-semibold shadow flex items-center justify-center transition"
              >
                <Icon className='mr-5'/>
                {label}
              </button>
            ))}
            <button
              onClick={() => setShowWifiMenu(true)}
              className="w-full py-3 px-6 rounded-lg bg-white/90 hover:bg-white text-pink-700 font-semibold shadow flex items-center justify-center transition"
            >
              <FaWifi className='mr-5'/>
              Wi-Fi
            </button>
          </div>

          {/* WiFi Menu */}
          {showWifiMenu && (
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
              <button
                onClick={() => setShowWifiMenu(false)}
                className="w-full py-2 px-4 rounded-lg bg-pink-700 text-white font-semibold mt-4 shadow hover:bg-pink-800 transition"
              >
                Назад
              </button>
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-white/70 text-sm">
              {showWifiMenu
                ? 'Нажмите на карточку, чтобы скопировать данные'
                : 'Выберите действие выше'}
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
