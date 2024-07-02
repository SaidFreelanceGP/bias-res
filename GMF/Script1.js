const form1 = document.getElementById('myForm');
form1.addEventListener('submit', (event) => {
    event.preventDefault();
    // انتقال به یک صفحه دیگر
    window.location.href = 'index-1.html';
});

function saveData() {
    // Get form data
    const email = document.getElementById('emailInput').value;
    const phone = document.getElementById('phoneInput').value;

    // Get current date and time using moment.js
    const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');

    // Create data object
    const userData = {
        email: email,
        phone: phone,
        dateTime: currentDateTime,
        // add other form fields as needed
    };
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

    // Get form data
    const range2 = document.getElementById('myRange').value;
    const invertedRange2 = range2 * -1;

    localStorage.setItem('pos', 0); // تبدیل به عدد و در صورتی که نیاز باشد، مقدار پیش‌فرض 0
    localStorage.setItem('neg', 0); // تبدیل به عدد و در صورتی که نیاز باشد، مقدار پیش‌فرض 0
    localStorage.setItem('userdata', 0);

    let group = 0;
    if (invertedRange2 > 0) {
        group = "+";
    } else if (invertedRange2 < 0) {
        group = "-";
    } else {
        group = localStorage.getItem('status');
    }


    const userData = {
        myRange: invertedRange2,
        group1: group
        // add other form fields as needed
    };
    localStorage.setItem('group22', group); // تبدیل به عدد و در صورتی که نیاز باشد، مقدار پیش‌فرض 0

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

function getCurrentTimeString1() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    hour = (hour < 10 ? "0" : "") + hour;
    minute = (minute < 10 ? "0" : "") + minute;
    second = (second < 10 ? "0" : "") + second;
    let timeString = hour + ":" + minute + ":" + second;
    return timeString;
}

function getMillisecondsFromTimeString(timeString) {
    // timeString در فرمت "HH:MM:SS"
    const [hour, minute, second] = timeString.split(":");
    const date = new Date();
    date.setHours(parseInt(hour), parseInt(minute), parseInt(second), 0);
    return date.getTime();
}

