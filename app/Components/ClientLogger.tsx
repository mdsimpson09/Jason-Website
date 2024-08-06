'use client';

import { useEffect } from 'react';

const ClientLogger = () => {
  useEffect(() => {
    console.log("Client-side HTML:", document.documentElement.outerHTML);
  }, []);

  return null;
};

export default ClientLogger;