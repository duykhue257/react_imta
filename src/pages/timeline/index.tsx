import React, { useEffect, useState } from 'react'
import { formatDistance, differenceInMilliseconds } from 'date-fns';


const TimeLine : React.FC = () => {

  const targetDate = new Date('2024-02-01T00:00:00'); // Ngày cần ddeesm
  const [countdown, setCountdown] = useState<string>('');
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const distance = differenceInMilliseconds(targetDate, now);

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      const formattedCountdown = `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
      setCountdown(formattedCountdown);

      if (now >= targetDate) {
        clearInterval(intervalId);
        setCountdown('Đếm ngược đã kết thúc!');
      }
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className="countdown-timer">
      <h1>{countdown}</h1>
      <div className="countdown-timer flex space-x-4">
      <div className="border p-4 text-center">
        <div className="text-4xl font-bold">{days}</div>
        <div className="text-sm">Ngày</div>
      </div>
      <div className="border p-4 text-center">
        <div className="text-4xl font-bold">{hours}</div>
        <div className="text-sm">Giờ</div>
      </div>
      <div className="border p-4 text-center">
        <div className="text-4xl font-bold">{minutes}</div>
        <div className="text-sm">Phút</div>
      </div>
      <div className="border p-4 text-center">
        <div className="text-4xl font-bold">{seconds}</div>
        <div className="text-sm">Giây</div>
      </div>
    </div>
    </div>
  );
}

export default TimeLine        

