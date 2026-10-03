/*
 * ============================================================
 *  NỘI DUNG WEBSITE — FILE DUY NHẤT CẦN SỬA KHI CẬP NHẬT HỒ SƠ
 * ============================================================
 *  - Sửa chữ bên trong dấu nháy "..." rồi lưu file, mở lại index.html.
 *  - Mỗi nội dung có 2 bản: "vi" (Tiếng Việt) và "en" (Tiếng Anh).
 *  - Giữ nguyên dấu phẩy, ngoặc { } [ ] như mẫu.
 *  - Xem thêm HUONG-DAN.md.
 */
window.PORTFOLIO = {
  /* ---------- Thông tin chung (không phụ thuộc ngôn ngữ) ---------- */
  name: "Huỳnh Văn Quí",
  initials: "HQ",
  photo: "assets/img/avatar.jpg",
  cvFile: "assets/cv/Huynh-Van-Qui-CV.pdf",

  /* ---------- Form "Nhà tuyển dụng đăng ký" ----------
   * Mỗi lượt đăng ký luôn được lưu trong trình duyệt (xem tại index.html#admin).
   * Muốn lưu vào GOOGLE SHEETS: dán địa chỉ Web app dạng https://script.google.com/macros/s/.../exec
   *   (xem HUONG-DAN.md mục 5 — Cách A).
   * Muốn NHẬN đăng ký của nhà tuyển dụng qua EMAIL khi website đã lên mạng:
   * tạo form miễn phí tại https://formspree.io, rồi dán địa chỉ form vào endpoint,
   * ví dụ: endpoint: "https://formspree.io/f/abcdwxyz"   (xem HUONG-DAN.md mục 5)
   */
  registration: {
    endpoint: "https://script.google.com/macros/s/AKfycby-gIVVP4EhUQrAqs_o_s-QfD2xUkyRX1anXS8tGKrK-TmYRd_3ZoDZ6IAJ82jFLLM7vQ/exec"
  },
  contact: {
    // Email được tách làm 2 phần để chống bot thu thập địa chỉ
    emailUser: "quimpt1011",
    emailDomain: "gmail.com",
    phone: "+84902903464",
    phoneDisplay: "0902 903 464",
    zalo: "https://zalo.me/0902903464",
    linkedin: "https://www.linkedin.com/in/qui-huynh-van-36270216a/"
  },

  /* ======================= TIẾNG VIỆT ======================= */
  vi: {
    meta: {
      title: "Huỳnh Văn Quí — Giám đốc Tài chính (CFO) · 15 năm kinh nghiệm",
      description: "Portfolio của Huỳnh Văn Quí: Giám đốc Tài chính với 15 năm kinh nghiệm quản trị tài chính, đầu tư và pháp lý dự án cho doanh nghiệp Bất động sản & đa ngành."
    },
    nav: {
      about: "Giới thiệu", skills: "Năng lực", experience: "Kinh nghiệm",
      projects: "Dự án", teaching: "Giảng dạy", education: "Học vấn", contact: "Liên hệ",
      menu: "Mở menu", skip: "Bỏ qua tới nội dung chính", top: "Lên đầu trang"
    },
    hero: {
      eyebrow: "Giám đốc Tài chính · CFO",
      role: "Phó Tổng Giám đốc Tài chính kiêm Kế toán trưởng — Phúc Đạt Group",
      tagline: "Kiến tạo nền tảng tài chính cho tăng trưởng dài hạn của doanh nghiệp Bất động sản & đa ngành.",
      years: "15 năm kinh nghiệm",
      degree: "Thạc sĩ Tài chính – Kế toán",
      location: "TP. Hồ Chí Minh – Bình Dương",
      ctaContact: "Liên hệ ngay",
      ctaCv: "Tải CV (PDF)",
      photoAlt: "Chân dung Huỳnh Văn Quí"
    },
    stats: [
      { value: 15, prefix: "", suffix: "", label: "năm kinh nghiệm tài chính – quản trị" },
      { value: 2800, prefix: "", suffix: "+ tỷ", label: "doanh thu/năm các mảng đã quản lý tài chính" },
      { value: 130, prefix: "~", suffix: " ha", label: "quy mô 6 dự án bất động sản đã tham gia" },
      { value: 2, prefix: "", suffix: "", label: "trường đại học đang giảng dạy" }
    ],
    about: {
      title: "Giới thiệu",
      lead: "Tôi là nhà quản trị tài chính với 15 năm đi từ tín dụng ngân hàng đến vị trí Phó Tổng Giám đốc Tài chính của một tập đoàn bất động sản đa ngành.",
      body: "Tôi tập trung kiến tạo giá trị gia tăng, tối ưu nguồn lực và thúc đẩy đổi mới bền vững. Không chỉ hoàn thành mục tiêu ngắn hạn, tôi định hướng mọi quyết định tài chính hôm nay trở thành nền tảng cho tăng trưởng chiến lược dài hạn — chuyển hóa thách thức thành cơ hội và xây dựng thành công vững chắc cho tổ chức.",
      quote: "Mọi quyết định hôm nay là nền tảng cho tăng trưởng ngày mai.",
      valuesTitle: "Giá trị tôi mang lại",
      values: [
        { icon: "optimize", title: "Tối ưu nguồn lực", text: "Hoạch định dòng tiền, cấu trúc vốn và chi phí để mỗi đồng vốn tạo ra hiệu quả cao nhất." },
        { icon: "shield", title: "Kiểm soát rủi ro", text: "Hệ thống kế toán – kiểm soát nội bộ chặt chẽ, BCTC hợp nhất minh bạch, pháp lý dự án và thuế rõ ràng." },
        { icon: "growth", title: "Tăng trưởng bền vững", text: "Phân tích đầu tư và chiến lược tài chính gắn với kế hoạch kinh doanh dài hạn của HĐQT." }
      ]
    },
    skills: {
      title: "Năng lực cốt lõi",
      subtitle: "Sáu nhóm năng lực được kiểm chứng qua các vị trí điều hành tài chính.",
      items: [
        { icon: "report", title: "Quản trị tài chính & BCTC hợp nhất", text: "Thiết lập hệ thống tài chính – kế toán, kiểm soát và lập báo cáo tài chính hợp nhất cho tập đoàn nhiều công ty con." },
        { icon: "invest", title: "Phân tích & quyết định đầu tư", text: "Thẩm định hiệu quả dự án, phân tích tài chính – rủi ro, tham mưu quyết định đầu tư cho HĐQT." },
        { icon: "bank", title: "Cấu trúc vốn & quan hệ ngân hàng", text: "Phương án kinh doanh, hồ sơ tín dụng, vay – giải ngân; thanh toán quốc tế L/C, T/T, D/A, D/P." },
        { icon: "legal", title: "Pháp lý dự án BĐS & thuế", text: "Làm việc với Sở, ban ngành để xin chủ trương, quyết định đầu tư; xử lý pháp lý thuế." },
        { icon: "strategy", title: "Chiến lược & kế hoạch kinh doanh", text: "Xây dựng kế hoạch tài chính ngắn – dài hạn, phối hợp cùng Giám đốc kinh doanh, phân phối." },
        { icon: "team", title: "Lãnh đạo đội ngũ", text: "Điều hành phòng Kế toán, Tài chính, Kế hoạch; phân công, giám sát và đánh giá hiệu quả nhân sự." }
      ],
      tagsTitle: "Kỹ năng",
      tags: ["Kế toán tài chính", "Quản lý điều hành", "Tư vấn tài chính", "Báo cáo quản trị", "Tài chính kinh tế", "Phân tích tài chính", "Tài chính đầu tư", "Tư duy nhạy bén"],
      language: "Tiếng Anh — Trung cấp (TOEIC)"
    },
    experience: {
      title: "Hành trình sự nghiệp",
      subtitle: "Từ tín dụng ngân hàng đến điều hành tài chính tập đoàn.",
      showMore: "Xem chi tiết công việc",
      showLess: "Thu gọn",
      items: [
        {
          period: "03/2022 – Hiện tại",
          role: "Phó Tổng Giám đốc Tài chính kiêm Kế toán trưởng",
          company: "Phúc Đạt Group",
          sector: "Tập đoàn chủ đầu tư BĐS & kinh doanh đa ngành: Đầu tư, BĐS, Bán lẻ",
          highlights: [
            "Điều hành tài chính – kế toán – kế hoạch các công ty con: Sản xuất (>1.000 tỷ/năm), Thương mại – dịch vụ (>300 tỷ/năm), BĐS đầu tư (>1.500 tỷ/năm).",
            "Thiết lập hệ thống tài chính – kế toán; kiểm tra, kiểm soát và lập BCTC hợp nhất toàn tập đoàn.",
            "Phân tích đầu tư, tài chính, rủi ro và tham mưu quyết định đầu tư; tham gia 6 dự án BĐS quy mô ~130 ha.",
            "Làm việc với Sở, ban ngành về pháp lý dự án, chủ trương đầu tư và pháp lý thuế."
          ],
          details: [
            "Quản lý điều hành tài chính, kế toán, kế hoạch các công ty con trong tập đoàn đa lĩnh vực: sản xuất công nghiệp, dân dụng; thương mại dịch vụ; bất động sản đầu tư.",
            "Quản lý điều hành, quản trị hoạt động mảng Kinh doanh, Tài chính, Kế toán, Kế hoạch đầu tư của tập đoàn.",
            "Thiết lập hệ thống tài chính – kế toán công ty; định hướng phát triển và mở rộng quy mô tài chính cho tập đoàn.",
            "Kiểm tra, kiểm soát và lập các báo cáo tài chính hợp nhất của tập đoàn.",
            "Thực hiện chiến lược, kế hoạch kinh doanh cùng các Giám đốc kinh doanh / Giám đốc phân phối bán hàng.",
            "Xem xét kế hoạch tài chính, hiệu quả dự án, kế hoạch kinh doanh và chủ trương phát triển dự án trên thị trường.",
            "Phát triển định hướng đầu tư, phân tích đầu tư, phân tích tài chính, rủi ro và đưa ra các quyết định đầu tư cho tập đoàn.",
            "Lập kế hoạch, chiến lược đầu tư dự án; phối hợp Pháp lý làm việc với các ban ngành để xin chủ trương, quyết định.",
            "Làm việc với Sở, ban ngành liên quan đến pháp lý dự án, pháp lý thuế.",
            "Các công việc chiến lược khác theo chủ trương của HĐQT."
          ]
        },
        {
          period: "10/2017 – 04/2022",
          role: "Giám đốc Tài chính",
          company: "Công ty CP Kỹ thuật Tân Phát Long",
          sector: "Xây dựng & cơ điện (MEP)",
          highlights: [
            "Hoạch định tài chính, quản lý chi phí và xoay vòng dòng tiền theo từng dự án và toàn công ty.",
            "Xây dựng quan hệ ngân hàng: phương án kinh doanh, hồ sơ tín dụng, vay và giải ngân.",
            "Thiết lập hệ thống theo dõi, phân tích chi phí và rủi ro tài chính cho các dự án xây dựng – MEP.",
            "Tham dự họp HĐQT, đề xuất phương án hoạt động, chiến lược và định hướng công ty."
          ],
          details: [
            "Quản lý, điều hành phòng Kế toán, phòng Tài chính; phân công, giám sát, đánh giá hiệu quả làm việc của nhân viên.",
            "Hoạch định tài chính và quản lý các khoản chi phí, định hướng tài chính, xoay vốn dòng tiền của công ty.",
            "Lập kế hoạch tài chính ngắn hạn, dài hạn theo từng dự án và tổng thể công ty.",
            "Kiểm tra báo cáo tài chính hàng tháng và trình Ban Tổng Giám đốc.",
            "Thiết lập quan hệ, quản trị hồ sơ ngân hàng, phương án kinh doanh, hồ sơ tín dụng để vay, giải ngân.",
            "Tham gia kế hoạch dự án, thiết lập bảng theo dõi và phân tích chi phí dự án, phân tích rủi ro và định hướng chi phí.",
            "Quản lý tài chính dự án: chỉ tiêu hoạt động – kinh doanh, đánh giá rủi ro, theo dõi chi phí, doanh thu.",
            "Kiểm tra, kiểm soát số liệu kế toán, bộ phận kế toán và kiểm toán nội bộ.",
            "Tham dự các buổi họp HĐQT, đề xuất phương án cho tình hình hoạt động, chiến lược và định hướng của công ty."
          ]
        },
        {
          period: "01/2014 – 10/2017",
          role: "Trợ lý Tài chính Tổng Giám đốc",
          company: "Công ty CP Kết Nối Thời Trang",
          sector: "Sản xuất & xuất nhập khẩu",
          highlights: [
            "Quản lý phòng Kế toán, Tài chính và Kế hoạch.",
            "Quản trị nghiệp vụ thanh toán quốc tế (L/C, T/T, D/A, D/P) và làm việc với nhà cung cấp nước ngoài.",
            "Quản trị rủi ro tài chính trong các đơn hàng; cùng Kế toán trưởng quyết toán thuế.",
            "Tham gia xây dựng chiến lược và phân tích, báo cáo hoạt động kinh doanh."
          ],
          details: [
            "Quản lý, điều hành phòng Kế toán, Tài chính, Kế hoạch; phân công, giám sát, đánh giá hiệu quả nhân sự.",
            "Hoạch định tài chính, quản lý chi phí, định hướng tài chính và xoay vốn dòng tiền.",
            "Lập kế hoạch tài chính ngắn hạn, dài hạn; kiểm tra báo cáo tài chính hàng tháng trình Ban Tổng Giám đốc.",
            "Quản trị nghiệp vụ, hồ sơ thanh toán quốc tế với ngân hàng (L/C, T/T, D/A, D/P).",
            "Thiết lập quan hệ ngân hàng, hồ sơ tín dụng, phương án kinh doanh để vay, giải ngân.",
            "Làm việc với nhà cung cấp nước ngoài về các vấn đề tài chính.",
            "Tham gia chiến lược định hướng kinh doanh, phân tích và báo cáo hoạt động kinh doanh.",
            "Cùng Kế toán trưởng làm việc với cơ quan thuế khi quyết toán thuế.",
            "Tham gia hồ sơ kinh doanh, quản trị rủi ro tài chính trong các đơn hàng.",
            "Tham dự họp HĐQT, đề xuất phương án hoạt động và chiến lược công ty."
          ]
        },
        {
          period: "01/2012 – 12/2013",
          role: "Chuyên viên Tín dụng Doanh nghiệp",
          company: "Ngân hàng TMCP Sài Gòn Công Thương (Saigonbank)",
          sector: "Chi nhánh Bà Chiểu – TP. Hồ Chí Minh",
          highlights: [
            "Tín dụng khách hàng doanh nghiệp — nền tảng về phân tích tín dụng và góc nhìn của ngân hàng đối với doanh nghiệp."
          ],
          details: []
        }
      ]
    },
    projects: {
      title: "Dự án bất động sản tiêu biểu",
      subtitle: "Các dự án bất động sản đầu tư đã tham gia thực hiện tại Phúc Đạt Group.",
      all: "Tất cả",
      unit: "ha",
      role: "Tham gia: kế hoạch tài chính, hiệu quả đầu tư, pháp lý dự án",
      total: "Tổng quy mô",
      items: [
        { name: "Khu đô thị Phúc Đạt – Phú Thuận", place: "Thủ Dầu Một", region: "Đông Nam Bộ", type: "Khu đô thị", area: 18 },
        { name: "Minh Quốc Plaza", place: "Thủ Dầu Một", region: "Đông Nam Bộ", type: "Tổ hợp thương mại", area: 15 },
        { name: "Phúc Đạt Tower", place: "Dĩ An", region: "Đông Nam Bộ", type: "Cao tầng", area: 2.5 },
        { name: "Khu đô thị Phúc Đạt – Tân Uyên", place: "Tân Uyên", region: "Đông Nam Bộ", type: "Khu đô thị", area: 20 },
        { name: "Khu đô thị sinh thái Pleiku", place: "Pleiku", region: "Tây Nguyên", type: "Khu đô thị sinh thái", area: 66 },
        { name: "Khu đô thị Phúc Đạt – Hà Tĩnh", place: "Hà Tĩnh", region: "Bắc Trung Bộ", type: "Khu đô thị", area: 8 }
      ]
    },
    teaching: {
      title: "Giảng dạy & Chia sẻ tri thức",
      subtitle: "Đưa kinh nghiệm thực chiến vào giảng đường.",
      items: [
        { period: "01/2025 – Hiện tại", role: "Giảng viên thỉnh giảng", org: "Trường Đại học Văn Hiến", unit: "Khoa Tài chính – Kế toán · TP. Hồ Chí Minh" },
        { period: "01/2024 – Hiện tại", role: "Giảng viên thỉnh giảng", org: "Trường Đại học Thủ Dầu Một", unit: "Khoa Kinh tế – Tài chính · Bình Dương" }
      ]
    },
    education: {
      title: "Học vấn & Chứng chỉ",
      degreesTitle: "Học vấn",
      certsTitle: "Chứng chỉ",
      degrees: [
        { period: "2018 – 2020", title: "Thạc sĩ Tài chính – Kế toán", org: "Trường Đại học Tài chính – Marketing", note: "Tốt nghiệp loại Khá" }
      ],
      certs: [
        { title: "Chứng chỉ Kế toán trưởng", org: "Đại học Kinh tế TP. Hồ Chí Minh (UEH)" },
        { title: "Chứng chỉ Luật hoạt động trong doanh nghiệp", org: "Đại học Luật TP. Hồ Chí Minh" },
        { title: "Chứng chỉ TOEIC", org: "Educational Testing Service – ETS" },
        { title: "Tin học – Level C", org: "Đại học Giao thông Vận tải TP. Hồ Chí Minh" }
      ]
    },
    contact: {
      title: "Cùng tạo nền tảng tài chính vững chắc",
      text: "Sẵn sàng trao đổi về vị trí Giám đốc Tài chính, tư vấn tài chính – đầu tư – pháp lý dự án, hoặc hợp tác giảng dạy, hội thảo.",
      email: "Email", phone: "Điện thoại", zalo: "Zalo", linkedin: "LinkedIn",
      copy: "Sao chép", copied: "Đã sao chép!",
      zaloAction: "Nhắn Zalo", linkedinAction: "Xem hồ sơ",
      cv: "Tải CV (PDF)", print: "In / Lưu trang thành PDF",
      register: "Nhà tuyển dụng đăng ký"
    },
    register: {
      eyebrow: "Dành cho nhà tuyển dụng",
      title: "Nhà tuyển dụng đăng ký",
      text: "Để lại tên công ty và số điện thoại, tôi sẽ chủ động liên hệ lại để trao đổi về cơ hội hợp tác.",
      company: "Tên công ty", companyPh: "VD: Công ty CP Đầu tư ABC",
      phone: "Số điện thoại", phonePh: "VD: 0901 234 567",
      submit: "Gửi đăng ký", sending: "Đang gửi…",
      required: "Vui lòng nhập tên công ty (ít nhất 2 ký tự).",
      invalidPhone: "Số điện thoại chưa đúng. Nhập số Việt Nam 10 số (VD: 0901 234 567) hoặc dạng +84.",
      success: "Cảm ơn quý công ty! Đăng ký đã được ghi nhận, tôi sẽ liên hệ lại sớm nhất.",
      duplicate: "Số điện thoại này đã đăng ký trước đó. Tôi sẽ liên hệ lại sớm nhất.",
      sendFail: "Đã lưu đăng ký nhưng chưa gửi được qua mạng. Quý công ty có thể gọi trực tiếp 0902 903 464.",
      privacy: "Thông tin chỉ dùng để liên hệ tuyển dụng, không chia sẻ cho bên thứ ba.",
      adminTitle: "Danh sách đăng ký (lưu trên trình duyệt này)",
      adminEmpty: "Chưa có đăng ký nào trên trình duyệt này.",
      colTime: "Thời gian", colCompany: "Tên công ty", colPhone: "Số điện thoại",
      exportCsv: "Tải file Excel (CSV)", remove: "Xoá", removeAll: "Xoá tất cả",
      confirmRemove: "Xoá đăng ký này?", confirmRemoveAll: "Xoá toàn bộ danh sách đăng ký trên trình duyệt này?",
      adminNote: "Danh sách này chỉ gồm các đăng ký nhập trên trình duyệt này. Để nhận đăng ký từ nhà tuyển dụng trên website đã đưa lên mạng, hãy cấu hình Formspree (HUONG-DAN.md mục 5)."
    },
    footer: "© 2026 Huỳnh Văn Quí. Mọi quyền được bảo lưu."
  },

  /* ======================= ENGLISH ======================= */
  en: {
    meta: {
      title: "Huynh Van Qui — Chief Financial Officer · 15 years of experience",
      description: "Portfolio of Huynh Van Qui: CFO with 15 years of experience in financial management, investment and project legal affairs for real estate and diversified groups."
    },
    nav: {
      about: "About", skills: "Expertise", experience: "Experience",
      projects: "Projects", teaching: "Teaching", education: "Education", contact: "Contact",
      menu: "Open menu", skip: "Skip to main content", top: "Back to top"
    },
    hero: {
      eyebrow: "Chief Financial Officer · CFO",
      role: "Deputy CEO of Finance & Chief Accountant — Phuc Dat Group",
      tagline: "Building the financial foundation for long-term growth of real estate and diversified enterprises.",
      years: "15 years of experience",
      degree: "Master of Finance – Accounting",
      location: "Ho Chi Minh City – Binh Duong, Vietnam",
      ctaContact: "Get in touch",
      ctaCv: "Download CV (PDF)",
      photoAlt: "Portrait of Huynh Van Qui"
    },
    stats: [
      { value: 15, prefix: "", suffix: "", label: "years in finance & management" },
      { value: 2800, prefix: "", suffix: "+ bn VND", label: "annual revenue of business lines under financial management" },
      { value: 130, prefix: "~", suffix: " ha", label: "across 6 real estate projects" },
      { value: 2, prefix: "", suffix: "", label: "universities currently lecturing at" }
    ],
    about: {
      title: "About",
      lead: "I am a finance executive whose 15-year path runs from corporate banking to Deputy CEO of Finance at a diversified real estate group.",
      body: "I focus on creating added value, optimizing resources and driving sustainable innovation. Beyond short-term targets, I make every financial decision today a foundation for long-term strategic growth — turning challenges into opportunities and building lasting success for the organization.",
      quote: "Every decision made today is the foundation for tomorrow's growth.",
      valuesTitle: "The value I bring",
      values: [
        { icon: "optimize", title: "Resource optimization", text: "Cash-flow planning, capital structure and cost control so every dong of capital works harder." },
        { icon: "shield", title: "Risk control", text: "Robust accounting and internal control, transparent consolidated statements, clear project legal and tax positions." },
        { icon: "growth", title: "Sustainable growth", text: "Investment analysis and financial strategy aligned with the Board's long-term business plan." }
      ]
    },
    skills: {
      title: "Core expertise",
      subtitle: "Six capability areas proven across senior finance roles.",
      items: [
        { icon: "report", title: "Financial management & consolidated reporting", text: "Set up finance and accounting systems; review and prepare consolidated financial statements for multi-subsidiary groups." },
        { icon: "invest", title: "Investment analysis & decisions", text: "Project feasibility, financial and risk analysis, investment recommendations to the Board." },
        { icon: "bank", title: "Capital structure & banking relations", text: "Business plans, credit files, borrowing and disbursement; international payments L/C, T/T, D/A, D/P." },
        { icon: "legal", title: "Real estate project legal & tax", text: "Work with government departments on investment approvals and decisions; handle tax matters." },
        { icon: "strategy", title: "Strategy & business planning", text: "Short- and long-term financial plans, in partnership with sales and distribution directors." },
        { icon: "team", title: "Team leadership", text: "Lead Accounting, Finance and Planning departments; assign, supervise and evaluate staff performance." }
      ],
      tagsTitle: "Skills",
      tags: ["Financial accounting", "Executive management", "Financial advisory", "Management reporting", "Economic finance", "Financial analysis", "Investment finance", "Sharp business acumen"],
      language: "English — Intermediate (TOEIC)"
    },
    experience: {
      title: "Career journey",
      subtitle: "From corporate banking to group-level financial leadership.",
      showMore: "Show full responsibilities",
      showLess: "Show less",
      items: [
        {
          period: "03/2022 – Present",
          role: "Deputy CEO of Finance & Chief Accountant",
          company: "Phuc Dat Group",
          sector: "Real estate developer & diversified group: Investment, Real estate, Retail",
          highlights: [
            "Lead finance, accounting and planning for subsidiaries: Manufacturing (>1,000 bn VND/yr), Trading & services (>300 bn VND/yr), Real estate investment (>1,500 bn VND/yr).",
            "Established the group's finance and accounting system; review and prepare consolidated financial statements.",
            "Investment, financial and risk analysis supporting Board decisions; involved in 6 real estate projects totaling ~130 ha.",
            "Work with government departments on project legal status, investment approvals and tax matters."
          ],
          details: [
            "Manage finance, accounting and planning for subsidiaries across manufacturing, trading & services and real estate investment.",
            "Oversee the group's Sales, Finance, Accounting and Investment Planning functions.",
            "Set up the finance and accounting system; shape the group's financial expansion.",
            "Review, control and prepare the group's consolidated financial statements.",
            "Execute business strategy and plans with Sales / Distribution Directors.",
            "Review financial plans, project returns, project business plans and development policies.",
            "Develop investment direction, perform investment, financial and risk analysis, and make investment decisions.",
            "Plan project investment strategy; coordinate with Legal to obtain approvals from authorities.",
            "Work with government departments on project legal and tax matters.",
            "Other strategic tasks as directed by the Board of Directors."
          ]
        },
        {
          period: "10/2017 – 04/2022",
          role: "Chief Financial Officer",
          company: "Tan Phat Long Engineering JSC",
          sector: "Construction & MEP",
          highlights: [
            "Financial planning, cost management and cash-flow rotation per project and company-wide.",
            "Built banking relationships: business plans, credit files, loans and disbursements.",
            "Set up cost tracking, analysis and financial risk control for construction and MEP projects.",
            "Attended Board meetings, proposing operating plans, strategy and direction."
          ],
          details: [
            "Lead the Accounting and Finance departments; assign, supervise and evaluate staff.",
            "Financial planning, cost management, financial direction and cash-flow rotation.",
            "Short- and long-term financial plans per project and for the whole company.",
            "Review monthly financial statements and report to the Board of Management.",
            "Manage banking relations, business plans and credit files for borrowing and disbursement.",
            "Build project cost tracking and analysis, risk analysis and cost direction.",
            "Project financial management: KPIs, risk assessment, cost and revenue tracking.",
            "Control accounting data, the accounting team and internal audit.",
            "Attend Board meetings and propose strategy and operating plans."
          ]
        },
        {
          period: "01/2014 – 10/2017",
          role: "Financial Assistant to the CEO",
          company: "Ket Noi Thoi Trang JSC",
          sector: "Manufacturing & import–export",
          highlights: [
            "Managed the Accounting, Finance and Planning departments.",
            "Handled international payments (L/C, T/T, D/A, D/P) and foreign suppliers.",
            "Managed financial risk in orders; tax finalization with the Chief Accountant.",
            "Contributed to business strategy, analysis and performance reporting."
          ],
          details: [
            "Lead Accounting, Finance and Planning; assign, supervise and evaluate staff.",
            "Financial planning, cost management and cash-flow rotation.",
            "Short- and long-term financial plans; monthly financial statement review.",
            "International payment operations with banks (L/C, T/T, D/A, D/P).",
            "Banking relations, credit files and business plans for loans and disbursement.",
            "Resolve financial matters with foreign suppliers.",
            "Business strategy, analysis and performance reporting.",
            "Tax finalization with the Chief Accountant and tax authorities.",
            "Financial risk management in sales orders.",
            "Attend Board meetings and propose plans and strategy."
          ]
        },
        {
          period: "01/2012 – 12/2013",
          role: "Corporate Credit Officer",
          company: "Saigon Bank for Industry and Trade (Saigonbank)",
          sector: "Ba Chieu Branch – Ho Chi Minh City",
          highlights: [
            "Corporate credit — the foundation for credit analysis and understanding how banks view businesses."
          ],
          details: []
        }
      ]
    },
    projects: {
      title: "Selected real estate projects",
      subtitle: "Real estate investment projects delivered at Phuc Dat Group.",
      all: "All",
      unit: "ha",
      role: "Involvement: financial planning, investment returns, project legal",
      total: "Total scale",
      items: [
        { name: "Phuc Dat – Phu Thuan Urban Area", place: "Thu Dau Mot", region: "Southeast", type: "Urban area", area: 18 },
        { name: "Minh Quoc Plaza", place: "Thu Dau Mot", region: "Southeast", type: "Commercial complex", area: 15 },
        { name: "Phuc Dat Tower", place: "Di An", region: "Southeast", type: "High-rise", area: 2.5 },
        { name: "Phuc Dat – Tan Uyen Urban Area", place: "Tan Uyen", region: "Southeast", type: "Urban area", area: 20 },
        { name: "Pleiku Eco Urban Area", place: "Pleiku", region: "Central Highlands", type: "Eco urban area", area: 66 },
        { name: "Phuc Dat – Ha Tinh Urban Area", place: "Ha Tinh", region: "North Central", type: "Urban area", area: 8 }
      ]
    },
    teaching: {
      title: "Teaching & knowledge sharing",
      subtitle: "Bringing real-world practice into the lecture hall.",
      items: [
        { period: "01/2025 – Present", role: "Visiting Lecturer", org: "Van Hien University", unit: "Faculty of Finance – Accounting · Ho Chi Minh City" },
        { period: "01/2024 – Present", role: "Visiting Lecturer", org: "Thu Dau Mot University", unit: "Faculty of Economics – Finance · Binh Duong" }
      ]
    },
    education: {
      title: "Education & Certifications",
      degreesTitle: "Education",
      certsTitle: "Certifications",
      degrees: [
        { period: "2018 – 2020", title: "Master of Finance – Accounting", org: "University of Finance – Marketing", note: "Graduated with Credit" }
      ],
      certs: [
        { title: "Chief Accountant Certificate", org: "University of Economics Ho Chi Minh City (UEH)" },
        { title: "Business Law Certificate", org: "Ho Chi Minh City University of Law" },
        { title: "TOEIC Certificate", org: "Educational Testing Service – ETS" },
        { title: "IT Certificate – Level C", org: "Ho Chi Minh City University of Transport" }
      ]
    },
    contact: {
      title: "Let's build a solid financial foundation together",
      text: "Open to CFO opportunities, finance – investment – project legal advisory, and teaching or speaking engagements.",
      email: "Email", phone: "Phone", zalo: "Zalo", linkedin: "LinkedIn",
      copy: "Copy", copied: "Copied!",
      zaloAction: "Message on Zalo", linkedinAction: "View profile",
      cv: "Download CV (PDF)", print: "Print / Save page as PDF",
      register: "Recruiter sign-up"
    },
    register: {
      eyebrow: "For recruiters",
      title: "Recruiter sign-up",
      text: "Leave your company name and phone number and I will get back to you to discuss the opportunity.",
      company: "Company name", companyPh: "e.g. ABC Investment JSC",
      phone: "Phone number", phonePh: "e.g. 0901 234 567",
      submit: "Submit", sending: "Sending…",
      required: "Please enter your company name (at least 2 characters).",
      invalidPhone: "Invalid phone number. Enter a 10-digit Vietnamese number (e.g. 0901 234 567) or +84 format.",
      success: "Thank you! Your sign-up has been received. I will contact you shortly.",
      duplicate: "This phone number has already signed up. I will contact you shortly.",
      sendFail: "Saved, but could not be sent over the network. Please call +84 902 903 464 directly.",
      privacy: "Your information is used only for recruitment contact and never shared with third parties.",
      adminTitle: "Sign-ups (stored in this browser)",
      adminEmpty: "No sign-ups in this browser yet.",
      colTime: "Time", colCompany: "Company", colPhone: "Phone",
      exportCsv: "Download Excel (CSV)", remove: "Delete", removeAll: "Delete all",
      confirmRemove: "Delete this sign-up?", confirmRemoveAll: "Delete all sign-ups stored in this browser?",
      adminNote: "This list only contains sign-ups entered in this browser. To receive recruiter sign-ups from the live website, configure Formspree (HUONG-DAN.md section 5)."
    },
    footer: "© 2026 Huynh Van Qui. All rights reserved."
  }
};
