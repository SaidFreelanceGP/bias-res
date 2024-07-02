<!-- 
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
    $existingData[count($existingData) - 1][] = $data['group2'];
    $existingData[count($existingData) - 1][] = $data['myRange2'];
    $existingData[count($existingData) - 1][] = $data['pageview1'];
    $existingData[count($existingData) - 1][] = $data['pageview2'];
    $existingData[count($existingData) - 1][] = $data['pageview3'];
    $existingData[count($existingData) - 1][] = $data['pageview4'];
    $existingData[count($existingData) - 1][] = $data['pageview5'];
    $existingData[count($existingData) - 1][] = $data['pageview6'];
    $existingData[count($existingData) - 1][] = $data['pageview7'];
    $existingData[count($existingData) - 1][] = $data['pageview8'];
    $existingData[count($existingData) - 1][] = $data['pageview9'];
    $existingData[count($existingData) - 1][] = $data['pageview10'];
    $existingData[count($existingData) - 1][] = $data['pageview11'];
    $existingData[count($existingData) - 1][] = $data['pageview12'];
    $existingData[count($existingData) - 1][] = $data['pageview13'];
    $existingData[count($existingData) - 1][] = $data['pageview14'];
    $existingData[count($existingData) - 1][] = $data['pageview15'];
    $existingData[count($existingData) - 1][] = $data['pageview16'];
    $existingData[count($existingData) - 1][] = $data['pageview17'];
    $existingData[count($existingData) - 1][] = $data['pageview18'];
    $existingData[count($existingData) - 1][] = $data['pageview19'];
    $existingData[count($existingData) - 1][] = $data['pageview20'];
    $existingData[count($existingData) - 1][] = $data['pageview21'];
    $existingData[count($existingData) - 1][] = $data['pageview22'];
    $existingData[count($existingData) - 1][] = $data['pageview23'];
    $existingData[count($existingData) - 1][] = $data['pageview24'];
    $existingData[count($existingData) - 1][] = $data['pageview25'];
    $existingData[count($existingData) - 1][] = $data['pageview26'];
    $existingData[count($existingData) - 1][] = $data['pageview27'];
    $existingData[count($existingData) - 1][] = $data['pageview28'];
    $existingData[count($existingData) - 1][] = $data['pageview29'];
    $existingData[count($existingData) - 1][] = $data['pageview30'];
    $existingData[count($existingData) - 1][] = $data['sequnce'];
    $existingData[count($existingData) - 1][] = $data['sequncelink'];
    $existingData[count($existingData) - 1][] = $data['firstDisplayedText1'];
    $existingData[count($existingData) - 1][] = $data['duration3'];
    
}
else
  {
    // اگر $existingData خالی بود یا آخرین سطر وجود نداشته باشد، یک سطر جدید با myRange اضافه کنید
    $existingData[] = [$data['group2'],$data['myRange2'],$data['pageview1'],$data['pageview2'],$data['pageview3'],$data['pageview4'],$data['pageview5'],$data['pageview6'],$data['pageview7'],$data['pageview8'],$data['pageview9'],$data['pageview10'],$data['pageview11'],$data['pageview12'],$data['pageview13'],$data['pageview14'],$data['pageview15'],$data['pageview16'],$data['pageview17'],$data['pageview18'],$data['pageview19'],$data['pageview20'],$data['pageview21'],$data['pageview22'],$data['pageview23'],$data['pageview24'],$data['pageview25'],$data['pageview26'],$data['pageview27'],$data['pageview28'],$data['pageview29'],$data['pageview30'],$data['sequnce'],$data['sequncelink'],$data['firstDisplayedText1'],$data['duration3']];
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
?> -->
