<?php

function console_log($data)
{
    echo '<script>';
    echo 'console.log(' . json_encode($data) . ')';
    echo '</script>';
}

$path = dirname(__FILE__) . '/';

$dirs = scandir($path);

$excludes = array(
    '.',
    // '..',
    // 'css',
    // 'test',
    // 'test2',
);

// echo '<ul>', "\n";
foreach ($dirs as $dir) {

    if (in_array($dir, $excludes)) {
        continue;
    }

    if ((is_dir($dir) === true)) {
        // echo '<li>';
        // echo '<a href="./' . $dir . '">';
        // echo ($dir);
        // echo '</a></li>' . "\n";
        console_log($dir);
    }
}
// echo '</ul>', "\n";
