function timeConversion(s) {
  const regex = /^(\d{1,2}:\d{2}:\d{2})([APMapm]{2})$/;
  const timeString = s.match(regex);

  const hms = timeString[1].split(':');

  if (timeString[2] === 'PM') {
    hms[0] = hms[0] === '12' ? '12' : (12 + parseInt(hms[0], 10)).toString().padStart(2, '0');
  } else if (timeString[2] === 'AM') {
    hms[0] = hms[0] === '12' ? '00' : hms[0].padStart(2, '0');
  }

  return (`${hms[0]}:${hms[1]}:${hms[2]}`);
}