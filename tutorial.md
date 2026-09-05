# Nhật ký học frontend và hướng dẫn tiếp tục session

Cập nhật: 05/09/2026. Đây là tài liệu bàn giao bối cảnh, tiến độ và cách cộng tác; không phải xác nhận rằng toàn bộ ứng dụng đã được chạy kiểm thử. Khi bắt đầu session mới, đối chiếu lại code thực tế vì người dùng tự gõ và có thể chỉnh khác các ví dụ trong chat.

## 1. Đọc trước khi tiếp tục

1. Đọc [CODEX.md](CODEX.md): quy tắc phân tích trước, đề xuất cụ thể, giới hạn phạm vi và chỉnh sửa có sự đồng ý.
2. Đọc [README.MD](README.MD): vai trò mentor, hướng dẫn dễ hiểu, chia nhỏ bài học, ưu tiên người dùng tự code.
3. Đọc tài liệu này để giữ bối cảnh và những điều người dùng đã sửa hướng.
4. Đọc các file liên quan đến bước tiếp theo; không mặc định code giống hoàn toàn đoạn hướng dẫn cũ.

Tài liệu này không thay thế các chỉ dẫn có mức ưu tiên cao hơn hoặc yêu cầu mới của người dùng.

## 2. Mục tiêu và yêu cầu đã thống nhất

- Mục tiêu dài hạn: website thương mại điện tử fullstack theo mô hình sàn nhiều người bán, tương tự Shopee; có người mua, người bán và quản trị viên.
- Mục tiêu hiện tại: **luyện dựng và thiết kế UI frontend trước**.
- Tham khảo Shopee về bố cục; không mặc định sao chép thương hiệu, màu cam hoặc mọi tính năng của Shopee.
- Màu chủ đạo: **xanh của Element Plus**. Người dùng đã chủ động yêu cầu đổi từ cam sang xanh.
- Người dùng là người mới, muốn tự gõ và hiểu code, không chỉ nhận một project do AI tạo.
- Người dùng đã yêu cầu tăng tốc so với việc giải thích từng dòng và hỏi lại liên tục. Có thể hướng dẫn một khối giao diện hoặc một trang vừa phải theo các bước rõ ràng.
- **Không tự chuyển sang xử lý nghiệp vụ.** Người dùng từng nhắc: “đang làm UI mà làm hàm làm gì”. Các nút có thể chỉ là giao diện, trạng thái được đặt cố định, dữ liệu là mẫu.
- Chưa làm API đăng nhập, lưu tài khoản, tạo đơn, thanh toán, gửi email, tải ảnh, xử lý voucher hoặc phân quyền người bán.
- Chưa bắt đầu UI quản trị viên. Không coi đó là bước đã được giao mặc định.

## 3. Cách làm việc với người dùng

### Hình thức hướng dẫn mặc định

Người dùng đã chọn: **assistant hướng dẫn code trên chat, người dùng tự gõ vào IDE**.

Một câu “ok”, “xong”, “đã xong, tiếp tục” trong chuỗi bài học có nghĩa là tiếp tục hướng dẫn theo cách này, không mặc định cho phép assistant tự sửa toàn bộ source.

Ngoại lệ đã xảy ra: người dùng trực tiếp yêu cầu tạo `.gitignore` và tài liệu `tutorial.md`; assistant thực hiện những file đó. Không suy rộng các yêu cầu này thành quyền sửa mọi file ứng dụng.

### Cấu trúc một bài hướng dẫn

1. Nêu kết quả UI sẽ dựng và vị trí của nó trong website.
2. Có thể dùng sơ đồ chữ ngắn để mô tả các vùng trên trang.
3. Nói rõ component/CSS nào được dùng lại; chỉ thêm những gì cần thiết.
4. Chỉ chính xác file cần tạo hoặc sửa, đoạn cần thay, vị trí thêm code.
5. Chia thành template/script tối thiểu, CSS, route và liên kết nếu cần.
6. Giải thích ngắn cú pháp mới và lý do thiết kế. Không lặp lại toàn bộ kiến thức cũ.
7. Kết thúc bằng vài điểm người dùng tự kiểm tra trên desktop/mobile.

