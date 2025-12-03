# User Registration System

Hệ thống đăng ký người dùng với NestJS (Backend) và React (Frontend).

## 📋 Yêu cầu hệ thống

- **Node.js** >= 18.x
- **npm** >= 9.x

> ⚠️ MongoDB Atlas đã được cấu hình sẵn, không cần cài đặt thêm.

## 🚀 Hướng dẫn chạy chương trình

### Bước 1: Cài đặt Dependencies

Mở **2 terminal** và chạy lần lượt:

**Terminal 1 - Backend:**
```bash
cd backend
npm install
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
```

### Bước 2: Chạy Backend

```bash
cd backend
npm run start:dev
```

✅ Backend chạy tại: **http://localhost:3000**

### Bước 3: Chạy Frontend

```bash
cd frontend
npm run dev
```

✅ Frontend chạy tại: **http://localhost:5173**

---

## 🧪 Hướng dẫn Test

### Test Backend API

Mở trình duyệt và truy cập:

| URL | Kết quả mong đợi |
|-----|------------------|
| http://localhost:3000/user | `{"message":"User API is working!","timestamp":"..."}` |
| http://localhost:3000/user/all | Danh sách users đã đăng ký |

### Test Frontend

1. Mở trình duyệt: **http://localhost:5173**

2. **Test trang Home:**
   - Hiển thị giao diện chào mừng
   - Có 2 nút: "Sign Up" và "Sign In"

3. **Test trang Sign Up (Đăng ký):**
   - Click "Sign Up" trên thanh navigation
   - Nhập email: `test123@gmail.com`
   - Nhập password: `123456`
   - Nhập confirm password: `123456`
   - Click "Create Account"
   - ✅ Hiển thị thông báo "Registration successful!"
   - Kiểm tra: http://localhost:3000/user/all → Thấy user vừa đăng ký

4. **Test Validation:**
   - Để trống email → Hiển thị lỗi "Email is required"
   - Nhập email sai định dạng → Hiển thị lỗi "Please enter a valid email"
   - Password < 6 ký tự → Hiển thị lỗi
   - Confirm password không khớp → Hiển thị lỗi
   - Đăng ký lại với email đã tồn tại → Hiển thị lỗi

5. **Test trang Login:**
   - Click "Login" trên thanh navigation
   - Nhập email và password
   - Click "Log In"
   - ✅ Hiển thị thông báo "Login successful!" (mock)

---

## 🔗 API Endpoints

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| GET | `/user` | Kiểm tra API hoạt động |
| GET | `/user/all` | Lấy danh sách tất cả users |
| POST | `/user/register` | Đăng ký user mới |


---

## 📁 Cấu trúc dự án

```
Source/
├── backend/                    # NestJS API
│   ├── src/
│   │   ├── user/
│   │   │   ├── dto/
│   │   │   │   └── create-user.dto.ts    # Validation DTO
│   │   │   ├── schemas/
│   │   │   │   └── user.schema.ts        # MongoDB Schema
│   │   │   ├── user.controller.ts        # API Routes
│   │   │   ├── user.service.ts           # Business Logic
│   │   │   └── user.module.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── .env                    # MongoDB connection string
│   └── package.json
│
├── frontend/                   # React + TypeScript
│   ├── src/
│   │   ├── api/
│   │   │   └── userApi.ts      # Axios API client
│   │   ├── components/
│   │   │   ├── Layout.tsx
│   │   │   └── Navbar.tsx
│   │   ├── hooks/
│   │   │   └── useRegister.ts  # React Query mutation
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Login.tsx
│   │   │   └── SignUp.tsx
│   │   ├── App.tsx             # Router setup
│   │   └── main.tsx
│   └── package.json
│
└── README.md
```

---

## 🛠️ Công nghệ sử dụng

### Backend
- **NestJS** - Framework Node.js
- **MongoDB Atlas** - Cloud Database
- **Mongoose** - ODM cho MongoDB
- **bcrypt** - Hash password
- **class-validator** - Validation

### Frontend
- **React 18** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router DOM** - Routing
- **React Query** - API state management
- **React Hook Form + Zod** - Form validation

---

## ✅ Checklist tính năng

- [x] Đăng ký user với email và password
- [x] Validation email và password
- [x] Hash password trước khi lưu database
- [x] Kiểm tra email trùng lặp
- [x] Hiển thị thông báo lỗi/thành công
- [x] Giao diện Login (mock)
- [x] Responsive design
- [x] CORS enabled
