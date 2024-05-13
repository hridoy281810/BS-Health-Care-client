
export type TSchedule = {
    id:string
    startDate: string
    endDate: string
    updatedAt?: string | undefined;
    createdAt?: string | undefined;
  }
  
export type TScheduleForm = {
    id:string
    startDate: string
    endDate: string
    startTime: string
    endTime: string
  }

  export type TDoctorSchedule = {
    schedules: TSchedule[]
  }
