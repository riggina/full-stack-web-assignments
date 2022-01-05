1.  Buatlah skema untuk kebutuhan data profile pengguna aplikasi Skiljek dan relasi apakah yang tepat     untuk data tersebut? Data yang dibutuhkan adalah:

    - Full Name
    - Email
    - Phone Number
    
    **Relasi *Skiljek* dan Schema**

    Relasi: `One-to-One`

    Schema :

    ```json
        {
            "_id" : "ObjectId('507f1f77bcf86cd799439011')",
            "fullName" : "Harry James Potter",
            "email" : "harrypotter@mail.com",
            "phoneNumber" : "098765432112"
        }
    ```
 
2.  Buatlah skema untuk kebutuhan data alamat pengguna SkilShop dimana alamat yang dapat didaftarkan     maksimal 2 alamat. Jelaskan juga relasi apakah yang tepat untuk data tersebut? Data yang             dibutuhkan adalah:
    - Full Name
    - Phone Number
    - Address (Max 2)
    
    **Relasi *Skilshop* dan Schema**

    Relasi : `One-to-Few`
    
    Scheme :
    
    
    ```json
        {
            "_id" : "ObjectId('507f1f77bcf86cd799439019')",
            "fullName" : "Harry James Potter",
            "phoneNumber" : "098765432112",
            "address" : [
                {"street" : "Hogwarts School", "city" : "London"},
                {"street" : "Azkaban", "city" : "Knowhere"}
            ]
        }
    ```
    
    
3.  Buatlah skema untuk kebutuhan data dari suatu Products yang akan mempunyai banyak varian dari         aplikasi SkilShop. Jelasskan juga relasi apakah yang tepat untuk data tersebut? Contoh data yang     dibutuhkan adalah:
    
    **Product**

    - Product Name: Kaos Polos

    - Brand Name: SkilShirt

    - Varian Pertama

    - Varian Name 1: Kaos Polos Hitam

    - Color: Hitam

    - Quantity: 12

    - Price: Rp 99.000

    - Varian Kedua

    - Varian Name 1: Kaos Polos Navy

    - Color: Navy

    - Quantity: 10

    - Price: Rp 99.000


    **Relasi *Skilshop* dan Schema**

    Relasi : `One-to-Many`
    
    Scheme :
    
    ```json
        {
            "_id" : "ObjectId('507f1f77bcf86cd799439019')",
            "productName" : "Kaos Polos",
            "brandName" : "Skilshop",
            "variants" : [
                {"variantName" : "Kaos Polos Hitam",
                 "color" : "hitam",
                 "quantity" : 12,
                 "price" : "Rp. 99.000"
                },
                {"variantName" : "Kaos Polos Navy",
                 "color" : "Navy",
                 "quantity" : 10,
                 "price" : "Rp. 99.000"
                }
                
            ]
        }
    ```

4.  Buatlah skema untuk kebutuhan data dari suatu aplikasi bioskop bernama SkilFlix. Data yang ingin     ditampilkan adalah List Bioskop pada suatu Kota dan Film yang ditayangkan pada Setiap Bioskop         tersebut. Jelaskan juga relasi apakah yang tepat untuk data tersebut?

    Contoh Data yang dibutuhkan:

    **Cinemas**

    *First Cinema*

    - Cinema Name: CGF
    - Films:
      - Venom 2
      - Spiderman No Way Home
    - Location: Pondok Indah Mall
    
    *Second Cinema*

    - Cinema Name: Cinema31
    - Films:
      - Venom 2
      - Spiderman No Way Home
    - Location: Mall Kelapa Gading


    **Relasi *Skilflix* dan Schema**

    Relasi : `Many-to-Many`
    
    Scheme :
    
    
    ***Cinema***
    ```json
        {
            "_id" : "ObjectId('507f1f77bcf86cd799420019')",
            "cinemaName" : "CGF",
            "location" : "Pondok Indah Mall",
            "films" : [
                "ObjectId('507f1f77bcf86cd799412345')",
                "ObjectId('507f1f77bcf86cd799498765')"   
            ]
        }
        {
            "_id" : "ObjectId('507f1f77bcf86cd799420021')",
            "cinemaName" : "CGF",
            "location" : "Pondok Indah Mall",
            "films" : [
                "ObjectId('507f1f77bcf86cd799412345')",
                "ObjectId('507f1f77bcf86cd799498765')"   
            ]
        }
    ```
    
    ***Movie***
    ```json
        {
            "_id" : "ObjectId('507f1f77bcf86cd799412345')",
            "filmName" : "Venom 2",
            "cinemas" : [
                "ObjectId('507f1f77bcf86cd799420019')",
                "ObjectId('507f1f77bcf86cd799420021')"   
            ]
        }
        {
            "_id" : "ObjectId('507f1f77bcf86cd799498765')",
            "filmName" : "Spiderman No Way Home",
            "cinemas" : [
               "ObjectId('507f1f77bcf86cd799420019')",
                "ObjectId('507f1f77bcf86cd799420021')" 
            ]
        }
    ```
    

