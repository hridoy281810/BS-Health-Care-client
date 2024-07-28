
import { CalendarClock, ClipboardMinus, DollarSign, MessageSquareCode, Stethoscope, Users} from "lucide-react";
 export type TMetaDataProps = {
appointmentCount?:number 
prescriptionCount?:number 
reviewCount?:number 
 }
const TotalCountForPatient = ({appointmentCount,prescriptionCount,reviewCount}:TMetaDataProps) => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
    <div className="flex bg-gradient-to-r from-blue-500 to-indigo-500 text-white md:px-8 md:py-10 rounded items-center gap-4">
      <p className="md:text-7xl bg-blue-400 p-2 rounded bg-opacity-20">
      <CalendarClock size={48} />
      </p>
      <div>
        <p className="md:text-5xl font-semibold">{appointmentCount! | 0}</p>
        <p className="text-2xl mt-3">Total Appointments</p>
      </div>
    </div>

    <div className="flex bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-6 rounded items-center gap-4">
      <p className="text-7xl bg-green-400 p-2 rounded bg-opacity-20">
      <ClipboardMinus  size={48}/>
      </p>
      <div>
        <p className="text-5xl font-semibold">{prescriptionCount! | 0}</p>
        <p className="text-2xl mt-3">Total Prescriptions</p>
      </div>
    </div>

    <div className="flex bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-6 rounded items-center gap-4">
      <p className="text-7xl bg-purple-400 p-2 rounded bg-opacity-20">
      <MessageSquareCode size={48} />
      </p>
      <div>
        <p className="text-5xl font-semibold">{reviewCount!| 0}</p>
        <p className="text-2xl mt-3">Total Reviews</p>
      </div>
    </div>
  </div>
  );
};
export default TotalCountForPatient;