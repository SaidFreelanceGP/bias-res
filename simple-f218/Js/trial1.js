





var option_trial_Data = [
    { id: 1,  Option1_PPT:   80 ,   Option1_Partner: 70   ,  Type1:    "Prosocial",   Option2_PPT:  100  ,    Option2_Partner:  80  ,  Type2:   "Individual" },
    { id: 2,  Option1_PPT:   70 ,   Option1_Partner: 60   ,  Type1:    "Prosocial",   Option2_PPT:   90  ,    Option2_Partner:  70  ,  Type2:   "Individual" },
    { id: 3,  Option1_PPT:   80,    Option1_Partner: 80   ,  Type1:    "Prosocial",   Option2_PPT:   90  ,    Option2_Partner:  60  ,  Type2:   "Individual" },
    { id: 4,  Option1_PPT:   90,    Option1_Partner: 80   ,  Type1:    "Prosocial",   Option2_PPT:  100  ,    Option2_Partner:  70  ,  Type2:   "Individual" },
    { id: 5,  Option1_PPT:   100,   Option1_Partner: 90   ,  Type1:    "Prosocial",   Option2_PPT:  110  ,    Option2_Partner:  80  ,  Type2:   "Individual" },
    { id: 6,  Option1_PPT:   100,   Option1_Partner: 100  ,  Type1:    "Prosocial",   Option2_PPT:  120  ,    Option2_Partner:  100 ,  Type2:   "Individual" },
    { id: 7,  Option1_PPT:   60,    Option1_Partner: 50   ,  Type1:    "Prosocial",   Option2_PPT:   80  ,    Option2_Partner:  50  ,  Type2:   "Individual" },
    { id: 8,  Option1_PPT:   80,    Option1_Partner: 70   ,  Type1:    "Prosocial",   Option2_PPT:   90  ,    Option2_Partner:  60  ,  Type2:   "Individual" },
    { id: 9,  Option1_PPT:   90,    Option1_Partner: 80   ,  Type1:    "Prosocial",   Option2_PPT:  100  ,    Option2_Partner:  70  ,  Type2:   "Individual" },
    { id: 10, Option1_PPT:  100 ,  Option1_Partner: 90   ,  Type1:    "Prosocial",   Option2_PPT:  110  ,    Option2_Partner:  80  ,  Type2:   "Individual" },
    { id: 11, Option1_PPT:  90 ,   Option1_Partner: 90   ,  Type1:    "Prosocial",   Option2_PPT:  100  ,    Option2_Partner:  80  ,  Type2:   "Individual" },
    { id: 12, Option1_PPT:  110 ,  Option1_Partner: 100  ,  Type1:    "Prosocial",   Option2_PPT:  120  ,    Option2_Partner:  90  ,  Type2:   "Individual" },
    { id: 13, Option1_PPT:  70,    Option1_Partner: 60   ,  Type1:    "Prosocial",   Option2_PPT:   80  ,    Option2_Partner:  50  ,  Type2:   "Individual" },
    { id: 14, Option1_PPT:  80 ,   Option1_Partner: 70   ,  Type1:    "Prosocial",   Option2_PPT:   90  ,    Option2_Partner:  60  ,  Type2:   "Individual" },
    { id: 15, Option1_PPT:  90,    Option1_Partner: 80   ,  Type1:    "Prosocial",   Option2_PPT:  100  ,    Option2_Partner:  70  ,  Type2:   "Individual" },
    { id: 16, Option1_PPT:  70,    Option1_Partner: 70   ,  Type1:    "Prosocial",   Option2_PPT:   90  ,    Option2_Partner:  60  ,  Type2:   "Individual" },
    { id: 17, Option1_PPT:  100,   Option1_Partner: 90   ,  Type1:    "Prosocial",   Option2_PPT:  110  ,    Option2_Partner:  80  ,  Type2:   "Individual" },
    { id: 18, Option1_PPT:  100 ,  Option1_Partner: 100  ,  Type1:    "Prosocial",   Option2_PPT:  110  ,    Option2_Partner:  80  ,  Type2:   "Individual" },

];


var currentIndex = 0;
var selectedOption = null;
var dataType;
var dataTypeSet = false;
var selectedOptions = [];

