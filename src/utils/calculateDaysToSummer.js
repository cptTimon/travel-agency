export const calculateDaysToSummer = thisDay => {
  if((typeof thisDay !== 'object' && !(thisDay instanceof Date)) || !thisDay) {
    return null;
  }
  const yearOfThisDay = thisDay.getFullYear();
  const startOfSummer = new Date(yearOfThisDay,5,21);
  const endOfSummer = new Date(yearOfThisDay,8,23);

  if(typeof thisDay === 'object' && thisDay < startOfSummer){
    const miliseconds = startOfSummer.getTime() - thisDay.getTime();
    const days = Math.floor(miliseconds/(1000*60*60*24));

    if (days === 1){
      return days + ' day left to summer!';
    }
    return days + ' days left to summer!';

  } else if (typeof thisDay === 'object' && thisDay > endOfSummer) {
    const startOfSummerNextYear = new Date(yearOfThisDay+1,5,21);
    const miliseconds = startOfSummerNextYear.getTime() - thisDay.getTime();
    const days = Math.floor(miliseconds/(1000*60*60*24));
    return days + ' days left to summer!';
  }
  else if (typeof thisDay === 'object' && (thisDay >= startOfSummer && thisDay <= endOfSummer)){
    return null;
  }
  return null;
};
