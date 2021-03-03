export const calculateDaysToSummer = thisDay => {
  if((typeof thisDay !== 'object' && !(thisDay instanceof Date)) || !thisDay) {
    console.log('pierwszy warunek');
    return null;
  }
  const yearOfThisDay = thisDay.getFullYear();
  const startOfSummer = new Date(yearOfThisDay,5,21);
  const endOfSummer = new Date(yearOfThisDay,8,23);

  if(typeof thisDay === 'object' && thisDay < startOfSummer){
    const miliseconds = startOfSummer.getTime() - thisDay.getTime();
    const days = Math.floor(miliseconds/(1000*60*60*24));
    if (days === 1){
      console.log(days + ' day left to summer!');
      return days + ' day left to summer!';
    }
    console.log(days + ' days left to summer!');
    return days + ' days left to summer!';
  } else if (typeof thisDay === 'object' && thisDay > endOfSummer) {
    const startOfSummerNextYear = new Date(yearOfThisDay+1,5,21);
    const miliseconds = startOfSummerNextYear.getTime() - thisDay.getTime();
    const days = Math.floor(miliseconds/(1000*60*60*24));
    console.log(days + ' days left to summer!');
    return days + ' days left to summer!';
  }
  else if (typeof thisDay === 'object' && (thisDay >= startOfSummer && thisDay <= endOfSummer)){
    console.log('Jest lato!');
    return null;
  }
  console.log('nie dziala');
  return null;
};
