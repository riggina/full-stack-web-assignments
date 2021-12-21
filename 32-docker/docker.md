Jelaskan apa yang dimaksud dengan container pada docker !
= Container pada docker merupakan wadah yang mengemas dan menjalankan aplikasi. Container mencakup code, runtime, system tools, dan setting. Container hanya bisa mengakses resource yang telah ditentukan dalam docker image.


Jelaskan apa perbedaan antara konsep container dengan virtual machine !
= Perbedaan antara container dan virtual machine.
    > Virtual machine memakan banyak resource dan waktu untuk booting karena melakukan virtualisasi pada hardwarenya.
    > Container melakukan virtualisasi pada host OS nya.


Apa yang dimaksud dengan docker file ?
= Skrip yang berisi atau terdiri dari serangkaian perintah, intruksi yang akan dieksekusi secara otomatisasi dan berurutan untuk membangun sebuah image. Blueprint untuk membuat image.


Apa yang dimaksud dengan docker registery ?
= Sebuah repository atau sebuah penyimpanan image terpusat, seperti sebuah tempat yang tepat untuk menyimpan images. Sistem docker register mirip dengan sistem git. Dimana bisa pull atau push.


Jelaskan bagaimana cara untuk menjalankan lebih dari 1 container secara bersamaan dan saling terhubung !
= Dengan menggunakan docker compose. Pertama membuat file dockercompose.yml pada project, lalu tuliskan beberapa perintah dan jalankan menggunakan perintah (docker-compose dockercompose.yml up)


