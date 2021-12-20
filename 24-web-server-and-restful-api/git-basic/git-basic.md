1) Apa perbedaan antara static web server dan dynamic web server?
2) Jelaskan arsitektur static site dan dynamic site
3) Apa saja yang dapat kita buat pada sisi server?
4) Mohon jelaskan apa itu RESTful?
5) Apa saja jenis HTTP verbs yang ada (jelaskan fungsinya masing-masing)
6) Apa fungsi dari Response Codes?

1)  
    > Static web server itu sendiri merupakan server web yang sangat kecil dan cocok untuk melayani file atau aset pada web statis.

    > Dynamic web server terdiri dari static web server yang ditambahkan dengan software. Seperti aplikasi dan database. Dimanis karena server memperbaharui file yang di hosting sebelum sending content ke browser melalui server HTTP.

2)  
    > Arsitektur static site itu sendiri berpondasi pada 3 pondasi. HTML,CSS, dan Javascript yang langsung di kirim ke browser. Tidak ada computasi yang terlibat dalam create page yang dikirim ke user, dan juga tidak ada database yang di perlukan.

    > Arsitektur Dynamic site ,web server didalam arsitektur terdapat suatu gateway yang bernama Server Sid Scripting yang merupakan sebuah teknologi scripting atau pemrograman web dimana script (program) dikompilasi atau di terjemahkan di server. Dengan adanya teknologi ini, memungkinan untuk menghasilkan halaman web yang dinamis.

3) 
    > Penyimpanan Cookies dan data session.
    > Control akses, misalkan hanya admin saja yang bisa mengakses, atau hanya user saja yang bisa mengaksesnya.

4) RESTful merupakan style arsitektur dari API yang menggunakan HTTP request untuk mengakses data dan menggunakan datanya. Data bisa menggunakan request GET, PUT, POST, dan DELETE.

5) HTTP verbs
    > GET, digunakan untuk meminta data dari sumber daya tertentu.
    > PUT, mengirim data ke server untuk membuat / memperbarui sumber daya. Dan bersifat idempoten.
    > POST, untuk mengirim data ke server, dan server membuat / memperbarui sumber daya.
    > DELETE, untuk menghapus sumber daya yang ditentukan.
    > PATCH, untuk mengupdate sumber daya.

6) Fungsi dari response code yaitu agar client dapat mengetahui yang terjadi dengan web yang dia gunakan. Misalkan terjadi error atau status lainnya dapat mengembalikan code seperti 403 forbidden, 500 Internal server error dan code lainnya sesuai status kebutuhan.


