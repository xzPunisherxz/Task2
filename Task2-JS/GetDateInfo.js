// Задача 2. Вывод информации о дате
// Необходимо разработать функцию getDayInfo(date),
//  которая возвращает информацию о выбранной дате.
// Результатом функции должен быть форматированный текст:
// <день недели>, <номер недели> неделя <месяц> <год> года
// Пример:
// getDayInfo(“01.01.2022”) // => Суббота, 1 неделя Января 2022 года
// getDayInfo(“15.12.2021”) // => Среда, 3 неделя Декабря 2021 года
// Ограничения:
// •	Запрещено использовать сторонние библиотеки
function getDateInfo(date) {
    function getNumberWeek(date) {

  let date1 = new Date(date);
  date1.setDate(1);
 let firstDay = date1.getDay();

 
return firstDay
}
    let days = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота"
    ];
    let months = [
        " ",
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря"
    ]
    let date2 = new Date(date);
    let year = date2.getFullYear();
    let month = date2.getMonth() + 1;
    let dayMonth = date2.getDate();
    let dayWeek = date2.getDay();
    
    let weekOfNumber = Math.ceil((dayMonth + getNumberWeek(date) -1) / 7);

    document.write(days[dayWeek] + ", " + weekOfNumber + " неделя " + months[month] + " " + year + " года ")
}
getDateInfo("03.04.2021")