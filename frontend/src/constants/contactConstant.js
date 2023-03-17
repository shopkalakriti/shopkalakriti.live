import React from 'react';
import { FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import { HiLocationMarker, HiMail } from 'react-icons/hi';

export const contactItems = [
  {
    id: 1,
    icon: <HiMail />,
    title: 'email',
    description: 'shop.kalakriti@outlook.com',
  },
  {
    id: 2,
    icon: <FaTwitterSquare />,
    title: 'twitter',
    description: 'shop.kalakriti',
  },
  {
    id: 3,
    icon: <FaInstagram />,
    title: 'instagram',
    description: 'shop.kalakriti',
  },
];