Ví dụ cách nói: “Tạo `src/views/...vue`, đặt section dưới mô tả và trước `</main>`”. Tránh nói mơ hồ “thêm vào component”.

### Khi người dùng báo đã xong hoặc yêu cầu check

- Có thể đọc file trong workspace để kiểm tra; không cần yêu cầu người dùng dán lại code đã có.
- Phân biệt: đã đọc code, đã chạy build/type-check, đã xem trực tiếp trình duyệt. Chỉ báo điều thực sự đã làm.
- Nếu thấy lỗi, chỉ rõ nguyên nhân và hướng sửa nhỏ nhất. Ưu tiên giúp người dùng tự debug theo README.
- Không tự format, xóa file thừa, sửa lỗi ngoài phạm vi hoặc tái cấu trúc toàn dự án.
- Không liên tục bắt người dùng gửi ảnh chụp. Người dùng đã từ chối và muốn tiếp tục; chỉ cần ảnh khi thật sự cần đánh giá hình thức không thể suy ra từ code.
- Giữ tiếng Việt dễ đọc, tên biến rõ ràng, không biến chữ tiếng Việt thành Unicode escape.

### Những hướng đã được điều chỉnh

- Ban đầu assistant hỏi nhiều câu cơ bản về component/props. Người dùng muốn đi vào thực hành và tăng tiến độ.
- Assistant từng chuyển sớm sang route động/truyền ID sản phẩm. Người dùng nhắc ưu tiên UI, nên trang chi tiết hiện dùng sản phẩm cố định.
- Assistant từng thêm logic xóa giỏ hàng. Người dùng phản đối việc viết hàm khi đang học UI. Không lấy logic cũ làm lý do tiếp tục thêm nghiệp vụ.
- Không tạo thêm thư viện, store, service hoặc abstraction phức tạp chỉ để hiển thị giao diện mẫu.

## 4. Cấu trúc và công nghệ

```text
OnlineShopping/                      # Gốc repository
├── CODEX.md
├── README.MD
├── tutorial.md
├── .gitignore                       # Ignore chung vừa được tạo
├── OnlineShopping/                  # Project frontend, có package.json
│   ├── public/products/             # Ảnh mẫu
│   └── src/
│       ├── main.ts
│       ├── App.vue
│       ├── assets/base.css
│       ├── assets/main.css
│       ├── components/
│       ├── router/index.ts
│       ├── stores/counter.ts        # Store mẫu khởi tạo
│       └── views/
└── OnlineShoppingApi/               # Backend ASP.NET Core
    ├── OnlineShoppingApi.sln
    └── OnlineShoppingApi/           # Project backend, WeatherForecast mẫu
```

Frontend dùng Vue 3, TypeScript, Vite, Vue Router, Pinia và Element Plus. Pinia có sẵn từ project khởi tạo; chưa có store nghiệp vụ thương mại điện tử được xây trong chuỗi bài học.

Tại thời điểm bàn giao, `package.json` khai báo Vue `^3.5.40`, Element Plus `^2.14.5`, Vue Router `^5.2.0`, Pinia `^4.0.2`, Vite `^8.1.5`, TypeScript `~6.0.0`. Đây là phiên bản khai báo, không phải khẳng định tất cả phiên bản thực cài giống hệt; xem lockfile khi cần.

### Cài Element Plus và lỗi dependency đã gặp

Người dùng chạy `npm install element-plus` trong thư mục frontend. Npm báo plugin `eslint-plugin-oxlint@1.73.0` yêu cầu `oxlint ~1.73.0` nhưng project khai báo `~1.74.0`.

Đã hướng dẫn đưa `oxlint` về `~1.73.0`, phù hợp plugin hiện tại. Người dùng báo cài thành công. Không dùng `--force` hoặc `--legacy-peer-deps` để bỏ qua xung đột.

`src/main.ts` hiện import Element Plus và CSS của nó trước CSS ứng dụng, sau đó đăng ký Pinia, router và Element Plus trước khi mount:

```ts
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'

// Sau createApp(App):
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')
```

