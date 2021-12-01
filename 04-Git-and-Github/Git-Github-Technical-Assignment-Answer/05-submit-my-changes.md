Simulasikan bagaimana proses kita dalam melakukan clone suatu project pada GitHub hingga melakukan Pull Request untuk perubahan yang ingin kita submit.

1. Fork repository GitHub https://github.com/impactbyte/tech4impact-students-bio.git menggunakan akun Github kamu
   - gh repo fork (link gh)
   - https://drive.google.com/file/d/1IOfQ-mLkcKshdb8R4mx7UFEMdO-IpK8d/view?usp=sharing
2. Clone remote repository dari hasil fork tersebut. Jangan clone dari repository originalnya.
   - gh repo clone (link gh)
3. Buatlah branch baru dengan nama lengkap kamu. Misalnya david-winalda. Jangan melakukan perubahan pada branch master.
   - git branch rigginaadrianioceania
4. Checkout ke dalam branch tersebut yang telah kamu buat
   - git checkout rigginaadrianipceania
5. Buatlah 1 file format .md dengan nama lengkap kamu. Contoh davidwinalda.md
   - touch rigginaadrianioceania.md
6. Isi file tersebut davidwinalda.md dengan konten di bawah ini:
   > Nama Lengkap: David Winalda
   > Umur: 27
   > Pesan yang ingin disampaikan: Semangat untuk kamu yang disana sedang berjuang
   - nano rigginaadrianioceania.md
   - https://drive.google.com/file/d/1a82Imzq6p_x4FGkfDm8K9BDP8E65gRhh/view?usp=sharing
7. Masukkan file .md tersebut ke dalam staging area
   - git add rigginaadrianioceania.md
8. Commit dengan memberikan pesan nama file .md kamu
   - git commit -m "rigginaadrianioceania.md"
9. Merge branch yang telah kamu buat ke dalam branch master
   - git merge rigginaadrianioceania
10. Push ke dalam branch master
   - git push -u origin master
11. Lakukan pull request dari GitHub Repository yang telah kamu fork untuk digabungkan ke dalam branch master pada GitHub Repository aslinya.
   - Pull request
   - https://drive.google.com/file/d/1V65tXyO6mOLrLOW-nee5J5VRPV7KTQwQ/view?usp=sharing
