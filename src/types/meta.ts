interface ChartData {
    count: number;
    month?: string; 
    status?: string; 
  }
  
  interface Revenue {
    // amount: number | null
    _sum:{amount:number | null }
  }
  
  export interface IRoleBaseMetaData {
    appointmentCount: number;
    patientCount: number;
    doctorCount: number;
    paymentCount: number;
    reviewCount?: number;
    prescriptionCount?: number;
    totalRevenue: Revenue;
    barChartData: ChartData[];
    pieCharData: ChartData[];
    formattedAppointmentStatusDistribution: ChartData[];
    // Add more properties if needed
  }
  
  export type TMetaData = {
    meta: IRoleBaseMetaData
  }
  