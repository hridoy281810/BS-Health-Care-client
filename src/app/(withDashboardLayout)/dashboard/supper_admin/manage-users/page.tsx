import { useGetALlMetaQuery } from '@/redux/api/userApi';
import React from 'react';

const ManageUsersPage = () => {
  const {data:metaData } = useGetALlMetaQuery({})
console.log(metaData,'metaData');

  return (
    <div>
      ManageUsersPage
    </div>
  );
};

export default ManageUsersPage;