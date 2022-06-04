export const FormatMoney = (currentMoney) => {
  let money = currentMoney;
  let stringMoney = "";

  while (money > 0) {
    const modeMoney = money % 1000;
    money = Math.floor(money / 1000);
    modeMoney === 0
      ? (stringMoney = "." + "000" + stringMoney)
      : (stringMoney = "." + modeMoney + stringMoney);
  }

  stringMoney = stringMoney.slice(1, stringMoney.length);
  if(stringMoney === '') return '0'
  return stringMoney;
};

export const FormatBirthday = (day, month, year) => {
  let birthday = "";

  day < 10 ? (birthday = birthday + "0" + day) : (birthday = birthday + day);
  month < 9
    ? (birthday = birthday + "0" + (month + 1))
    : (birthday = birthday + (month + 1));
  birthday = birthday + year;
  
  return birthday;
};

export const FormatStringToBirthday = (string) => {
  const day = string.slice(0,2)
  const month = string.slice(2,4)
  const year = string.slice(4,8)

  return day + '/' + month + '/' + year
}