// TULIS ANALISA ANDA DIBAWAH
// 1. Apa yang akan terjadi apabila kita jalankan baris kode dibawah?
// 2. Apakah hasil dari fun1 dan fun2 itu sama?
// 3. Buatlah sebuah alasan dari poin ke-2, mengapa baris kode tersebut menampilkan hasil baik itu sama ataupun tidak.
const obj = {
    fun1: function() {
      console.log("fun1", this);
    },
    fun2: () => {
      console.log("fun2", this);
    }
  };
  
  obj.fun1();
  obj.fun2();

///ANALISA
////1. Ketika kita menjalankan kode tersebut akan menampilkan fun1 yang berisi function 1 &
///    function 2. Kedua nya berisi object. Dan fun 2 berisi blocks scope kosong.
////2. Berbeda, karena fun1 berisi function 1 dan 2, sedangkan fun2 yang merupakan arrow func
///    mengembalikan scope kosong.
////3. Karena arrow function pada fun2 tidak memiliki this sendiri.



// 1. Apa itu Encapsulation? Mengapa kita membutuhkannya?
/// = Encapsulation adalah cara untuk membatasi akses langsung
///// ke properti atau method dari sebuah objek. Kenapa membutuhkan
///// Encapsulation karena agar data tidak dapat ubah sembarangan.

// 2. Apa itu Abstraction? Mengapa kita membutuhkannya?
/// = Abstraction adalah sebuah teknik untuk menyembunyikan detail tertentu
///// dari sebuah objek/method dan hanya menampilkan fungsionalitas atau
///// fitur penting dari objek. Mengapa membutuhkan abstraction? karena supaya
///// kita tau fungsi utama atau pokok dari sebuah method.

// 3. Apa itu Inheritance? Mengapa kita membutuhkannya?
/// = Inheritance dalam OOP merupakan sebuah proses dimana sebuah class mewariskan
///// property dan methodnya ke class lain atau childnya. Mengapa membutuhkannya? karena
///// ketika kita menerapkan inheritance kita bisa memanggil kembali property dari class sebelumnya.

// 4. Apa itu Polymorpishm? Mengapa kita membutuhkannya?
/// = Polymorpishm merupakan kemampuan dari suatu objek untuk memiliki banyak bentuk




class Phone {
    constructor(brand, storage, ram){
        this.brand = brand;
        this.storage = storage;
        this.ram = ram;
    }
    setBrandName(brand){
        this.brand = brand;
    }
    getBrandName(){
        return `${this.brand}`
    }
    setSpecification(storage, ram){
        this.storage = storage;
        this.ram = ram;
    }
    printSpecification(){
        console.log(`Ponsel ini memiliki storage: ${this.storage} dan ${this.ram}`); 
    }
}

const phone = new Phone("Skilvul Mobile co", 64, 4);

console.log(phone.getBrandName());
phone.setBrandName("SM.co")
console.log(phone.getBrandName());

phone.printSpecification();
phone.setSpecification(32, 2);
phone.printSpecification();





class Student {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.courseOfferings = [];
    }
    
    takeNewCourse() {}
    
    takeATest() {}
    
    courseAttendance() {}
  }
  
  class CourseOffering {}
  
  class Course {}
  
  
  const biology = new Course("biology", 10, 3);
  const physics = new Course("physics", 10, 2);
  
  const johnWatson = new Student("john watson", "male");
  
  johnWatson.takeNewCourse(biology);
  johnWatson.takeNewCourse(physics);
  
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(physics);
  johnWatson.courseAttendance(biology);
  johnWatson.courseAttendance(physics);
  
  console.log(biology.quota);
  console.log(physics.quota);
  
  johnWatson.takeATest(biology);
  johnWatson.takeATest(physics);
  
  console.log(johnWatson.courseOfferings);
