What is the difference between git reset and git revert. 
- Perbedaan antara git reset dan git revert terlihat dari pengaruh penggunaannya. Git reset sendiri merupakan salah 
satu command yang termasuk berbahaya karena ketika kita melakukan reset tidak bisa mengembalikannya lagi.
Nah jika git revert, dia bisa mengembalikkan lagi commit yg telah di revert dengan menggabungkan commit yang lama
dengan commit terakhir
When would you use one over the other?
- Git revert, ketika mau menggabungkan commit yang awal ke commit yang terakhir.

What is the difference between git merge and git rebase.
- Walaupun memiliki tujuan yang sama yaitu mengintegrasikan perubahan dari satu branch ke yang lain.
Namun, terdapat perbedaan. Git Merge dalam penggabungannya terdapat commit baru untuk menggabungkan branch yang lain.
Pada Git Rebase memindahkan semua branch baru ke cabang utama. Namun, seperti bercabang dalam branch utama yang bar

When would you use one over the other?
- Ketika memberikan pull request terhadap orang lain. Dan orang tersebut menambahkan branch baru dan mau menggabungkan branch
milik kit dan bisa menggunakan Git Merge / Git Rebase.

What is the difference between git stash pop and git stash apply.
- Perbedaan dari git stash pop dan git stash apply. Ketika kita menggunakan git stash apply stash yang baru di restore ke sumber dan tidak akan dihapus dari stack, sementara ketika menggunakan git stash pop, stash akan hilang
When would you use one over the other?
- Ketika terdapat masalah di branch lain dan project di branch yang kita kerjakan belum selesai maka kita bisa menggunakan git stash.

What kinds of things can you do in interactive mode when rebasing?
- Dapat mengubah commit di berbagai cara seperti editing, deleting, dan squashing.