## 5. Thiết kế và thành phần dùng chung

| Thành phần | Vai trò |
|---|---|
| `App.vue` | Header/footer người mua; chọn bố cục tài khoản, người bán và mua sắm |
| `ProductCard.vue` | Thẻ ảnh, tên tối đa hai dòng, giá, shop, hiệu ứng hover; props `name`, `price`, `shop`, `image` |
| `SiteFooter.vue` | Footer giới thiệu, hỗ trợ, thanh toán và bản quyền |
| `AccountSidebar.vue` | Menu tài khoản người mua |
| `SellerLayout.vue` | Header/sidebar người bán; `<slot />` cho nội dung từng trang |
| `base.css` | Box sizing, font, nền, reset margin và liên kết |
| `main.css` | `.container`, `.panel`, `.product-grid`, `.account-page` |

Giá trị CSS chung hiện tại:

- `.container`: rộng `calc(100% - 32px)`, tối đa **1600px**. Ban đầu hướng dẫn 1200px nhưng người dùng đã đổi; không tự đổi lại.
- `.panel`: nền trắng, padding 24px, bo góc 8px.
- `.product-grid`: 4 cột; tối đa 900px còn 2; tối đa 480px còn 1.
- `.account-page`: sidebar 260px và phần nội dung co giãn; tối đa 768px còn 1 cột.
- Header: logo/tìm kiếm/giỏ hàng; mobile đưa tìm kiếm xuống hàng.
- Màu dùng các biến `--el-color-primary`, `--el-color-primary-light-9`, `--el-color-primary-dark-2`, cùng các biến border/text/fill của Element Plus.

Ảnh mẫu có sẵn: `ao-thun.jpg`, `ao-khoac.jpg`, `balo.jpg`, `tai-nghe.jpg`. URL sử dụng `/products/...`, không chứa `public`.

Nên mở rộng component dùng chung trước khi chép CSS. Tuy nhiên hiện còn nhiều CSS tiêu đề, nhóm nút, hàng sản phẩm tương tự nhau giữa các trang. Đây là cơ hội rà soát về sau, **không phải yêu cầu tự động refactor ngay**.

## 6. Tiến độ theo nhóm bài học

### Nền tảng đã được giới thiệu

- HTML/CSS/JavaScript; ba phần script/template/style trong file Vue.
- Component qua ví dụ một `ProductCard` dùng nhiều lần.
- Props qua `HelloWorld msg`, rồi tên/giá/ảnh sản phẩm; phân biệt truyền chuỗi và dấu `:` để truyền biểu thức/số.
- `ref`, `.value`, `computed`, `v-model`, `v-for`, `:key`, `v-if/v-else`, `watch` trong các bài đầu.
- Array/object, `filter`, `includes`, `slice`, bản sao mảng trước `sort`; đây là nội dung đã học, không phải phạm vi nghiệp vụ cần tiếp tục.
- CSS Grid/Flexbox, `minmax`, `gap`, media query, ảnh vuông, `object-fit`, giới hạn dòng, pseudo-element và focus-visible.
- RouterLink/RouterView, route tĩnh và route 404; slot của layout và `scope.row` trong bảng Element Plus.
- Các component Element Plus: Button, Input, Form, Select, Tag, Pagination, Input Number, Table.

### Trang chủ

Đã thay giao diện Vue mẫu bằng header xanh, banner một khối lớn/hai khối nhỏ, danh mục dạng ô chọn, ProductCard, hình ảnh thật và footer.

Logic có sẵn ở `HomeView.vue`: keyword từ App truyền qua prop; lọc tên và danh mục; sắp xếp tăng/giảm giá; phân trang. Thứ tự đúng: `filteredProducts → sortedProducts → paginatedProducts`. Watch đặt trang về 1 khi đổi điều kiện. `pageSize` hiện vẫn là 2 với 4 sản phẩm mẫu; chưa thực hiện đề xuất tăng lên 12 sản phẩm và pageSize 8.

Tìm kiếm hiện không bỏ dấu tiếng Việt. Không tự thêm tìm kiếm backend hoặc tính năng mới trong lượt học UI.

### Trang người mua và tài khoản

