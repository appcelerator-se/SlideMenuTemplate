#!/bin/sh

rm -r build/android

ti build -p android -b

echo 'Installing Project to Device'

adb install -r build/android/bin/app.apk

exit