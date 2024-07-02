// داده‌های اصلی
var option_trial_Data = [
    { id: 1 , Option1_PPT: 100 ,  Option1_Partner: 100  ,  Type1: "Prosocial",   Option2_PPT: 120  ,  Option2_Partner: 70   , Type2: "Individual" },
    { id: 2 , Option1_PPT: 100 ,  Option1_Partner: 90   ,  Type1: "Prosocial",   Option2_PPT: 120  ,  Option2_Partner: 50   , Type2: "Individual" },
    { id: 3 , Option1_PPT: 70  ,  Option1_Partner: 70   ,  Type1: "Prosocial",   Option2_PPT: 90   ,  Option2_Partner: 40   , Type2: "Individual" },
    { id: 4 , Option1_PPT: 90  ,  Option1_Partner: 90   ,  Type1: "Prosocial",   Option2_PPT: 90   ,  Option2_Partner: 50   , Type2: "Individual" },
    { id: 5 , Option1_PPT: 100 ,  Option1_Partner: 90   ,  Type1: "Prosocial",   Option2_PPT: 90   ,  Option2_Partner: 40   , Type2: "Individual" },
];

var currentIndex = 0;
var selectedOption = null;
var resultsData_trial3 = [];

// تابع برای شروع آزمایش
function startTrial() {
    shuffleArray(option_trial_Data);
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
var totalCount = 5; // Total number of trials
var currentCount = totalCount;
// تابع برای نمایش گزینه‌های بعدی
function showNextOptions() {
    if (currentIndex >= option_trial_Data.length) {
        localStorage.setItem('resultsData_trial3', JSON.stringify(resultsData_trial3));
        window.location.href = "agency.html";
        return;
    }

    var currentOption = option_trial_Data[currentIndex];
    var tableBody = document.querySelector("#optionsTable_trial1 tbody");
    tableBody.innerHTML = "";

    // تصمیم‌گیری تصادفی برای نمایش Option1 یا Option2 در ردیف اول
    var showOption1First = Math.random() < 0.5;

    var row1 = createOptionRow(currentOption, showOption1First ? 1 : 2);
    var row2 = createOptionRow(currentOption, showOption1First ? 2 : 1);

    tableBody.innerHTML = row1 + row2;

    selectedOption = null;
    document.getElementById("confirmButton_trial1").disabled = true;
    lastSelectionTime = getCurrentTimeMillis();
    document.getElementById("count-display2").textContent = currentCount;

}

// تابع برای ایجاد یک ردیف گزینه
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
function selectRow(row, optionNumber) {
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
        row.classList.remove('highlighted');
    });

    // اضافه کردن استایل انتخاب شده به ردیف جاری
    const selectedRow = radio.closest('tr');
    selectedRow.classList.add('highlighted');
}
dataType = localStorage.getItem('dataType');

// تابع برای تأیید انتخاب
function confirmSelection() {
    if (!selectedOption) return;
    currentCount--;
    document.getElementById("count-display2").textContent = currentCount;
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
    var currentOption = option_trial_Data[currentIndex];
    var answerType = selectedOption === 'Option1' ? currentOption.Type1 : currentOption.Type2;

    console.log(`انتخاب شده: ${selectedOption}`);
    console.log(`نوع انتخاب شده: ${answerType}`);

    // ذخیره داده‌ها
    resultsData_trial3.push({
        id: currentOption.id,
        Option1_PPT: currentOption.Option1_PPT,
        Option1_Partner: currentOption.Option1_Partner,
        Option2_PPT: currentOption.Option2_PPT,
        Option2_Partner: currentOption.Option2_Partner,
        Type1: currentOption.Type1,
        Type2: currentOption.Type2,
        Display: "Play",
        answer: selectedOption,
        difference1: Math.abs(currentOption.Option1_PPT - currentOption.Option1_Partner),
        difference2: Math.abs(currentOption.Option2_PPT - currentOption.Option2_Partner),
        dataType: dataType,
        correctType: '',
        isCorrect: '',
        answer_type: answerType,
        responseTime: responseTime / 1000,
        totalResponseTime: totalResponseTime / 1000,
        averageResponseTime: averageResponseTime / 1000
    });

    currentIndex++;
    showNextOptions();
}

// تابع برای بر هم زدن ترتیب آرایه
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// شروع آزمایش وقتی صفحه بارگذاری می‌شود
window.onload = startTrial;
