import express from "express";
const app =express();
const port=3000;


app.get("/", (req, res) => {
//   console.log(req.rawHeaders);
  res.send("<h1>Hello</h1>");
});
app.get("/about", (req, res) => {
    //   console.log(req.rawHeaders);
  res.send("<h1>About Me</h1>");
});

app.get("/contact", (req, res) => {
        //   console.log(req.rawHeaders);
  res.send("<h1>my num is:</h1> <p>01318879104</p>");
});
            

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});