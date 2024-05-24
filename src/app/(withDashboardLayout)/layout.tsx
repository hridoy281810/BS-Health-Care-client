"use client"
import DashboardSidebar from '@/components/dashboard/dashboarSidebar/DashboardSidebar';
import { isLoggedIn } from '@/services/actions/auth.service';
import { TChildrenProps } from '@/types';
import { useRouter } from 'next/navigation';
import React from 'react';

const DashboardLayout = ({children}:TChildrenProps) => {
  const router = useRouter()
  if(!isLoggedIn()){
    return router.push("/")
  }
  return (
   <DashboardSidebar>{children}</DashboardSidebar>
  );
};

export default DashboardLayout;