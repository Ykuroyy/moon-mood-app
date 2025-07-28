export const getMoonPhase = (date = new Date()) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  const c = Math.floor(365.25 * year);
  const e = Math.floor(30.6 * month);
  const jd = c + e + day - 694039.09;
  const moonPhase = jd / 29.5305882;
  const phase = moonPhase - Math.floor(moonPhase);
  
  if (phase < 0.03 || phase > 0.97) {
    return { phase: 'new', name: '新月', emoji: '🌑', percentage: 0 };
  } else if (phase < 0.22) {
    return { phase: 'waxing-crescent', name: '上弦の三日月', emoji: '🌒', percentage: 25 };
  } else if (phase < 0.28) {
    return { phase: 'first-quarter', name: '上弦の月', emoji: '🌓', percentage: 50 };
  } else if (phase < 0.47) {
    return { phase: 'waxing-gibbous', name: '満ちていく月', emoji: '🌔', percentage: 75 };
  } else if (phase < 0.53) {
    return { phase: 'full', name: '満月', emoji: '🌕', percentage: 100 };
  } else if (phase < 0.72) {
    return { phase: 'waning-gibbous', name: '欠けていく月', emoji: '🌖', percentage: 75 };
  } else if (phase < 0.78) {
    return { phase: 'last-quarter', name: '下弦の月', emoji: '🌗', percentage: 50 };
  } else {
    return { phase: 'waning-crescent', name: '下弦の三日月', emoji: '🌘', percentage: 25 };
  }
};