// tutarial-option.html

function enableNextButton() {
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    const nextButton = document.getElementById('nextButton');
    if (option1.checked || option2.checked) {
        nextButton.classList.add('enabled');
        nextButton.disabled = false;
    } else {
        // nextButton.classList.remove('enabled');
        nextButton.disabled = true;
    }
}

var modal = document.getElementById("tutorialModal");
var confirmButton = document.getElementById("confirmButton");
var modal2 = document.getElementById("tutorialModal2");
var confirmButton2 = document.getElementById("confirmButton2");
confirmButton.onclick = function() {
    modal.style.display = "none";
    modal2.style.display = "block";
}
confirmButton2.onclick = function() {
    modal2.style.display = "none";
}

function highlightRow(selectedInput) {
    // پاک کردن هایلایت از تمام سطرها
    let rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
        row.classList.remove("highlighted");
    });
    // اضافه کردن هایلایت به سطر انتخاب شده
    selectedInput.closest("tr").classList.add("highlighted");
}


function saveData() {
    // دریافت داده‌ها از localStorage
    const resultsData_trial1 = JSON.parse(localStorage.getItem('resultsData_trial1'));
    
    // بررسی اینکه داده‌ها در localStorage موجود باشند
    if (!resultsData_trial1) {
        console.error('No data found in localStorage');
        return;
    }

    // Get form data
    const email = localStorage.getItem("emailInput")
    const phone = localStorage.getItem("phoneInput")
    const code  = localStorage.getItem("codeInput")

    const myRange1 = localStorage.getItem("myRange1")
    const myRange2 = localStorage.getItem("myRange2")
    // const faze1 = localStorage.getItem("faze1")

    

    // Get current date and time using moment.js
    var count = 1;
    // ایجاد یک شیء جدید که شامل اطلاعات فرم و داده‌های مورد نظر باشد
    const userData = resultsData_trial1.map(data => ({
        ...data,
        count:count++,
        email: email,
        phone: phone,
        code: code,
        myRange1:myRange1,
        myRange2:myRange2,
        // faze: faze1

    }));

    // Send data to PHP script
    fetch('save_data.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then(response => response.json()).then(data => {
        console.log('Data saved successfully!', data);
    }).catch(error => {
        console.error('Error saving data:', error);
    });
}
function saveData1() {
    // دریافت داده‌ها از localStorage
    const resultsData_trial2 = JSON.parse(localStorage.getItem('resultsData_trial2'));
    
    // بررسی اینکه داده‌ها در localStorage موجود باشند
    if (!resultsData_trial2) {
        console.error('No data found in localStorage');
        return;
    }

    // Get form data
    const email = localStorage.getItem("emailInput")
    const phone = localStorage.getItem("phoneInput")
    const code  = localStorage.getItem("codeInput")
1
    const myRange3 = localStorage.getItem("myRange3")
    const myRange4 = localStorage.getItem("myRange4")
    var count = 1;

    // Get current date and time using moment.js

    // ایجاد یک شیء جدید که شامل اطلاعات فرم و داده‌های مورد نظر باشد
    const userData = resultsData_trial2.map(data => ({
        ...data,
        count:count++,
        email: email,
        phone: phone,
        code: code,
        myRange3:myRange3,
        myRange4:myRange4,
    }));

    // Send data to PHP script
    fetch('save_data1.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then(response => response.json()).then(data => {
        console.log('Data saved successfully!', data);
    }).catch(error => {
        console.error('Error saving data:', error);
    });
}

function saveData3() {
    // دریافت داده‌ها از localStorage
    const resultsData_trial3 = JSON.parse(localStorage.getItem('resultsData_trial3'));
    
    // بررسی اینکه داده‌ها در localStorage موجود باشند
    if (!resultsData_trial3) {
        console.error('No data found in localStorage');
        return;
    }

    // Get form data
    const email = localStorage.getItem("emailInput")
    const phone = localStorage.getItem("phoneInput")
    const code  = localStorage.getItem("codeInput")
    const selectedOption2 = localStorage.getItem("selectedOption2")
    const selectedOption1 = localStorage.getItem("selectedOption1")
    const agency = localStorage.getItem("agency")

    var count = 1;

    // Get current date and time using moment.js

    // ایجاد یک شیء جدید که شامل اطلاعات فرم و داده‌های مورد نظر باشد
    const userData = resultsData_trial3.map(data => ({
        ...data,
        count:count++,
        email: email,
        phone: phone,
        code: code,
        selectedOption1:selectedOption1,
        selectedOption2:selectedOption2,
        // faze:'faze-3',
        agency:agency


    }));

    // Send data to PHP script
    fetch('save_data2.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then(response => response.json()).then(data => {
        console.log('Data saved successfully!', data);
    }).catch(error => {
        console.error('Error saving data:', error);
    });
}