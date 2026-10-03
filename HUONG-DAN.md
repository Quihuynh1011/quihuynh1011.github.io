# Hướng dẫn sử dụng Website Portfolio

## 1. Mở website
Nhấp đúp vào file **`index.html`**. Website mở bằng trình duyệt (Chrome, Safari, Edge…), không cần cài đặt hay chạy server.

> Cần có Internet để tải phông chữ đẹp. Nếu không có mạng, website vẫn hoạt động với phông chữ mặc định của máy.

## 2. Sửa nội dung
Mọi nội dung nằm trong **một file duy nhất: `data/content.js`**. Mở bằng TextEdit (Mac) hoặc Notepad (Windows), hoặc tốt hơn là VS Code.

- Phần `vi: { ... }` là Tiếng Việt, phần `en: { ... }` là Tiếng Anh. Sửa cả hai cho khớp.
- Chỉ sửa chữ **bên trong dấu nháy** `"..."`. Giữ nguyên dấu phẩy `,`, ngoặc `{ } [ ]`.
- Trong chữ không được dùng dấu nháy kép `"`. Nếu cần, dùng nháy đơn `'` hoặc `“ ”`.
- Lưu file, rồi tải lại trang (F5 / Cmd+R).

Ví dụ thêm một chứng chỉ (trong `vi` → `education` → `certs`):
```js
{ title: "Chứng chỉ CFA Level 1", org: "CFA Institute" },
```

Ví dụ thêm một dự án (trong `projects` → `items`; `area` là số ha, dùng dấu chấm cho số lẻ):
```js
{ name: "Tên dự án", place: "Địa phương", region: "Đông Nam Bộ", type: "Khu đô thị", area: 12.5 },
```

Nếu sửa xong mà trang trắng, rất có thể bị thiếu hoặc thừa dấu phẩy/ngoặc ở chỗ vừa sửa.

## 3. Thay ảnh và CV
- **Ảnh đại diện:** thay file `assets/img/avatar.jpg` (ảnh vuông, ≥ 800×800px, ≤ 300KB), giữ nguyên tên file.
- **CV PDF:** thay file `assets/cv/Huynh-Van-Qui-CV.pdf`, giữ nguyên tên file.

> ⚠️ **Lưu ý quyền riêng tư:** file CV PDF hiện tại vẫn còn **địa chỉ nhà, ngày sinh, tình trạng hôn nhân**. Website đã ẩn các thông tin này, nhưng ai tải CV vẫn thấy. Nên xuất một bản CV mới bỏ các dòng đó rồi thay vào trước khi đưa web lên mạng. Nút **"In / Lưu trang thành PDF"** trên website tạo được bản CV gọn và không có thông tin riêng tư.

## 4. Đưa website lên mạng (miễn phí, để có link gửi nhà tuyển dụng)

**Website đang chạy tại: https://quihuynh1011.github.io** (GitHub Pages, repo `Quihuynh1011/quihuynh1011.github.io`).

**Cập nhật website sau khi sửa nội dung:** mở Terminal, chạy lần lượt:
```bash
cd ~/Downloads/CLAUDECODE/portfolio
git add -A
git commit -m "Cập nhật nội dung"
git push
```
Khoảng 1 phút sau, website trên mạng sẽ tự cập nhật. Cũng có thể nhờ Claude Code: "đẩy thay đổi lên GitHub".

Các cách khác (nếu không dùng GitHub):

**Cách nhanh nhất: Netlify Drop**
1. Vào https://app.netlify.com/drop (đăng ký bằng email hoặc Google).
2. Kéo-thả **cả thư mục `portfolio`** vào trang.
3. Nhận link dạng `https://ten-ngau-nhien.netlify.app`. Có thể đổi tên trong *Site settings → Change site name*, ví dụ `huynhvanqui.netlify.app`.
4. Mỗi lần cập nhật nội dung: vào site trên Netlify → *Deploys* → kéo-thả lại thư mục.

**Cách khác: GitHub Pages:** tạo repository, tải toàn bộ file trong `portfolio` lên, rồi bật *Settings → Pages*.

**Sau khi có link**, mở `index.html` và sửa dòng `og:image` thành địa chỉ đầy đủ để ảnh hiện khi chia sẻ link qua Zalo/Facebook/LinkedIn:
```html
<meta property="og:image" content="https://huynhvanqui.netlify.app/assets/img/avatar.jpg">
```
Đồng thời thêm link website vào hồ sơ LinkedIn (mục *Contact info → Website*).

