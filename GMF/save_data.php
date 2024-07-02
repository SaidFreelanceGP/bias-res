<?php
// مسیر فایل CSV
$csvFilePath = 'data.csv';
// مسیر فایل JSON
$jsonFilePath = 'data.json';

// گرفتن اطلاعات ارسال شده از فرم
$data = json_decode(file_get_contents('php://input') , true);

// ایجاد یک ایدی برای کاربر
$data['id'] = str_pad(mt_rand(1, 999), 3, '0', STR_PAD_LEFT);

// خواندن اطلاعات موجود از فایل CSV
$existingData = [];
if (file_exists($csvFilePath))
  {
    $existingData = array_map('str_getcsv', file($csvFilePath));
  }

// اگر فایل خالی است، عنوان‌های ستون اضافه شود
if (empty($existingData))
  {
    $existingData[] = ['ID','Join Time', 'Email', 'Phone', 'group-1','First Choise',  'Search time', 'Browser Time','total time in page +', 'total time in page -','max time on page','max  time on Link','max Time spent on max page','number page view total','number page view +','number page view -','Click Depth','group-2','Last Choies','time page 1','time page 2','time page 3','time page 4','time page 5','time page 6','time page 7','time page 8','time page 9','time page 10','time page 11','time page 12','time page 13','time page 14','time page 15','time page 16','time page 17','time page 18','time page 19','time page 20','time page 21','time page 22','time page 23','time page 24','time page 25','time page 26','time page 27','time page 28','time page 29','time page 30','Sequnce Click','sequncelink','firstDisplayedText1'];
  }

// افزودن اطلاعات جدید به لیست قبلی
$existingData[] = [$data['id'],$data['dateTime'], $data['email'], $data['phone']];

// ذخیره اطلاعات در فایل CSV
$csvFile = fopen($csvFilePath, 'w');
foreach ($existingData as $line)
  {
    fputcsv($csvFile, $line);
  }
fclose($csvFile);

// ذخیره اطلاعات در فایل JSON
$jsonData = json_encode($existingData, JSON_PRETTY_PRINT);
file_put_contents($jsonFilePath, $jsonData);

// ارسال پاسخ به سمت جاوا اسکریپت
header('Content-Type: application/json');
echo json_encode(['status' => 'success', 'id' => $data['id']]);
?>
