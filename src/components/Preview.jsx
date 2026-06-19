import {useSelector} from 'react-redux';
import PreviewRow from './PreviewRow';

export default function Preview() {
  const bookings = useSelector((state) => state.bookings.bookings);

  return (
    <div className="table-container">
      <table className="booking-table">
        <thead className="bg-gray-100/50">
          <tr className="text-black text-left">
            <th>Destination From</th>
            <th>Destination To</th>
            <th className="text-center">Journey Date</th>
            <th className="text-center">Guests</th>
            <th className="text-center">Class</th>
            <th className="text-center">Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
          {bookings.map((booking) => (
            <PreviewRow key={booking.id} booking={booking} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
