
// export interface IDoctor {
//     statusCode: number
//     success: boolean
//     message: string
//     data: Data
//   }
export type TSchedule = {
  id:string
  startDate: string
  endDate: string
  updatedAt?: string | undefined;
  createdAt?: string | undefined;
}

  export interface IDoctor {
    id: string
    email: string
    name: string
    profilePhoto: string
    contactNumber: string
    address: string
    registrationNumber: string
    experience: number
    gender: "MALE" | "FEMALE"
    apointmentFee: number | undefined
    qualification: string
    currentWorkingPlace: string
    designation: string
    isDeleted: boolean
    createdAt: string
    updatedAt: string
    averageRating: number
    specialties?: ISpecialties[]
    data:IDoctor[]
    schedules:TSchedule[]
  }
  export interface ISpecialties {
    specialtiesId: string
    isDeleted?: boolean
  }
  export interface IDoctorFormData {
    doctor: IDoctor;
    password: string
  }

  export type TAllSpecialties = {
    icon:string,
    id:string,
    title:string
  } 