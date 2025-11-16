import os
import re
from pathlib import Path

def process_html_files(root_dir):
    # 替换规则字典
    replacements = {
        "https://bas.blockhaity.qzz.io/": "https://bas.blockhaity.qzz.io?target={path}",
        "https://blockhaity.pages.dev/": "https://blockhaity.pages.dev{path}",
        "https://blockhaity.netlify.app/": "https://blockhaity.netlify.app{path}",
        "https://blockhaity.github.io/": "https://blockhaity.github.io{path}",
        "https://blog-vercal.blockhaity.dpdns.org/":"https://blog-vercal.blockhaity.dpdns.org{path}",
        "https://blockhaity.vercal.app/": "https://blockhaity.vercal.app{path}",
        "https://blog-edgeone.blockhaity.qzz.io":"https://blog-edgeone.blockhaity.qzz.io{path}",
        "https://blog.blockhaity.qzz.io": "https://blog.blockhaity.qzz.io{path}",
    }
    
    # 遍历public目录及其子目录
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                # 获取从public开始的相对路径
                rel_path = os.path.relpath(file_path, root_dir)
                # 确保路径以/开头
                target_path = '/' + rel_path.replace(os.sep, '/')
                
                # 读取文件内容
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # 使用字典进行替换
                for original_url, new_url_template in replacements.items():
                    new_url = new_url_template.format(path=target_path)
                    content = content.replace(original_url, new_url)
                    print(f"替换为: {new_url}")
                
                # 写回文件
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                print(f"已处理文件: {file_path}")

if __name__ == "__main__":
    public_dir = "public"
    if os.path.exists(public_dir):
        process_html_files(public_dir)
        print("所有HTML文件处理完成！")
    else:
        print("找不到public目录！")

