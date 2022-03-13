const func = async () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Tamamlandı!"), 2000);
    });
  
    let result = await promise; // Promise dönene kadar sonuç bekleniyor.
  
    console.log(result); // "Tamamlandı!"
  }
  
  func();