// تعریف تابع کمکی برای جایگزینی مقدار خالی با صفر
function ensureNotEmpty(value) {
    return value !== undefined && value !== null && value !== '' ? value : 0;
}
// New
function saveData13(){

    // در هر صفحه که می‌خواهید از زمان استفاده کنید
    let storedTime = localStorage.getItem('currentTime');
    var now = getCurrentTimeString1();

    let currentTimeInMilliseconds = getMillisecondsFromTimeString(now);
    let storedTimeInMilliseconds = getMillisecondsFromTimeString(storedTime);

    // محاسبه اختلاف میلی‌ثانیه‌ها
    let timeDifferenceInMilliseconds = currentTimeInMilliseconds - storedTimeInMilliseconds;
    // تبدیل اختلاف به دقیقه
    let timeStr = Math.floor(timeDifferenceInMilliseconds / (1000));
    localStorage.setItem('timeStr12', timeStr); // تبدیل به عدد و در صورتی که نیاز باشد، مقدار پیش‌فرض 0

    console.log(timeStr)
    // let sta = localStorage.getItem('lastClick2');
    // let pos = parseInt(localStorage.getItem('pos')) || 0 ; // تبدیل به عدد و در صورتی که نیاز باشد، مقدار پیش‌فرض 0
    // let neg = parseInt(localStorage.getItem('neg')) || 0; // تبدیل به عدد و در صورتی که نیاز باشد، مقدار پیش‌فرض 0
    let sta = parseInt(localStorage.getItem(' uniqueData.length'))

    if(sta === 0 ) {
        const userData5 = {
            duration:timeStr,
            duration1:0,
            pos: 0,
            neg: 0,
            dataPageId:0,
            linkId1: 0,
            duration2: 0,
            length:0,
            totalPos: 0,
            totalNeg:0,
            lastclick: 0
    
            // add other form fields as needed
        };
        console.log(userData5)

        // localStorage.setItem('concatenatedString',concatenatedString); // تبدیل به عدد و در صورتی که نیاز باشد، مقدار پیش‌فرض 0
        // localStorage.setItem('concatenatedDataIds', result2); // تبدیل به عدد و در صورتی که نیاز باشد، مقدار پیش‌فرض 0
    
    
        // Send data to PHP script
        fetch('server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData5)
        }).then(response => response.json()).then(data => {
            console.log('Data saved successfully!', data);
        }).catch(error => {
            console.error('Error saving data:', error);
        });
    }
}
function saveData3() {
    window.location.href = 'survey.html';

    // در هر صفحه که می‌خواهید از زمان استفاده کنید
    let storedTime = localStorage.getItem('currentTime');
    var now = getCurrentTimeString1();

    let currentTimeInMilliseconds = getMillisecondsFromTimeString(now);
    let storedTimeInMilliseconds = getMillisecondsFromTimeString(storedTime);

    // محاسبه اختلاف میلی‌ثانیه‌ها
    let timeDifferenceInMilliseconds = currentTimeInMilliseconds - storedTimeInMilliseconds;
    // تبدیل اختلاف به دقیقه
    let timeStr = Math.floor(timeDifferenceInMilliseconds / (1000));
    // timeStr -= 10;

    // let userdataArray5 = localStorage.getItem('userdata4');
    let pos = parseInt(localStorage.getItem('pos')) || 0; // تبدیل به عدد و در صورتی که نیاز باشد، مقدار پیش‌فرض 0
    let neg = parseInt(localStorage.getItem('neg')) || 0; // تبدیل به عدد و در صورتی که نیاز باشد، مقدار پیش‌فرض 0
    let timeStr1 = timeStr - (pos + neg);
    // برگرداندن ردیف با بیشترین تایم
    let maxDurationRow = findMaxDurationRow();
    const inputArray = JSON.parse(localStorage.getItem('userdata')) || [];
    const concatenatedDataIds = inputArray.map((item) => item.dataPageId).join('-');
    const aggregatedData = {};
    const pageStatus = {}; // شی برای نگهداری وضعیت صفحات

    inputArray.forEach((item) => {
        const dataPageId = item.dataPageId;
        const duration = item.duration;

        if (!aggregatedData[dataPageId]) {
            aggregatedData[dataPageId] = {
                dataPageId,
                duration
            };
        } else {
            aggregatedData[dataPageId].duration += duration;
        }

        // بررسی وضعیت صفحه و افزودن مقدار صفر
        if (!pageStatus[dataPageId]) {
            pageStatus[dataPageId] = 0;
        }
    });

    // افزودن صفحات با مقدار صفر به نتیجه نهایی
    Object.keys(pageStatus).forEach((pageId) => {
        if (!aggregatedData[pageId]) {
            aggregatedData[pageId] = {
                dataPageId: pageId,
                duration: 0
            };
        }
    });

    // تبدیل شی به آرایه
    const resultArray = Object.values(aggregatedData);
    const vweitimeData = {};

    resultArray.forEach((item) => {
        const dataPageId = item.dataPageId;
        const duration = item.duration;

        vweitimeData[`vweitime${dataPageId}`] = duration;
    });

    // افزودن مقادیر صفر برای دیتاپیج‌هایی که وجود ندارند
    for (let i = 0; i <= 29; i++) {
        const dataPageId = `${i}`;
        if (!vweitimeData[`vweitime${dataPageId}`]) {
            vweitimeData[`vweitime${dataPageId}`] = 0;
        }
    }

    // محاسبه طول با حذف مقادیر تکراری بر اساس linkId
    const processedData = {};

    // محاسبه طول با حذف مقادیر تکراری بر اساس linkId
    const uniqueData = [];
    const seenIds = new Set();

    inputArray.forEach((item) => {
        const key = `${item.linkId1}-${item.dataPageId}`;
        if (!seenIds.has(key)) {
            seenIds.add(key);
            uniqueData.push(item);
        }
    });

    // محاسبه total pos، total neg و length بر اساس ایدی
    let totalPos = 0;
    let totalNeg = 0;

    uniqueData.forEach((item) => {
        const dataId = parseInt(item.linkId1);
        if (dataId < 15) {
            totalPos++;
        } else if (dataId >= 15) {
            totalNeg++;
        }
    });

    // ذخیره مقادیر در شی processedData
    processedData.totalPos = totalPos;
    processedData.totalNeg = totalNeg;
    processedData.length = uniqueData.length;
    localStorage.setItem(' uniqueData.length', uniqueData.length)

    const userData1 = {
        dataPageId: ensureNotEmpty(maxDurationRow.dataPageId),
        linkId1: ensureNotEmpty(maxDurationRow.linkId1),
        duration: ensureNotEmpty(maxDurationRow.duration)
    };

    localStorage.setItem('pageweiw', JSON.stringify(vweitimeData));
    const randomind = JSON.parse(localStorage.getItem('randomOrder')) || [];
    const maxDataPageId = Math.max(...inputArray.map(item => item.dataPageId));
    const inputArray2 = JSON.parse(localStorage.getItem('userdata'));


    // for (let i = 0; i < inputArray2.length; i++) {
    //     result2 += (inputArray2[i].linkId1 + inputArray2[i].dataPageId).toString() + " ";
    // }
    let result2 = "";

    for (let i = 0; i < inputArray2.length; i++) {
        let a = parseInt(inputArray2[i].dataPageId);
        let b = parseInt(inputArray2[i].linkId1);
        a += 1;
        b += 1;

        result2 += (a + ": " + b).toString() + "  ";
    }




    const lastClick2 = inputArray.reduce((maxEntry, currentEntry) => {
        const currentDataPageId = parseInt(currentEntry.dataPageId);
        const maxDataPageId = parseInt(maxEntry.dataPageId);
        return currentDataPageId > maxDataPageId ? currentEntry : maxEntry;
    }, {
        dataPageId: '-1'
    });
    // به صورت یک رشته برگردانید
    let sss = parseInt(lastClick2.dataPageId);
    let ssss = parseInt(lastClick2.linkId1);
    let concatenatedString = "";
    let lastClick = ((sss + 1) + ":" + (ssss + 1)).toString() + "";
    localStorage.setItem('lastClick2',lastClick2.dataPageId)
    for (let i = 0; i < randomind.length + 1; i++) {
        if (i < 30) {
            let a = parseInt(randomind[i]);
            a += 1;
            concatenatedString += ((i + 1) + ":" + a + "  ").toString();

        }
    }
    const userData4 = {
        duration: ensureNotEmpty(timeStr),
        duration1: ensureNotEmpty(timeStr1),
        pos: ensureNotEmpty(pos),
        neg: ensureNotEmpty(neg),
        dataPageId: ensureNotEmpty(parseInt(userData1.dataPageId) + 1),
        linkId1: ensureNotEmpty(parseInt(userData1.linkId1) + 1),
        duration2: ensureNotEmpty(userData1.duration),
        length: ensureNotEmpty(uniqueData.length),
        totalPos: ensureNotEmpty(processedData.totalPos),
        totalNeg: ensureNotEmpty(processedData.totalNeg),
        lastclick: ensureNotEmpty(sss + 1)

        // add other form fields as needed
    };
    localStorage.setItem('concatenatedString',
        concatenatedString); // تبدیل به عدد و در صورتی که نیاز باشد، مقدار پیش‌فرض 0
    localStorage.setItem('concatenatedDataIds', result2); // تبدیل به عدد و در صورتی که نیاز باشد، مقدار پیش‌فرض 0


    // Send data to PHP script
    fetch('server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData4)
    }).then(response => response.json()).then(data => {
        console.log('Data saved successfully!', data);
    }).catch(error => {
        console.error('Error saving data:', error);
    });
}
// New


