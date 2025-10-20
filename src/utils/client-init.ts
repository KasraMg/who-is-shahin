'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import { initFlowbite } from 'flowbite';

export default function ClientInit() {
  useEffect(() => {
    AOS.init();
    initFlowbite();
  }, []);

  return null;  
}