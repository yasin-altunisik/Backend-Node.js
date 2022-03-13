const fs = require ("fs");

fs.writeFile("employees.json",'{"name": "Employee 1 Name", "salary": 2000}',"utf-8",(err) => {
    if(err){
        console.log(err)
    }else{
        console.log("Dosya oluşturuldu ve data yazıldı.")
    }
})

fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 4000}', 'utf8', (err) => {
    if (err){
        console.log(err);
    } else {
        console.log("Dosyaya ekleme yapıldı")
    }
});

fs.readFile("employees.json","utf-8",(err, data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data)
        console.log("Dosya okundu")
    }
})


fs.unlink('employees.json', (err) => {
    if (err){
        console.log(err)
    }else{
        console.log("Dosya silindi.")
    }
});
