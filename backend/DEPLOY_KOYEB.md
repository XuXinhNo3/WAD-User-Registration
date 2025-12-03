# Deploy Backend lên Koyeb

## Cách 1: Deploy qua GitHub (Khuyến nghị)

### Bước 1: Push code lên GitHub
```bash
git add .
git commit -m "Prepare for Koyeb deployment"
git push origin main
```

### Bước 2: Tạo app trên Koyeb
1. Đăng nhập vào [Koyeb Console](https://app.koyeb.com/)
2. Click **"Create App"**
3. Chọn **"GitHub"** làm deployment method
4. Authorize GitHub nếu chưa kết nối
5. Chọn repository `WAD-User-Registration`

### Bước 3: Cấu hình deployment
- **Branch**: `main`
- **Root directory**: `backend`
- **Builder**: `Dockerfile` (đã có sẵn)
- **Port**: `3000`

### Bước 4: Thiết lập Environment Variables
Trong phần **Environment variables**, thêm:

| Variable | Value |
|----------|-------|
| `MONGODB_URI` | `mongodb+srv://admin:oKMkwxHCqZMDM7Kj@cluster0.2ouzsuf.mongodb.net/user-registration?retryWrites=true&w=majority&appName=Cluster0` |
| `PORT` | `3000` |
| `CORS_ORIGIN` | `https://your-frontend-url.com` (URL frontend sau khi deploy) |

### Bước 5: Deploy
- Click **"Deploy"**
- Đợi build hoàn tất (khoảng 2-5 phút)

---

## Cách 2: Deploy bằng Koyeb CLI

### Cài đặt Koyeb CLI
```bash
# Windows (PowerShell)
winget install koyeb.koyeb-cli

# Hoặc tải từ: https://github.com/koyeb/koyeb-cli/releases
```

### Login
```bash
koyeb login
```

### Deploy
```bash
cd backend
koyeb app create user-registration-api
koyeb service create user-registration-api \
  --app user-registration-api \
  --docker . \
  --port 3000:http \
  --env MONGODB_URI=your_mongodb_uri \
  --env PORT=3000 \
  --env CORS_ORIGIN=https://your-frontend.com
```

---

## Sau khi Deploy

### URL của API
Koyeb sẽ cung cấp URL dạng:
```
https://user-registration-api-<your-org>.koyeb.app
```

### Test API
```bash
# Test health check
curl https://your-app.koyeb.app/user

# Test đăng ký
curl -X POST https://your-app.koyeb.app/user/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Test123!"}'
```

### Cập nhật Frontend
Sau khi có URL backend, cập nhật file `frontend/src/api/userApi.ts`:
```typescript
const API_URL = 'https://your-app.koyeb.app';
```

---

## Lưu ý quan trọng

1. **MongoDB Atlas IP Whitelist**: 
   - Vào MongoDB Atlas → Network Access
   - Thêm `0.0.0.0/0` để cho phép tất cả IP (Koyeb dùng IP động)

2. **Environment Variables**:
   - KHÔNG commit `.env` file lên GitHub
   - Chỉ thiết lập biến môi trường trực tiếp trên Koyeb dashboard

3. **CORS**:
   - Sau khi deploy frontend, cập nhật `CORS_ORIGIN` với URL frontend thực tế

4. **Free Tier**:
   - Koyeb free tier có thể sleep sau 5 phút không có request
   - Request đầu tiên sau khi sleep sẽ mất vài giây để cold start
