let min = 5, max = 30, five = 0, four = 0, three = 0, two = 0;
class student {
    constructor(names) {
        this.name = names[generateNumber(0,listNames.length -1)];
        this.progress = 5;
        this.marks = [];
        for (let i = 0; i < 5; i++) {
            this.marks.push(generateNumber(2,5));
            if(this.marks[i] < this.progress ) {
                this.progress = this.marks[i];
            }
        }
    }
}
function generateNumber(min,max){
    return (Math.random() * (max - min) + min).toFixed(0);
}
function createStudent(students,min, max){
    let stdAmount = generateNumber(min,max);
    for (let i = 0; i < stdAmount; i++) {
        let newStudent = new student(listNames);
        students.push(newStudent);
    }
}
let listNames = ["Иванов","Петров","Сидоров","Островский","Пушкин","Шевченко","Алекеев","Васильченко","Лещенко","Базарный","Белов","Чубач","Герасименко","Макаров","Щербаков","абрамов","Морозов","Тимуров"];
let listStudents = [];
function generateList(students){
    let html = ""; 
    createStudent(students,min,max);
    students.sort(function (a, b){ 
        return b.progress - a.progress;
    });
    for (let i = 0; i < students.length; i++) {
        html+="<p>" + students[i].name+ " ";
        for (let j = 0; j < 5; j++) {
            html+= students[i].marks[j] + "."
        };
            switch (+students[i].progress) {
            case 5: 
                ++five; break;
            case 4: 
                ++four; break;
            case 3: 
                ++three; break;
            case 2: 
                ++two; break;
                default: alert( 'd' ); break;
        }
        html+="</p>";
    }
    html+="<p>Отличники: "+five+" Хорошисты: "+four+" Средние: "+three+" Неуспивающие: "+two+"</p>";
    document.querySelector("#studentsList").innerHTML = html;
}
generateList(listStudents);



