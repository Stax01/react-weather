

export const dirToStr = (d: number) => {
  const directions = [
    'cеверный ', 'cеверо-восточный', 'восточный', 'южно-восточный', 'южный', 'южно-западный', 'западный', 'cеверо-западный'
  ];
  d = d < 0 ?
    d = 360 - Math.abs(d) % 360
    : d % 360;
  return `${directions[d / 45 | 0]}`;
}




