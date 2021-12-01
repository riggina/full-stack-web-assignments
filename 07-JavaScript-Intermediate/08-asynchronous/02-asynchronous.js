const isR18Plus = (age) => {
    const truth = age > 18;
    const promise = new Promise((resolve, reject) =>{
        if(truth){
            resolve("anda sudah dewasa")
        }else{
            reject("anda masih dibawah umur");
        }
    })
    return promise
}
const printR18Plus = async () => {
  const underAge = await isR18Plus(10).then(truth => truth).catch(truth => truth);
  

  console.log(underAge);
  console.log(properAge);
}

printR18Plus();