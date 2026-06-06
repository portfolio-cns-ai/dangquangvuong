# Portfolio học phần - Đặng Quang Vương

Website portfolio học phần của Đặng Quang Vương, MSSV 23100551, lớp QH2023HA, Trường Đại học Y Dược, Đại học Quốc gia Hà Nội. Dự án tổng hợp 6 bài tập học phần, trang chi tiết từng bài, PDF minh chứng và trang tổng kết. Nội dung được cá nhân hóa theo định hướng y tế, kỹ thuật chẩn đoán hình ảnh và ứng dụng AI trong học tập.

## Cấu trúc

- `index.html`: trang chủ, giới thiệu cá nhân và 6 bài tập.
- `pages/`: trang chi tiết từng bài và trang tổng kết.
- `files/`: PDF minh chứng từ `bai1.pdf` đến `bai6.pdf`, riêng bài 5 có thêm `bai5-thuyet-trinh-beo-phi.pdf`.
- `images/avatar.jpg`: ảnh đại diện.
- `css/style.css`: giao diện responsive.
- `js/script.js`: cấu hình theme, menu mobile, hiệu ứng hiển thị và nút lên đầu trang.

## Cách chạy local

Không cần cài NodeJS hoặc build. Mở trực tiếp `index.html` bằng trình duyệt.

## Ghi chú

Toàn bộ file HTML dùng `meta charset="UTF-8"` và font hỗ trợ tiếng Việt để tránh lỗi hiển thị dấu.

## Đổi theme

- Token mặc định nằm trong `:root` của `css/style.css`.
- Theme theo lĩnh vực nằm trong `themeConfig` của `js/script.js`.
- Để tạo biến thể khác, đổi `data-theme` trên thẻ `body` và thêm bộ màu tương ứng trong `themeConfig`.
