// let number = 12
// const number2 = '13'
// alert(number2)
// let name = prompt('Enter your name')
// alert(name)
// let number = +prompt('Enter the number')
// if (number > 0) {
//     alert('Positive number')
// } else if(number == 0) {
//     alert('This is null')
// }else {
//     alert('Negative number')
// }


// let first_number = +prompt('Enter the first number')
// let second_number = +prompt('Enter the second number')
// let operation = prompt('Enter the operation')
// if(operation == '+') {
//     let result = first_number + second_number
//     alert(result)
// } else if (operation == '-') {
//     let result = first_number - second_number
//     alert(result)
// } else if (operation == '*') {
//     let result = first_number * second_number
//     alert(result)
// } else if (operation == '/') {
//     let result = first_number / second_number
//     alert(result)
// } else {
//     alert('Error')
// }


// let first_number = +prompt('Enter the first number')
// let second_number = +prompt('Enter the second number')
// let operation = prompt('Enter the operation')
// switch(operation) {
//     case '+':
//         result = first_number + second_number
//         break
//     case '-':
//         result = first_number - second_number
//         break  
//     case '*':
//         result = first_number + second_number
//         break 
//     case '/':
//         result = first_number / second_number
//         break  
//     default:
//         alert('Error')
// }
// alert(result)

// let number = 12
// let numbers = [12,23,45,'ytu',true,67,744,75,77,85]
// // alert(numbers[1])
// // alert(numbers.length)
// // alert(numbers[numbers.length - 1])
// numbers.push(34)
// alert(numbers)
// numbers.pop()
// alert(numbers)

// let group = ['Abdumalik','Sardor','Farux','Vsevolod']
// let student_name = prompt('Enter the student name')
// group.push(student_name)
// alert(group)
// alert(group[group.length - 1])

// for(i = 0;i < 10;i++){
//     alert('Hello World')
// }


// let object = {
//     name:'Abdumalik',
//     age:20,
// }


// let group = []
// let student_number = +prompt('Enter the student number')
// for(i=0;i<student_number;i++) {
//     let student_name = prompt('Enter the student name')
//     let student_surname = prompt('Enter the student surname')
//     group.push({
//         name:student_name,
//         surname:student_surname
//     })
// }
// console.log(group)

// function sum(a,b) {
//     let result = a + b
//     return result
// }


// alert(sum(10,12))
// let number = prompt('Enter the number')
// let number_versions = ['90','91','93','95','97','98','99','33','55','88','77','78','71']
// function uzbekCode(num) {
//     for(i = 0;i < number_versions.length; i++){
//         let code_part = num[4] + num[5]
//         if(code_part == number_versions[i]){
//             return true
//         }
//     }
// }

// function checkUzbNumber(uzb_num) {
//     let uzb_part = uzb_num[0] + uzb_num[1] + uzb_num[2] + uzb_num[3]
//     if(uzb_num.length == 13 && uzb_part == '+998' && uzbekCode(uzb_num) == true) {
//         alert(`+998 (${uzb_num[4] + uzb_num[5]}) ${uzb_num[6]+uzb_num[7]+uzb_num[8]}-${uzb_num[9]+uzb_num[10]}-${uzb_num[11]+uzb_num[12]}`)
//     } else {
//         alert('Something wrong')
//     }
// }
// checkUzbNumber(number)

let buttons = document.querySelectorAll('.keyboardBtn')
let keyboard = document.getElementById('keyboard')
console.log(keyboard)

for(let btn of buttons) {
    btn.onclick = function typing() {
        keyboard.textContent += btn.textContent
    }
}




