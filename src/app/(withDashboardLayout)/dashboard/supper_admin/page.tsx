'use client'
import { useGetALlMetaQuery } from '@/redux/api/userApi';
import React from 'react';

const SupperAdminPage = () => {
  const {data:metaData } = useGetALlMetaQuery({})
  console.log(metaData,'metaData');
  return (
    <div>
      SupperAdminPage
    </div>
  );
};

export default SupperAdminPage;