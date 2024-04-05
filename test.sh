rm -rf ./public
npm run build
rm -rf ../nginx/html/*
cp -rf ./public/* ../nginx/html/
echo 构建完成，位于:8080中
