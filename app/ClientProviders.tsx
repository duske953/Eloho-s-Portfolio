'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { toast } from 'react-toastify';

export const userSchema = object({
  email: string()
    .required('Please enter your email address')
    .email('Invalid email')
    .max(30, 'Email must be in the range of 20 characters'),
});

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  // This component can house logic that was previously in the Remix App component
  // but requires client-side context (hooks).
  
  return <>{children}</>;
}
