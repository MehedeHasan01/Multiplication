// DOM cenctor
const Input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const result = document.getElementById('result');
const namptaNumber = document.getElementById('number');





/*
// styem one, first click addBtn show result list and second click addBtn show rsult and remove the first result list


let firstClick = true;


// DOM add Event Listener
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (firstClick) {
        Nampta();
        firstClick = false;
    } else {
        removeOldResults();
        Nampta();
    }
});


// DOM fuction Create


// Create remove Old Results function
function removeOldResults() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}

// Create Main function and Calicotr function
function Nampta(){
    if(Input.value == ''|| Input.value < 1 ){
        alert('Please valued number')
    }else{
        let h1 = document.createElement('h2')
        h1.innerHTML = `
        Nampta ${Input.value}
        `
         result.appendChild(h1)
        for(let i =1; i <= 10; i++){

            let item = document.createElement('li');
            item.innerHTML=`
            ${Input.value} * ${i} = ${Input.value * i}

            `
            result.appendChild(item);

        }
    }
    Input.value = ''
}




*/

// styem Two, first Click  addBtn show result list and second click show result list top first result item;

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  Nampta();
});

function Nampta() {
  if (Input.value === '' || Number(Input.value) < 1) {
    alert('Please enter a valid number greater than or equal to 1');
  } else {
    let h2 = document.createElement('h2');
    h2.textContent = `Nampta ${Input.value}`;

    for (let i = 10; i >= 1; i--) {
      let item = document.createElement('li');
      item.textContent = `${Input.value} * ${i} = ${Input.value * i}`;
      result.insertBefore(item, result.firstChild); // Insert items at the beginning
    }

    result.insertBefore(h2, result.firstChild); // Insert the header at the beginning
  }

  Input.value = '';
}