function saveData12() {
    // Get form data
    const range = document.getElementById('myRange2').value;
    const invertedRange3 = range * -1;

    localStorage.setItem('pos', 0); // تبدیل به عدد و در صورتی که نیاز باشد، مقدار پیش‌فرض 0
    localStorage.setItem('neg', 0); // تبدیل به عدد و در صورتی که نیاز باشد، مقدار پیش‌فرض 0
    localStorage.setItem('userdata', 0);
    const inputArray2 = JSON.parse(localStorage.getItem('pageweiw')) || [];

    let group2 = 0;
    if (invertedRange3 > 0) {
        group2 = "+";
    } else if (invertedRange3 < 0) {
        group2 = "-";
    }
    let concatenatedString2 = localStorage.getItem(
        'concatenatedString'); // تبدیل به عدد و در صورتی که نیاز باشد، مقدار پیش‌فرض 0
    let concatenatedDataIds2 = localStorage.getItem(
        'concatenatedDataIds'); // تبدیل به عدد و در صورتی که نیاز باشد، مقدار پیش‌فرض 0

    let firstDisplayedText1 = localStorage.getItem('firstDisplayedText')
    let timeStr12 = localStorage.getItem('timeStr12'); // تبدیل به عدد و در صورتی که نیاز باشد، مقدار پیش‌فرض 0

    const userData = {
        myRange2: ensureNotEmpty(invertedRange3),
        group2: ensureNotEmpty(group2),
        pageview1: ensureNotEmpty(inputArray2.vweitime0),
        pageview2: ensureNotEmpty(inputArray2.vweitime1),
        pageview3: ensureNotEmpty(inputArray2.vweitime2),
        pageview4: ensureNotEmpty(inputArray2.vweitime3),
        pageview5: ensureNotEmpty(inputArray2.vweitime4),
        pageview6: ensureNotEmpty(inputArray2.vweitime5),
        pageview7: ensureNotEmpty(inputArray2.vweitime6),
        pageview8: ensureNotEmpty(inputArray2.vweitime7),
        pageview9: ensureNotEmpty(inputArray2.vweitime8),
        pageview10: ensureNotEmpty(inputArray2.vweitime9),
        pageview11: ensureNotEmpty(inputArray2.vweitime10),
        pageview12: ensureNotEmpty(inputArray2.vweitime11),
        pageview13: ensureNotEmpty(inputArray2.vweitime12),
        pageview14: ensureNotEmpty(inputArray2.vweitime13),
        pageview15: ensureNotEmpty(inputArray2.vweitime14),
        pageview16: ensureNotEmpty(inputArray2.vweitime15),
        pageview17: ensureNotEmpty(inputArray2.vweitime16),
        pageview18: ensureNotEmpty(inputArray2.vweitime17),
        pageview19: ensureNotEmpty(inputArray2.vweitime18),
        pageview20: ensureNotEmpty(inputArray2.vweitime19),
        pageview21: ensureNotEmpty(inputArray2.vweitime20),
        pageview22: ensureNotEmpty(inputArray2.vweitime21),
        pageview23: ensureNotEmpty(inputArray2.vweitime22),
        pageview24: ensureNotEmpty(inputArray2.vweitime23),
        pageview25: ensureNotEmpty(inputArray2.vweitime24),
        pageview26: ensureNotEmpty(inputArray2.vweitime25),
        pageview27: ensureNotEmpty(inputArray2.vweitime26),
        pageview28: ensureNotEmpty(inputArray2.vweitime27),
        pageview29: ensureNotEmpty(inputArray2.vweitime28),
        pageview30: ensureNotEmpty(inputArray2.vweitime29),
        sequnce: ensureNotEmpty(concatenatedDataIds2),
        sequncelink: ensureNotEmpty(concatenatedString2),
        firstDisplayedText1: ensureNotEmpty(firstDisplayedText1),
        duration3 : "Backup Time: " + timeStr12,

        // add other form fields as needed
    };
    console.error('Error saving data:', inputArray2);

    // Send data to PHP script
    fetch('save_data3.php', {
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