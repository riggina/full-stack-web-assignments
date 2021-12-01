**1. Membuat sebuah folder kosong dengan namamu sendiri**
- mkdir rigginaocean

**2. Membuat sebuah file dengan nama README.md, isi file tersebut dengan kalimat
"Halo perkenalkan aku halaman utama"**
- touch README.md
- nano README.md
- "Halo perkenalkan aku halaman utama"

**3. Insialisasi folder tersebut dengan Git, kemudian dokumentasikan menggunakan commit dengan pesan
"Inisialisasi Git Repository"**
- git init
- git add .
- git commit -m "Inisialisasi Git Repository"

**4. Buat branch baru dengan nama cv, hal ini berguna agar histori kita tidak tercampur**
- git branch cv

**5. Pindah branch kedalam cv, kemudian buat file dengan nama cv.txt dan isi file tersebut dengan kalimat:
"Ini adalah file CV"**
- git checkout cv
- touch cv.txt
- nano cv.txt
- "Ini adalah file CV"

**6. Kemudian dokumentasikan menggunakan commit dengan pesan
"Inisialisasi CV"**
- git add cv.txt
- git commit -m "Inisialisasi CV"

**7. Tambahkan 3 perusahaan yang akan kamu lamar, dan setiap menuliskan 1 nama perusahaan kamu harus melakukan dokumentasi menggunakan commit**
- nano cv.txt
- 1. Marvel Studio
- git add cv.txt
- git commit -m "Marvel Studio"
- 2. Studio Ghibli
- git add cv.txt
- git commit -m "Studio Ghibli"
- 3. Google
- git add cv.txt
- git commit -m "Google"

**8. kembali ke branch master**
_ubah file README.md menjadi
Halo perkenalkan aku halaman utama
Ini adalah update pertama pada branch master_
**jangan lupa untuk mendokumentasikannya menggunakan commit dengan pesan
"update master pertama"**
- git checkout master
- nano README.md
- "Halo perkenalkan aku halaman utama
Ini adalah update pertama pada branch master"
- git add .
- git commit -m "update master pertama"

**9. Gabungkan branch cv kedalam branch master menggunakan perintah git merge**
- git merge cv

**10. Unggah Git Repository tersebut kedalam GitHub**
_Karena saya menggunakan github cli maka saya menggunakan gh repo create_
- gh repo create
- git push -u origin master


**Berikut Link Repository yang telah available di Github saya**
https://github.com/riggina/rigginaocean.git