## 5. Nhà tuyển dụng đăng ký (tên công ty, số điện thoại)

Cuối website có form **"Nhà tuyển dụng đăng ký"**. Form kiểm tra tên công ty và số điện thoại Việt Nam, không cho cùng một số đăng ký hai lần, và có chống bot spam.

**Xem danh sách đăng ký:** mở website với đuôi **`#admin`**, ví dụ `index.html#admin` hoặc `https://huynhvanqui.netlify.app/#admin`. Danh sách hiện ngay dưới form, có nút **Tải file Excel (CSV)** và nút xoá.

> ⚠️ **Quan trọng:** website không có server, nên mỗi lượt đăng ký chỉ được lưu **trong trình duyệt của người đăng ký**. Khi web đã lên mạng, anh sẽ **không thấy** đăng ký của nhà tuyển dụng trong `#admin` trên máy mình. Để nhận được đăng ký, chọn một trong hai cách bên dưới: **Cách A — Google Sheets** (khuyên dùng) hoặc **Cách B — Formspree** (gửi về email).

### Cách A (khuyên dùng): lưu vào Google Sheets
Mã nhận dữ liệu nằm trong file `google-sheets/Code.gs` (cùng cấp với thư mục `portfolio`).

1. Vào https://sheets.new, tạo bảng tính mới, đặt tên ví dụ "Đăng ký nhà tuyển dụng".
2. Menu **Tiện ích mở rộng → Apps Script** (Extensions → Apps Script).
3. Xoá hết mã mẫu, dán toàn bộ nội dung `google-sheets/Code.gs`, bấm **Lưu**. Muốn nhận email báo mỗi khi có đăng ký mới thì điền email vào dòng `NOTIFY_EMAIL`.
4. Bấm **Triển khai → Tùy chọn triển khai mới** (Deploy → New deployment). Biểu tượng bánh răng → **Ứng dụng web**.
   - *Thực thi với tư cách*: **Tôi**
   - *Người có quyền truy cập*: **Bất kỳ ai** (Anyone)
5. Bấm **Triển khai** → **Cấp quyền truy cập**, chọn tài khoản Google. Nếu hiện "Google chưa xác minh ứng dụng này": **Nâng cao → Đi tới … (không an toàn)** → **Cho phép**. Đây là script của chính anh nên an toàn.
6. Copy **URL ứng dụng web** dạng `https://script.google.com/macros/s/…/exec` rồi dán vào `endpoint` trong `data/content.js`.
7. Mở website, gửi thử một lượt. Tab **DangKy** trong Sheet sẽ tự tạo và có thêm một dòng mới.

> Nếu sau này sửa `Code.gs`: **Triển khai → Quản lý các bản triển khai → biểu tượng bút chì → Phiên bản: Phiên bản mới → Triển khai**. Nếu không, Google vẫn chạy mã cũ. URL giữ nguyên.



### Cách B: gửi về email qua Formspree

1. Vào https://formspree.io → *Get started*, đăng ký bằng email muốn nhận thông báo.
2. Bấm *+ New Form*, đặt tên "Nhà tuyển dụng đăng ký", rồi copy địa chỉ form dạng `https://formspree.io/f/abcdwxyz`.
3. Mở `data/content.js`, dán địa chỉ đó vào:
   ```js
   registration: {
     endpoint: "https://formspree.io/f/abcdwxyz"
   },
   ```
4. Lưu file và đưa web lên lại Netlify. Từ đó, mỗi lượt đăng ký sẽ được gửi về email của anh, đồng thời vẫn lưu trên Formspree.

Gói miễn phí của Formspree nhận khoảng 50 lượt/tháng. Nên gửi thử một lượt sau khi cấu hình để chắc chắn email về được.

## 6. Cấu trúc thư mục
```
portfolio/
├── index.html          ← nhấp đúp để mở
├── data/content.js     ← NỘI DUNG (file duy nhất cần sửa)
├── assets/css/style.css   giao diện
├── assets/js/main.js      chức năng (không cần sửa)
├── assets/img/            avatar.jpg, favicon.svg
├── assets/cv/             file CV PDF
└── HUONG-DAN.md        ← file này
```
