# Cài đặt hệ thống

\1.   Cài đặt môi trường:

·    Cài đặt git.

·    Cài đặt Nodejs từ https://nodejs.org/en/blog/release/v14.17.3.

\2.   Tải mã nguồn:

·    Clone mã nguồn hệ thống từ https://github.com/thach21020789/Flashcard_English_UET_DHQGHN.git

·    Sau khi Clone, Ta có 1 folder chứa mã nguồn hệ thống tên: **Flashcard_English_UET_DHQGHN**

\3.   Cài đặt Cơ sở dữ liệu:

·    Cài đặt Xampp từ https://www.apachefriends.org/download.html .

·    Khởi động Xampp, start Apache và MySQL, truy cập đường link http://localhost/phpmyadmin/ để vào cơ sở dữ liệu.

·    Tạo cơ sở dữ liệu: dictionary

·    Import dữ liệu file: dictionary.sql từ *Flashcard_English_UET_DHQGHN\Data\dictionary.sql*

\4.   Cài đặt node_modules(thư viện Javascript) và khởi động hệ thống:

·    Vào thư mục: ***Flashcard_English_UET_DHQGHN\NodeJs\***

·    Đổi tên file: .env.example thành .env

·    Tại NodeJs, chạy lệnh npm i trên Command Prompt

·    Chạy lệnh npm start trên Command Prompt 

*(lưu ý: chỉ hoạt động khi đã khởi chạy Xampp và truy cập được cơ sở dữ liệu)*

 

·    Vào thư mục: ***Flashcard_English_UET_DHQGHN\ReactJs\***

·    Tại ReactJs, chạy lệnh npm i trên Command Prompt 

·    Chạy lệnh npm start trên Command Prompt

Sau khi thực hiện các bước trên, hệ thống Học tiếng anh qua Flashcard đã được khởi động, truy cập vào http://localhost:3000/ để sử dụng hệ thống.