export function getNextSevenDays(): string[] {
  const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const next7Days = [];
  for (let i = 0; i < 7; i++) {
    next7Days.push(days[new Date(Date.now() + (i + 0) * 24 * 60 * 60 * 1000).getDay()]);
  }
  return next7Days;
}



;

export function getNextSevenDate(): number[] {
  const data = []

  for (let i = 0; i < 7; i++) {
    data.push(new Date(new Date().setDate(new Date().getDate() + i)).getDate())
  }
  return data

}

export function getNextSevenMonth(): string[] {
  const mouth = ['Января', 'Феварля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноябаря', 'Декабря'];
  const next7Montn = [];
  for (let i = 0; i < 7; i++) {

    if ((new Date(new Date().setDate(new Date().getDate() + i)).getDate()) === 1) {}
    next7Montn.push(mouth[new Date(Date.now() + (i + 0) * 24 * 60 * 60 * 1000).getMonth()]);
  }
  return next7Montn;
}








