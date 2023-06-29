//Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).
{
	let subjectGrades = [2,4,5,3,4,4,3,3,2,3,4,3];

function getSumShade() {

	let sumShade = 0;

	for (let i = 0; i < subjectGrades.length; i++) {
		sumShade += subjectGrades[i];
	}
	return sumShade;
}
getSumShade()
console.log(getSumShade());

function calcSumAverage() {
	let arithmeticMean = getSumShade() / 10;
	return arithmeticMean;
}


calcSumAverage()

console.log(calcSumAverage());

function findAcademicPerformance() {
	for (let i = 0; i < subjectGrades.length; i++) {
		if (subjectGrades[i] === 2) {
			document.write('двоечник <br> <br>')
			break
		}else if(subjectGrades[i] === 3 ){
			document.write('хорошист <br><br>')
			break
		}else if(subjectGrades[i] === 4 || subjectGrades[i] === 5){
			document.write('відмінник <br><br>')
			break
		}
	}
}

findAcademicPerformance();
}




{
	/*
Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
номери днів, протягом яких кількість відвідувачів була меншою за 20;
номери днів, коли кількість відвідувачів була мінімальною;
номери днів, коли кількість відвідувачів була максимальною;
загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
 */

	let attendanceLog = [53,25,71,16,5,93,77];
	let minimumAttendanceDays = 0;
	attendanceLog.forEach(attendanceDay => {
	if (attendanceDay<20) {
		minimumAttendanceDays++
	}
});

document.write(` кількість днів з відвідуванням меньше 20 =${minimumAttendanceDays} <br> <br>`);

const min = attendanceLog => attendanceLog.reduce((x, y) => Math.min(x, y));
const max = attendanceLog => attendanceLog.reduce((x, y) => Math.max(x, y));


console.log("мінімальна кількість відвідувачів:", min(attendanceLog));
console.log("максимальна кількість відвідувачів:", max(attendanceLog));

let visitorsOnWeekdays =0;

for (let i = 0; i < 5; i++) {
	visitorsOnWeekdays+=attendanceLog[i];
}
console.log(`відвідумачів у робочі дні ${visitorsOnWeekdays} <br><br>`);

let visitorsWeekend = attendanceLog[5] + attendanceLog[6];

console.log(`відвідумачів у вихідні ${visitorsWeekend} <br> <br>`);

}

{
	//Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».

	let namesStudents =[ 'Женя', 'Коля', 'Дмитро', 'Іван','Катя', 'Ксюша','Іван',];

	let loserName = 0;
	namesStudents.forEach(nameStudent => {
		console.log(nameStudent);
	
		for (let i = 0; i < nameStudent.length; i++) {
		console.log(nameStudent[i]);

		if (nameStudent[i] === 'І') {
			loserName++
		}
		}
		
	});
	document.write(`учнів із іменем Іван ${loserName} у класі <br> <br><br>`)
}

{
/* 	Задача 4. Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
	•	починаються на букву «А»;
	•	перша і остання літери співпадають;
	•	складаються з більше ніш 5 символів; */

	let carNumbers = [ 'RN3456', 'RN345N', 'AS677467', 'GH21110', 'KJ44565', 'JF445',];

	let favoriteCars = 0;
	let smallNumber = 0;
	let strangeNumbers = 0;
	for (let i = 0; i < carNumbers.length; i++) {
		carNumbers.forEach(numberLatters => {
			if (numberLatters[i] === 'A') {
				favoriteCars++;
			}

			if(numberLatters[i] > 5){
				smallNumber++
			}

			if(numberLatters[0] === numberLatters[6] ){
				strangeNumbers++
			}
		});
	}
	document.write(`кількість номерів  автомобілів що  починаються на букву «А» ${favoriteCars}<br> <br><br>`)
	document.write(`кількість номерів що складаються з більше ніш 5 символів ${smallNumber}<br> <br><br>`)
	document.write(`кількість номерів де перша і остання літери співпадають;${strangeNumbers}<br> <br><br>`)
}