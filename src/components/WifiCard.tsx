
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wifi, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface WifiCardProps {
  title: string;
  networkName: string;
  password: string;
  onClose: () => void;
}

const WifiCard: React.FC<WifiCardProps> = ({ title, networkName, password, onClose }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
      <Card className="w-full max-w-md mx-4 bg-white shadow-2xl animate-slide-up">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-16 h-16 bg-salmon/20 rounded-full flex items-center justify-center mb-4">
            <Wifi className="w-8 h-8 text-salmon" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-600">Название сети:</label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(networkName, 'network')}
                  className="h-8 w-8 p-0 hover:bg-salmon/20"
                >
                  {copiedField === 'network' ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-500" />
                  )}
                </Button>
              </div>
              <p className="text-lg font-mono text-gray-800 break-all">{networkName}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-600">Пароль:</label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(password, 'password')}
                  className="h-8 w-8 p-0 hover:bg-salmon/20"
                >
                  {copiedField === 'password' ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-500" />
                  )}
                </Button>
              </div>
              <p className="text-lg font-mono text-gray-800 break-all">{password}</p>
            </div>
          </div>
          
          <Button 
            onClick={onClose}
            className="w-full bg-salmon hover:bg-salmon/90 text-white font-medium py-3 rounded-lg transition-colors"
          >
            Закрыть
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WifiCard;
