# Junior Programmer Test - by Fast Print 
Simple CRUD App untuk test junior programmer, dibuat menggunakan React.js, Express.js, PostgreSQL, dan TailwindCSS.

## Requirements
- NodeJS v22.20.0 (atau lebih, sebaiknya menggunakan LTS Version).
- npm v11.70 (atau lebih).
- pnpm v10.28.1 (atau lebih).

<br>

# Installations
Aplikasi ini terpisah menjadi 2 bagian yang berdiri sendiri, frontend dan backend, yang keduanya dijalankan melalui bash/command prompt. Berikut langkah instalasi untuk setiap bagian aplikasi:

### Frontend
- Masuk ke folder frontend/fastprint_junior_test/
- Run command
###
    npm install
###
OR
###
    pnpm install
###
_Disarankan menggunakan pnpm untuk ukuran file yang lebih kecil_

### Backend
- Masuk ke folder backend/fastprint_junior_test/
- Run command
###
    npm install
###
OR
###
    pnpm install
###
_Disarankan menggunakan pnpm untuk ukuran file yang lebih kecil_

### Database
- Masuk ke folder database
- Import file *fastprint_test.sql* ke PostgreSQL.

<br>

# App Execution
Untuk menjalankan aplikasi ini, dibutuhkan 2 bash/command prompt yang masing-masing menjalankan satu dari kedua bagian aplikasi, frontend maupun backend. Berikut urutan eksekusi aplikasi:

- Bash/Command Prompt pertama masuk ke folder backend/fastprint_junior_test/
- Run command ``` node server ``` untuk menjalankan bagian backend aplikasi.
- Bash/Command Prompt kedua masuk ke folder frontend/fastprint_junior_test/
- Run command ``` pnpm run dev ``` untuk menjalankan bagian frontend aplikasi. _Note: anda dapat menggunakan command ``` npm run dev ``` jika tidak menggunakan **pnpm**_.

<br>

# Preview Aplikasi
![Preview 1]("")