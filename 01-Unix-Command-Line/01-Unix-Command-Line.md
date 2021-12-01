1. Command pertama kita masuk ke direktori video, dengan “cd Videos”, lalu menggunakan command “ls” untuk melihat ada file dan folder apa saja dalam direktori video.

- cd Videos
- ls

Lalu ke tahapan membuat direktori kosong dengan nama sendiri, dengan menggunakan command “mkdir riggina”, lalu masuk ke direktori riggina dengan command “cd riggina”, setelah itu kita check apakah kita sudah berada di dalam direktori riggina dengan command “pwd”.

- mkdir riggina
- cd riggina
- pwd

2. Di dalam folder tesebut buatlah
> Folder Sekolah
> Folder Kerja
Kita membuat folder baru di dalam folder riggina, folder sekolah dan folder kerja dengan command “mkdir sekolah” lalu “mkdir kerja”. Lalu kita check apakah 2 folder yang dibuat sudah ada dengan command “ls” pada direktori riggina.

- mkdir sekolah
- mkdir kerja

3. Masuk kedalam folder sekolah
Masuk ke folder sekolah dengan command “cd sekolah” , dan dengan memastikan kita sudah berada di folder sekolah dengan command “pwd”

- cd sekolah
- pwd

Buat file dengan nama ijazah.txt, yang mana file tersebut akan memiliki teks seperti:
Membuat file dengan command “touch ijazah.txt” didalam folder sekolah.

- touch ijazah.txt

Perkenalkan namaku $NAMA
Aku berasalah dari $DAERAH
Salam Kenal :D
> $NAMA -> diganti dengan namamu sendiri
> DAERAH -> diganti dengan daerah asalmu sendiri

Untuk menambahkan isi dari file txt yang dibuat, menggunakan command “nano ijazah.txt”. Setelah itu muncul tampilan baru dan kita bisa mengisi file tersebut sesuai perintah dari soal. Setelah itu untuk keluar dari tampilan nano, cukup CTRL + X dan akan memunculkan apakah file tersebut mau disimpan dan keluar.

- nano ijazah.txt

Tampilkan isi dari file tersebut menggunakan CLI command

- cat ijazah.txt

Kemudian buat 1 file lagi dengan nama portofolio.txt, yang mana file tersebut akan memiliki teks seperti:
Membuat file dengan command “touch portofolio.txt” didalam folder sekolah.

- touch portofolio.txt

Saya pernah bekerja pada beberapa perusahaan salah satu diantaranya ialah
$PERUSAHAAN
$PERUSAHAAN
$PERUSAHAAN
$PERUSAHAAN -> diganti dengan nama perusahaan yang kamu sukai 

Untuk menambahkan isi dari file txt yang dibuat, menggunakan command “nano portofolio.txt”. Setelah itu muncul tampilan baru dan kita bisa mengisi file tersebut sesuai perintah dari soal. Setelah itu untuk keluar dari tampilan nano, cukup CTRL + X dan akan memunculkan apakah file tersebut mau disimpan dan keluar.

- nano portofolio.txt

Menampilkan teks yang telah kita buat dengan command “cat portofolio.txt”

- cat portofolio.txt


4. Keluar dari folder sekolah
Untuk keluar dari folder sekolah, cukup dengan command “cd ..”. Dan untuk mengecek apakah kita sudah keluar dari folder sekolah dengan command “pwd”.
- cd ..

5. Masuk kedalam folder kerja
Masuk ke folder sekolah dengan command “cd kerja” , dan dengan memastikan kita sudah berada di folder sekolah dengan command “pwd”

- cd kerja
- pwd

Buat file dengan nama cv.txt yang mana hal tersebut akan memiliki teks seperti:
Membuat file dengan command “touch cv.txt” didalam folder kerja.

- touch cv.txt

Salam,

Perkenalkan namaku $NAMA, saya memiliki kegemaran
$HOBBY
$HOBBY
$HOBBY
$NAMA -> diganti dengan namamu sendiri
$HOBBY -> diganti dengan hobi-mu sendiri

Untuk menambahkan isi dari file txt yang dibuat, menggunakan command “nano cv.txt”. Setelah itu muncul tampilan baru dan kita bisa mengisi file tersebut sesuai perintah dari soal. Setelah itu untuk keluar dari tampilan nano, cukup CTRL + X dan akan memunculkan apakah file tersebut mau disimpan dan keluar.

- nano cv.txt

Tampilkan isi dari file tersebut menggunakan CLI command
Menampilkan teks yang telah kita buat dengan command “cat cv.txt”

- cat cv.txt

6. Pada tahap ini kamu lupa jika sebenarnya file portofolio.txt seharusnya tidak berada pada folder sekolah, jadi kamu harus memindahkannya ke dalam folder kerja

Karena salah meletakkan file, kita kembali ke tempat file itu berada. File portofolio saat ini berada pada folder sekolah. Untuk memindahkannya ke folder kerja maka kita keluar dari folder kerja dengan command “cd ..” dan masuk ke folder sekolah dengan command “cd sekolah”

- cd ..
- cd sekolah

Memindahkan file portofolio.txt ke folder kerja yaitu dengan command “mv portofolio.txt ~/Videos/riggina/kerja” lalu file portofolio akan berpindah ke folder kerja.

- mv portofolio.txt ~/Videos/riggina/kerja

Lalu kita akan mengecek file portofolio yang kita pindahkan dengan keluar dari folder sekolah dengan command “cd ..” dan masuk ke folder kerja dengan command “cd kerja”, setelah masuk ke folder kerja, lalu dengan command “ls” kita bisa melihat list file di dalam folder kerja, dan terdapat file portofolio.txt yang artinya file tersebut berhasil dipindahkan dari folder sekolah ke folder kerja.

- cd ..
- cd kerja
- ls


*Command Line Interface sesuai perintah soal*

No
Command Line Interface

1
- mkdir riggina

2
- mkdir sekolah
- mkdir kerja 

3
- cd sekolah
- touch ijazah.txt
- nano ijazah.txt
- cat ijazah.txt
- touch portofolio.txt
- nano portofolio.txt
- cat portofolio.txt

4
- cd ..

5
- cd kerja
- touch cv.txt
- nano cv.txt
- cat cv.txt

6
- mv portofolio.txt ~/Videos/riggina/kerja






