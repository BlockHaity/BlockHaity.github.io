import os
import sys
system = sys.platform

# 判断系统平台
if system == "linux":
    # 清除文件
    print("clean files")
    print(os.system("rm -rf ./node_modules ./package-lock.json"))

if system == "win32":
    # 清除文件
    print("clean files")
    print(os.system("del /s /q node_modules package-lock.json"))

# 安装gitbook
print("install gitbook")
print(os.system("npm install --force gitbook-cli -g"))
print(os.system("gitbook fetch"))

# 安装依赖
depend = ["search-pro","chapter-fold","expandable-chapters","anchor-navigation-ex","accordion","favicon" ]
number = 0

# 遍历依赖列表
while number < len(depend):
    # 安装依赖
    print(os.system("npm install --force gitbook-plugin-"+depend[number]))
    number += 1

# 安装依赖
print(os.system("gitbook install"))
# 构建
print(os.system("gitbook build"))
# 完成
print("finish")