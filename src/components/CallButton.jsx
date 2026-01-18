'use client';

import React from 'react'; 
import { Phone } from 'lucide-react';

const CallButton = ({ phoneNumber }) => {
  const callUrl = `tel:${phoneNumber}`;
  return (
    <a
      href={callUrl}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hidden"
      aria-label="Appeler maintenant"
    >
      <Phone className="w-7 h-7 text-white" />
    </a>
  );
};

export default CallButton;