Đã hướng dẫn các màn hình chi tiết sản phẩm (tĩnh), đánh giá, sản phẩm tương tự, shop, giỏ hàng, thanh toán, đơn mua, chi tiết đơn, đăng nhập/đăng ký, hồ sơ, địa chỉ, mật khẩu, thông báo, yêu thích, voucher, quên mật khẩu, thành công và 404.

Giỏ hàng ban đầu có số lượng/tạm tính bằng dữ liệu local. Lúc bàn giao, file còn `removeItem()` và `@click` xóa. Người dùng đã ưu tiên UI sau đó; không tự xóa code cũ, nhưng không tự mở rộng nó sang lưu giỏ hàng hoặc checkout thật.

Form Auth dùng chung một view cho login/register theo tên route. Các form còn lại thường dùng giá trị cố định, placeholder hoặc model-value; không coi đó là form đã hoàn thiện chức năng. Nút upload, lưu, xác nhận, chọn biến thể, phản hồi, v.v. phần lớn chỉ hiển thị.

### Kênh người bán

Đã hướng dẫn SellerLayout, dashboard, bảng sản phẩm, form sản phẩm, bảng đơn, chi tiết đơn, thiết lập shop, đánh giá và phản hồi, bảng voucher, form voucher. Dữ liệu chủ yếu là mẫu tĩnh. Giá ở một số bảng là chuỗi đã định dạng để trình bày UI.

Không có xác thực/phân quyền thực. Việc App chọn layout theo `/seller` chỉ là lựa chọn giao diện.

## 7. Bản đồ route và file

Các đường dẫn dưới đây lấy từ `src/router/index.ts` lúc viết tài liệu, không dùng lại tên preview cũ trong chat.

| URL | View / mục đích |
|---|---|
| `/` | `HomeView.vue` — trang chủ |
| `/about` | `AboutView.vue` — trang mẫu còn giữ |
| `/login`, `/register` | `AuthView.vue` — form tài khoản |
| `/forgot-password` | `ForgotPasswordView.vue` |
| `/cart` | `CartView.vue` |
| `/product-detail` | `ProductDetailView.vue` — một sản phẩm mẫu cố định |
| `/shop-detail` | `ShopView.vue` — shop mẫu |
| `/checkout` | `CheckoutView.vue` |
| `/orders` | `OrdersView.vue` |
| `/order-detail` | `OrderDetailView.vue` |
| `/order-success` | `OrderSuccessView.vue` — trạng thái mẫu |
| `/profile` | `ProfileView.vue` |
| `/addresses` | `AddressesView.vue` |
| `/addresses/new` | `AddressFormView.vue` |
| `/change-password` | `ChangePasswordView.vue` |
| `/notifications` | `NotificationsView.vue` |
| `/favorites` | `FavoritesView.vue` |
| `/vouchers` | `VouchersView.vue` |
| `/:pathMatch(.*)*` | `NotFoundView.vue` |
| `/seller` | `SellerDashboardView.vue` |
| `/seller/products` | `SellerProductsView.vue` |
| `/seller/products/new` | `SellerProductFormView.vue` |
| `/seller/orders` | `SellerOrdersView.vue` |
| `/seller/order-detail` | `SellerOrderDetailView.vue` |
| `/seller/settings` | `SellerShopSettingsView.vue` |
| `/seller/reviews` | `SellerReviewsView.vue` |
| `/seller/vouchers` | Dự định là `SellerVouchersView.vue`, nhưng import hiện sai; xem mục 9 |
| `/seller/vouchers/new` | `SellerVoucherFormView.vue` |

Các màn hình chưa nhất thiết được nối bằng tất cả nút trên giao diện. Nhiều bài chỉ hướng dẫn mở URL trực tiếp. Không mặc định mọi nút “Xem chi tiết”, “Tạo mã”, “Mua ngay” đều điều hướng.

## 8. Những gì assistant và người dùng đã thực sự làm

