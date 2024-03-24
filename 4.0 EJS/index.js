import express from "express";
const app=express();
const port=3000;

app.get("/", (req, res) => {
    //making dynamic using js
    const today = new Date();
    const day=today.getDay();
    // console.log(day);

    let type="A weekday";
    let adv="its time to work hard";

    if(day=== 0 || day=== 6){
         type="A weekend";
         adv="its time to rest";
    }
    //for ejs we wil use res.render instead of res.send
    res.render("index.ejs", {
        dayType: type,
        advice: adv,
      });

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});