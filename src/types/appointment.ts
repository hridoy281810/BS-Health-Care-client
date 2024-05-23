export interface Doctor {
    address: string;
    appointmentFee: number;
    averageRating: number;
    contactNumber: string;
    createdAt: string;
    currentWorkingPlace: string;
    designation: string;
    email: string;
    experience: number;
    gender: string;
    id: string;
    isDeleted: boolean;
    name: string;
    profilePhoto: string;
    qualification: string;
    registrationNumber: string;
    updatedAt: string;
}

export interface Patient {
    address: string;
    contactNumber: string;
    createdAt: string;
    email: string;
    id: string;
    isDeleted: boolean;
    name: string;
    profilePhoto: string | null;
    updatedAt: string;
}

export interface IAppointmentData {
    appointmentId: string;
    comment: string;
    createdAt: string;
    doctor: Doctor;
    doctorId: string;
    id: string;
    patient: Patient;
    patientId: string;
    rating: number;
    updatedAt: string;
    data?: IAppointmentData
}