function getRandomPair() {
    if (!dataTypeSet) {
        dataType = Math.random() < 0.5 ? 'individual' : 'Prosocial';
        localStorage.setItem('dataType', dataType);
        dataTypeSet = true;
    } else {
        dataType = localStorage.getItem('dataType');
    }
    console.log("Data Type:", dataType);
}

function selectOptions() {
    let primaryType = dataType.charAt(0).toUpperCase() + dataType.slice(1);
    let secondaryType = primaryType === 'Individual' ? 'Prosocial' : 'Individual';

    let primaryOptions = option_trial_Data.filter(item => 
        item.Type1 === primaryType || item.Type2 === primaryType
    );
    let secondaryOptions = option_trial_Data.filter(item => 
        item.Type1 === secondaryType || item.Type2 === secondaryType
    );

    shuffleArray(primaryOptions);
    shuffleArray(secondaryOptions);

    let selectedPrimaryOptions = [];
    let selectedSecondaryOptions = [];
    let usedIds = new Set();

    // انتخاب گزینه‌های اصلی بدون تکرار
    for (let item of primaryOptions) {
        if (!usedIds.has(item.id) && selectedPrimaryOptions.length < 11) {
            selectedPrimaryOptions.push({
                ...item,
                correctType: primaryType
            });
            usedIds.add(item.id);
        }
    }

    // انتخاب گزینه‌های ثانویه بدون تکرار
    for (let item of secondaryOptions) {
        if (!usedIds.has(item.id) && selectedSecondaryOptions.length <7) {
            selectedSecondaryOptions.push({
                ...item,
                correctType: secondaryType
            });
            usedIds.add(item.id);
        }
    }

    selectedOptions = [...selectedPrimaryOptions, ...selectedSecondaryOptions];
    shuffleArray(selectedOptions);

    console.log("Selected Options:", selectedOptions);
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function startTrial() {
    getRandomPair();
    selectOptions();
    showNextOptions();
}

// تغییر تابع getCurrentTimeString برای برگرداندن زمان به میلی‌ثانیه
function getCurrentTimeMillis() {
    return new Date().getTime();
}

var lastSelectionTime = getCurrentTimeMillis();
var responseTime = 0;
var totalResponseTime = 0;
var averageResponseTime = 0;
var totalCount = 18; // Total number of trials
var currentCount = totalCount;
function showNextOptions() {
    if (currentIndex >= selectedOptions.length) {
        console.log("آزمایش به پایان رسید.");
        localStorage.setItem('resultsData_trial1', JSON.stringify(resultsData_trial1));
        window.location.href = "sur-1.html";
        return;
    }

    var currentOption = selectedOptions[currentIndex];
    var tableBody = document.querySelector("#optionsTable_trial1 tbody");
    tableBody.innerHTML = "";

    var showOption1First = Math.random() < 0.5;

    var row1 = createOptionRow(currentOption, showOption1First ? 1 : 2);
    var row2 = createOptionRow(currentOption, showOption1First ? 2 : 1);

    tableBody.innerHTML = row1 + row2;

    selectedOption = null;
    document.getElementById("confirmButton_trial1").disabled = true;
    document.getElementById("count-display").textContent = currentCount;

    // ریست کردن زمان برای انتخاب جدید
    lastSelectionTime = getCurrentTimeMillis();
}

function createOptionRow(option, optionNumber) {
    return `
        <tr id="row${option.id}-Option${optionNumber}" class="option-row" onclick="selectRow(this, ${optionNumber})">
            <td class="radio-cell">
                <input style="    cursor: pointer;" type="radio" name="option" value="Option${optionNumber}" data-type="${option['Type' + optionNumber]}">
            </td>
            <td>${option['Option' + optionNumber + '_PPT']}</td>
            <td>${option['Option' + optionNumber + '_Partner']}</td>
        </tr>
    `;
}
var selectionEnabled = true;
function selectRow(row, optionNumber) {
    if (!selectionEnabled) return; // اگر انتخاب غیرفعال باشد، تابع هیچ کاری انجام نمی‌دهد
    
    // ابتدا همه ردیف‌ها را از حالت انتخاب خارج می‌کنیم
    document.querySelectorAll('.option-row').forEach(r => r.classList.remove('selected'));
    
    // ردیف کلیک شده را انتخاب می‌کنیم
    row.classList.add('selected');
    
    // دکمه رادیویی مربوطه را علامت می‌زنیم
    let radio = row.querySelector('input[type="radio"]');
    radio.checked = true;
    
    // فراخوانی تابع handleOptionChange
    handleOptionChange(radio);
}
function handleOptionChange(radio) {
    selectedOption = radio.value;
    document.getElementById("confirmButton_trial1").disabled = false;

    // حذف استایل انتخاب شده از تمام ردیف‌ها
    const rows = document.querySelectorAll("#optionsTable_trial1 tr");
    rows.forEach(row => {
        row.classList.remove('selected');
    });

    // اضافه کردن استایل انتخاب شده به ردیف جاری
    const selectedRow = radio.closest('tr');
    selectedRow.classList.add('selected');
}

// function handleOptionChange(radio) {
//     selectedOption = radio.value;
//     document.getElementById("confirmButton_trial1").disabled = false;
// }
var resultsData_trial1 = [];



window.onload = startTrial;

function confirmSelection() {
    if (!selectedOption) return;

    selectionEnabled = false; // غیرفعال کردن انتخاب

    // محاسبه زمان پاسخ
    var currentTime = getCurrentTimeMillis();
    responseTime = currentTime - lastSelectionTime;
    
    // اضافه کردن به کل زمان پاسخ
    totalResponseTime += responseTime;
    
    // محاسبه میانگین زمان پاسخ
    averageResponseTime = totalResponseTime / (currentIndex + 1);

    console.log(`زمان پاسخ: ${responseTime} میلی‌ثانیه`);
    console.log(`کل زمان پاسخ: ${totalResponseTime} میلی‌ثانیه`);
    console.log(`میانگین زمان پاسخ: ${averageResponseTime.toFixed(2)} میلی‌ثانیه`);

    var currentOption = selectedOptions[currentIndex];
    var selectedType = document.querySelector(`input[name="option"]:checked`).getAttribute('data-type');
    var correctType = currentOption.correctType;

    console.log(`انتخاب شده: ${selectedOption}`);
    console.log(`نوع انتخاب شده: ${selectedType}`);
    console.log(`نوع صحیح: ${correctType}`);
    console.log(`آیا انتخاب صحیح است: ${selectedType === correctType}`);

    // ذخیره داده‌ها با اضافه کردن زمان پاسخ
    resultsData_trial1.push({
        id: currentOption.id,
        Option1_PPT: currentOption.Option1_PPT,
        Option1_Partner: currentOption.Option1_Partner,
        Option2_PPT: currentOption.Option2_PPT,
        Option2_Partner: currentOption.Option2_Partner,
        Type1: currentOption.Type1,
        Type2: currentOption.Type2,
        Display: "guess",
        answer: selectedOption,
        answer_type: selectedType,
        difference1: Math.abs(currentOption.Option1_PPT - currentOption.Option1_Partner),
        difference2: Math.abs(currentOption.Option2_PPT - currentOption.Option2_Partner),
        dataType: dataType,
        correctType: correctType,
        responseTime: responseTime / 1000,
        totalResponseTime: totalResponseTime / 1000,
        averageResponseTime: averageResponseTime / 1000
    });

    console.log(resultsData_trial1);

    // تغییر رنگ سطرها بر اساس انتخاب
    var rowId1 = `row${currentOption.id}-Option1`;
    var rowId2 = `row${currentOption.id}-Option2`;

    document.getElementById(rowId1).classList.remove('correct', 'incorrect');
    document.getElementById(rowId2).classList.remove('correct', 'incorrect');

    if (selectedOption === 'Option1') {
        document.getElementById(rowId1).classList.add(selectedType === correctType ? 'correct' : 'incorrect');
        document.getElementById(rowId2).classList.add(selectedType !== correctType ? 'correct' : 'incorrect');
    } else {
        document.getElementById(rowId2).classList.add(selectedType === correctType ? 'correct' : 'incorrect');
        document.getElementById(rowId1).classList.add(selectedType !== correctType ? 'correct' : 'incorrect');
    }

    document.getElementById("confirmButton_trial1").disabled = true;

    // تاخیر 2 ثانیه‌ای قبل از نمایش گزینه بعدی
    setTimeout(function() {
        currentIndex++;
        showNextOptions();
        document.getElementById("confirmButton_trial1").disabled = false;
        selectionEnabled = true; // فعال کردن مجدد انتخاب
            currentCount--;
    document.getElementById("count-display").textContent = currentCount;
    }, 2000);
}