- Phần lớn source UI: assistant đưa đoạn code trong chat, người dùng tự tạo/sửa file; assistant đọc lại ở một số mốc.
- Có nhiều lượt người dùng chỉ báo “đã xong” và được hướng dẫn bước kế; đó không phải xác nhận build hoặc kiểm tra giao diện toàn diện.
- Assistant trực tiếp tạo `.gitignore` gốc theo yêu cầu, giữ file ignore frontend sẵn có.
- Ignore gốc bao phủ node_modules, dist, coverage, cache TypeScript/ESLint, bin/obj/TestResults .NET, .vs/.idea, file người dùng IDE, env local và log/OS. Giữ template `.env.example`, mã nguồn, solution, csproj và lockfile.
- Đã dùng `git check-ignore` xác nhận các mẫu node_modules, dist, bin, obj, .vs và csproj.user được bỏ qua.
- Lượt tạo `tutorial.md` chỉ thêm tài liệu, không chỉnh lỗi ứng dụng phát hiện trong lúc đọc.

## 9. Điểm cần biết và việc còn mở

### Lỗi import voucher người bán — đã xác định, chưa sửa

Trong `src/router/index.ts` hiện có:

```ts
import SellerVouchersView from '../views/SellerVoucherFormView.vue'
import SellerVoucherFormView from '../views/SellerVoucherFormView.vue'
```

Dòng đầu import nhầm file, khiến `/seller/vouchers` dùng form thay vì bảng danh sách. File `SellerVouchersView.vue` có tồn tại. Đề xuất sửa riêng dòng đầu thành:

```ts
import SellerVouchersView from '../views/SellerVouchersView.vue'
```

Đây là phát hiện khi lập tài liệu; chưa áp dụng sửa. Khi tiếp tục, báo rõ cho người dùng và hướng dẫn họ sửa theo cách học hiện tại.

### Menu chưa đầy đủ so với route

- `SellerLayout.vue` hiện chưa có mục Đánh giá, dù route `/seller/reviews` tồn tại.
- `AccountSidebar.vue` hiện chưa có mục Đổi mật khẩu, dù route tương ứng tồn tại.
- AccountSidebar hiện dùng `router-link-active`; hướng dẫn cũ đã từng đề nghị rồi đính chính việc đổi selector. Các route `/addresses` và `/addresses/new` là hai record độc lập, không tự trở thành nested route chỉ vì chung tiền tố. Không khẳng định đổi class là đủ để chọn menu cha.
- SellerSidebar dùng exact-active; trang thêm sản phẩm hoặc chi tiết đơn không tự tô mục danh sách cha. Để xử lý thống nhất sau khi được giao.

### Những lỗi đã gặp trong quá trình học

- Quên import `ProductCard` trong HomeView.
- Import chính `ProductDetailView` vào nó thay vì import ProductCard.
- Gõ `Watch` thay vì `watch`; JavaScript phân biệt hoa/thường.
- Chuyển tìm kiếm lên header nhưng còn keyword local trong HomeView; đã hướng dẫn dùng `props.keyword`.
- Media query banner bị lặp; đã hướng dẫn xóa bản lặp.
- Tên tab IDE có lúc là `AuthView.vuew`, `FactoriesView.vue`, `OrderView.vue`, `SellerShopSettingView.vue`... Không suy ra file thực từ tab: dùng tìm file và kiểm tra import.

### Giới hạn hiện tại

- Chưa có xác nhận build thành công cho toàn bộ trạng thái repository hiện tại.
- Chưa xem trực tiếp giao diện trong browser; ảnh chụp người dùng cũng chưa được cung cấp trong chuỗi này.
- Chưa có end-to-end authentication, cart persistence, product API, order creation, email, upload hay payment.
- Chưa có bộ UI admin.
- Còn component/file mẫu Vue; không tự xóa khi chưa được giao.
- Phần lớn dữ liệu mã đơn, địa chỉ, rating, doanh thu/thống kê, voucher và ngày tháng là hư cấu để dựng UI, không phải dữ liệu thật.
- Nhiều bảng dùng slot `scope.row`; lỗi type hoặc hành vi component vẫn cần kiểm chứng bằng build nếu môi trường cho phép.

## 10. Chạy và kiểm tra

Chạy trong thư mục frontend `OnlineShopping/` chứa `package.json`, không phải gốc repository:

