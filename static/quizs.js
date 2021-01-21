function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value;
    var q9=document.quiz.question9.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById("quiz");
    if (q1=="Hiddlstone") {c++}
    if (q2=="Hatiko") {c++}
    if (q3=="Shupalce") {c++}
    if (q4=="Fiona") {c++}
    if (q5=="Rahat") {c++}
    if (q6=="Million") {c++}
    if (q7=="Krush") {c++}
    if (q8=="Video") {c++}
    if (q9=="Tom") {c++}
    quiz.style.display="none";
    
    if (c<=5) {
    result.textContent='Вы ответили правильно на ' +c+' из 9. Не так уж и плохо. '
    }
    else {
    result.textContent='Вы ответили правильно на ' +c+' из 9. Отличный результат!. '
    }
    }