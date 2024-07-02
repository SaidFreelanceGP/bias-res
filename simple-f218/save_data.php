<?php
// مسیر فایل CSV
$csvFilePath = 'data.csv';

// گرفتن اطلاعات ارسال شده از فرم
$data = json_decode(file_get_contents('php://input'), true);

// خواندن اطلاعات موجود از فایل CSV
$existingData = [];
if (file_exists($csvFilePath)) {
    $existingData = array_map('str_getcsv', file($csvFilePath));
}

// اگر فایل خالی است، عنوان‌های ستون اضافه شود
if (empty($existingData)) {
    $existingData[] = ['Number','id','code', 'Email', 'Phone','select-group','correctType', 'Display', 'Option1_PPT', 'Option1_Partner', 'Option2_PPT', 'Option2_Partner', 'Type1', 'Type2', 'answer', 'answer_type', 'difference1', 'difference2','responseTime','totalResponseTime','averageResponseTime','indivisualism guess1','Competitive guess1','indivisualism guess2','Competitive guess2','Startegey guess1','Startegey guess2','agency'];
}

// افزودن اطلاعات جدید به لیست قبلی
foreach ($data as $row) {
    $existingData[] = [
        $row['count'],
        $row['id'],
        $row['code'],
        $row['email'],
        $row['phone'],
        $row['dataType'],
        $row['correctType'],
        $row['Display'],
        $row['Option1_PPT'],
        $row['Option1_Partner'],
        $row['Option2_PPT'],
        $row['Option2_Partner'],
        $row['Type1'],
        $row['Type2'],
        $row['answer'],
        $row['answer_type'],
        $row['difference1'],
        $row['difference2'],
        $row['responseTime'],
        $row['totalResponseTime'],
        $row['averageResponseTime'],
        $row['myRange1'],
        $row['myRange2'],
        $row[''] ?? '',
        $row[''] ?? '',
        $row[''] ?? '',
        $row[''] ?? '',
        // $row[''] ?? 'faze-1',


    ];
}

// ذخیره اطلاعات در فایل CSV
$csvFile = fopen($csvFilePath, 'w');
foreach ($existingData as $line) {
    fputcsv($csvFile, $line);
}
fclose($csvFile);

// ارسال پاسخ به سمت جاوا اسکریپت
header('Content-Type: application/json');
echo json_encode(['status' => 'success']);
?>