```bash
npm run dev
npm run type-check
npm run build
```

- `dev`: mở server để xem UI.
- `type-check`: kiểm tra TypeScript/Vue.
- `build`: type-check và đóng gói.
- `npm run lint` hiện có `--fix`; `npm run format` cũng ghi lại source. Không chạy như thể đó là kiểm tra chỉ đọc trong session hướng dẫn tự gõ.

Assistant từng thử `npm run type-check` nhưng môi trường WSL báo:

```text
WSL 1 is not supported. Please upgrade to WSL 2 or above.
Could not determine Node.js install directory
```

Đây là lỗi môi trường tại thời điểm đó, không phải kết luận code sai. Session sau có thể kiểm tra lại môi trường nếu cần, nhưng không được nói build đã pass khi chưa chạy được.

Kiểm tra UI ưu tiên: desktop/mobile, chữ dài, xuống hàng, ảnh không méo, bảng cuộn trong vùng nội dung, trạng thái selected/hover/focus, không tràn ngang. Không bắt viết unit test cho mọi thay đổi CSS tĩnh.

## 11. Cách tiếp tục từ mốc này

Mốc bài học cuối: UI form tạo voucher người bán đã được hướng dẫn; sau đó người dùng yêu cầu tạo ignore và tài liệu bàn giao.

Khi người dùng nói “tiếp tục” ở session mới:

1. Xác nhận ngắn rằng tiếp tục học UI bằng cách tự gõ, giữ màu xanh Element Plus.
2. Kiểm tra lỗi import voucher ghi ở mục 9 còn hay đã được người dùng sửa.
3. Không tự nhảy sang API, validation nghiệp vụ hoặc refactor lớn.
4. Đề xuất một phần UI hợp lý tiếp theo, không tạo hàng loạt trang chỉ để tăng số lượng. Có thể hoàn thiện các trạng thái form/bảng hoặc bố cục còn thiếu trong phạm vi họ chọn.
5. Nếu đổi sang UI admin hoặc logic tương tác, cần người dùng chọn hướng đó trước; chưa có sự đồng ý mặc định từ các câu “tiếp tục” cũ.

## 12. Prompt mở session mới

Người dùng có thể sao chép đoạn sau:

> Hãy đọc CODEX.md, README.MD và tutorial.md ở gốc repository trước. Tôi đang học frontend bằng cách tự gõ code theo hướng dẫn trên chat. Dự án là sàn thương mại điện tử nhiều người bán, tham khảo bố cục Shopee, dùng Vue 3 + TypeScript + Element Plus màu xanh. Hiện chỉ luyện thiết kế UI và dữ liệu mẫu, chưa muốn thêm hàm nghiệp vụ hay backend. Hãy kiểm tra tiến độ trong source rồi tiếp tục một bước vừa sức, giải thích ngắn từng phần mới và nói chính xác file/vị trí cần sửa. Không tự sửa source khi tôi chỉ nói tiếp tục bài học. Những gì đã đọc code, đã chạy kiểm tra hoặc chưa kiểm chứng phải được phân biệt rõ.

## 13. Tài liệu tham khảo đã dùng

- [Vue: Props](https://vuejs.org/guide/components/props.html)
- [Vue: List Rendering](https://vuejs.org/guide/essentials/list.html)
- [Vue: Computed](https://vuejs.org/guide/essentials/computed.html)
- [Vue Router](https://router.vuejs.org/guide/)
- [Element Plus: Quick Start](https://element-plus.org/en-US/guide/quickstart.html)
- [Element Plus: Form](https://element-plus.org/en-US/component/form.html)
- [Element Plus: Input](https://element-plus.org/en-US/component/input.html)
- [Element Plus: Pagination](https://element-plus.org/en-US/component/pagination.html)
- [Element Plus: Input Number](https://element-plus.org/en-US/component/input-number.html)
- [Shopee](https://shopee.vn/) — tham khảo bố cục; có lần truy cập được và có lần timeout. Không coi mọi mô tả trong chat là kết quả đối chiếu trực tiếp phiên bản mới nhất.
