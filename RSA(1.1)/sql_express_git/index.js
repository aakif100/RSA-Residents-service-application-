const express = require("express");
const app = express() ; 
const path = require("path");


app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


const methodOverride = require('method-override');
app.use(methodOverride('_method'))


// to get value from post request as req.body :
app.use(express.urlencoded({extended:true}));



const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const { v4: uuidv4 } = require('uuid');





let port = 8080 ; 


app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});

app.get("/",(req,res)=>{
    let q = "select count(*) from user";
try{
    connection.query(q,(err,result)=>{
        if (err) throw err ;
        console.log(result[0]["count(*)"]);
        let count = result[0]["count(*)"];
        // res.send(result[0]["count(*)"]);
        res.render("home.ejs", { count });
        

    })
}
catch(err){
    console.log(err);
    
}
    // res.send("working");
})


app.get("/users", (req , res )=>{
    let q = "select * from user" ;
    try{
    connection.query(q,(err,result)=>{
        if(err) throw err ;
        let data = result ; 
        // console.log(data);
        // res.send("success");
        res.render("users.ejs", { data });
         

    })
}


catch(err){
    console.log(err);
    
}
})

app.get("/users/new", (req , res)=>{
    // res.send("success");
    res.render("new.ejs");

});


app.post("/users/new", (req ,  res)=>{
    let { username : nUser , email : nEmail , password : nPassword } = req.body;
    let nid = uuidv4();
    console.log(req.body);
    console.log(nid);
    

    // let q = `insert into user (id,username,email,password) values (${nid}, ${nUser},${nEmail},${nPassword})`;
    let q = `insert into user (id,username,email,password) values ('${nid}', '${nUser}', '${nEmail}', '${nPassword}')`;

    try{
        connection.query(q , (err, result)=>{
            if(err) throw err ;
            // let info = result[0]
            console.log(result);
            // res.send("hello");
            res.redirect("/users");

            // if( nUser == result.username ){
            //     res.send("username already exists");
            // }
            // else if( nEmail == result.email){
            //     res.send("email already exists");

            // }
            
        })
    }
    catch(err){
        console.log(err);
        res.send("username or email_id already exists...")
        
        
    }

    
})

app.get("/users/:id/delete", (req , res)=>{
    let { id } = req.params ;

    let q = ` delete from user where id = '${id}' `;

    connection.query(q,(err,result)=>{
        if(err) throw err ;
        console.log(q);
        res.redirect("/users");


    })
    

})



// here edit interface is created 
app.get("/users/:id/edit" , (req , res)=>{
    let { id } = req.params;
    console.log(id);
    let q = `select * from user where id = '${id}'`;
    // console.log(q);
    try{
        connection.query(q , (err , result)=>{
            if(err) throw err ;
            console.log(result);
            let info = result[0];
            res.render("edit.ejs" , { info });

            
        })
    }
        catch(err){
        console.log(err);
        
    }
    
})

// here the edited route is created to db using patch : 

app.patch("/users/:id" , (req , res)=>{
    let { id } = req.params;
    let { password : formPass , username : newUsername} = req.body;
    // console.log(value);
    
    // res.send("updated");


    let q = `select * from user where id = '${id}'`;
    // console.log(q);
    try{
        connection.query(q , (err , result)=>{
            if(err) throw err ;
            console.log(result);
            let info = result[0];

            if( formPass != info.password){
                res.send("wrong password");
            }

            else{
                // res.send("correct password");
                let q2 = `update user set username = '${newUsername}' where id = '${id}' `;

                connection.query(q2 , (err , result)=>{
                    if(err) throw err ;
                    // res.send(result);
                    console.log(result);

                    res.redirect("/users");
                    
                })
            }
            // res.render("edit.ejs" , { info });

            
        })
    }
        catch(err){
        console.log(err);
        
    }

    })

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password : "2002"
  });



  let  getRandomUser = () => {
    return [
    faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
       faker.internet.email(),
    //   avatar: faker.image.avatar(),
       faker.internet.password(),
    //   birthdate: faker.date.birthdate(),
    //   registeredAt: faker.date.past(),
    ];
  }

  console.log(getRandomUser());
  




  //   for running query : 





// let q = "insert into user (id, username, email, password) values ? ";

// let data = [];

// for(i=0;i<=100;i++){
//     // console.log(getRandomUser());
//     data.push(getRandomUser());
    
// }

// let users = [[456,"aak.xif1","aakif1@gmail.com","aakif12"],[789,"aak.xif2","aakif2@gmail.com","aakif1"]];









// try{
//   connection.query(q, [data], (err , result)=>{
//     if (err) throw err;
//     console.log(result);
    
//   });
// }
// catch(err){
//     console.log(err);
    
// }

// connection.end();




