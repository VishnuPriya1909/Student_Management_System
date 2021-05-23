var express=require('express');
const router=express.Router();
 const connection=require('../model/database');


   router.get('/student',function(req,res)
   {
          console.log("Hello");
    // res.sendFile(__dirname+'/views/webpage.html');
    res.render("webpage",{er:' '});
    });
    router.post('/validate',function(req,res)
     {
       var email=req.body.Email;
       var pwd=req.body.Password;
      connection.query('select user_email from student_details where  user_email like ? ',[email],(err,results)=>
      {
        //  if(err) throw err;
          if(results)
          {
            connection.query('select User_password from student_details where user_email like ? and User_password like ? ',[email,pwd],(error,ans)=>
            {
                // if(error) throw error;
               if(ans.length!=0)
               {
                  console.log("Valid data ");
                    //   res.send(`<h2>Successful Login</h2><h3>User name: ${email} , Password: ${pwd}</h3>`);
                   connection.query('select student_scoresheet.*,student_details.Gender from student_scoresheet join student_details on student_scoresheet.rollno=student_details.rollno where student_details.user_email = ? ',[email],(err,result)=>
                    {
                        if(err) throw err;
                        if(result)
                        {
                           res.render("mark_sheet",{userdata: result});
                            //    console.log(result);
                        }
                    });  
                  }
                  else
                 {
          console.log("Invalid data");
          // res.send("<h2 style='color:green;text-align:center'>Invalid Data</h2> <h2 style='color:violet;text-align:center'>Signup to continue</h2>");
          res.render("webpage",{er:'Email is not available'});   
        }
             })
         }
      })
       })
      router.get('/signup',function(req,res)
       {
           console.log("welcome");
        // res.sendFile(__dirname+'/views/webpage_signup.html');
        res.render("webpage_signup");
       }
       )
       router.use('/signupValidate',function(req,res)
       {
           console.log('Data is validated');
             var username=req.body.Name1;
             var email=req.body.Email1;
             var roll=req.body.Roll_No1;
             var pwd=req.body.Password1;
             var gender=req.body.gender;
             var birth=req.body.Birth;
         connection.query('insert into student_details values(?,?,?,?,?,?)',[username,email,roll,pwd,gender,birth],(err,results)=>
        {
            if(err) throw err;
         if(results)
        {
            console.log("values inserted");
            res.render("webpage",{er:' '});

        }
    })
   
})
router.get('/admin',function (req,res)
{
  console.log("admin page");
     res.render("adminpage");
});
router.get('/adminlogin',function(req,res)
{
  console.log("admin login");
  res.render("admin_login");
})
router.post('/authenticate',function(req,res)
     {
       var email=req.body.Email;
       var pwd=req.body.Password;
                 if(email=="123")
                  {
                        console.log("Authenticate Over");
                        res.render("Mark_Update",{er:'Welcome Admin'});
                   }
                  else
                 {
                    console.log("Invalid data");
                    res.render("admin_login",{er:'Email is not available'});   
                 }
         });
        router.get('/mark',function(req,res)
        {
            console.log('Data is validated');
            res.render("Mark_Update");
    //           var username=req.body.Name1;
    //           var email=req.body.Email1;
    //           var roll=req.body.Roll_No1;
    //           var pwd=req.body.Password1;
    //           var gender=req.body.gender;
    //       connection.query('insert into mark_scoresheet values(?,?,?,?,?)',[username,email,roll,pwd,gender],(err,results)=>
    //      {
    //          if(err) throw err;
    //       if(results)
    //      {
    //          console.log("values inserted");
    //          res.render("Mark_Update",{er:'Marks Inserted'});
 
    //      }
    //  })
    
 })
  router.use(function(req,res)
{
    // res.sendFile(__dirname+'/views/404page.html');
    res.render("404page",{urls:req.headers.host+req.url});
});
     
module.exports=router;