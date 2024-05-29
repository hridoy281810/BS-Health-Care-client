'use client'
import { useGetPaymentsQuery } from '@/redux/api/payment';
import React from 'react';

const PaymentHistoryPage = () => {
  const {data} = useGetPaymentsQuery({})
  console.log('data',data);
  
  return (
    <div>
      PaymentHistoryPage
    </div>
  );
};

export default PaymentHistoryPage;