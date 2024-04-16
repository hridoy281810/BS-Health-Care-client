import DashboardSidebar from '@/components/dashboard/dashboarSidebar/DashboardSidebar';
import { TChildrenProps } from '@/types';
import React from 'react';

const DashboardLayout = ({children}:TChildrenProps) => {

  return (
   <DashboardSidebar>{children}</DashboardSidebar>
  );
};

export default DashboardLayout;