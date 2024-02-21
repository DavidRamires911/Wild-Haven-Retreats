import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
    //1.
  const numBookings = bookings.length;

    //2.
    const sales= bookings.reduce((acc, cur) => {
        return acc + cur.totalPrice + cur.extraPrice;
    }, 0);

    //3. 
    const checkins= confirmedStays.length;

    //4.
   const occupation= confirmedStays.reduce((acc, cur) => 
    acc + cur.numNights , 0 )/(numDays * cabinCount) * 100;
    // num checked in nights/all availabel nights(num days * num cabins)

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        value={numBookings}
        icon={<HiOutlineBriefcase />}
      />
      <Stat
        title="Sales"
        color="green"
        value={formatCurrency(sales)}
        icon={<HiOutlineBanknotes />}
      />
      <Stat
        title="Check-ins"
        color="indigo"
        value={checkins}
        icon={<HiOutlineCalendarDays />}
      />

      <Stat
        title="Occupancy rate"
        color="yellow"
        value={Math.round(occupation)+"%"}
        icon={<HiOutlineChartBar/>}
      />
    </>
  );
}

export default Stats;
