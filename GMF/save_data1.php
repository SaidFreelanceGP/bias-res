<?php
// مسیر فایل CSV
$csvFilePath = 'data.csv';
// مسیر فایل JSON
$jsonFilePath = 'data.json';

// گرفتن اطلاعات ارسال شده از فرم
$data = json_decode(file_get_contents('php://input') , true);

// خواندن محتوای قبلی فایل CSV
$existingData = [];
if (file_exists($csvFilePath))
  {
    $csvFile = fopen($csvFilePath, 'r');
    while (($line = fgetcsv($csvFile)) !== false)
      {
        $existingData[] = $line;
      }
    fclose($csvFile);
  }

// اگر $existingData خالی نبود و آخرین سطر وجود داشته باشد، مقدار myRange را به آخرین سطر اضافه کنید
if (!empty($existingData) && is_array(end($existingData)))
  {
    $existingData[count($existingData) - 1][] = $data['group1'];
    $existingData[count($existingData) - 1][] = $data['myRange'];
  }
else
  {
    // اگر $existingData خالی بود یا آخرین سطر وجود نداشته باشد، یک سطر جدید با myRange اضافه کنید
    $existingData[] = [$data['group1'],$data['myRange']];
  }

// باز کردن فایل CSV برای نوشتن
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
