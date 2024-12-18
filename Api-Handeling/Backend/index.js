import express from "express";

const app = express();

const port = 3500;

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: "Ashutosh Kumar Rao",
      subject: "Softwere Developer",
      img: "https://img.freepik.com/free-vector/mickey-minnie-mouse-happy-valentines-card_1048941-118.jpg?t=st=1733633328~exp=1733636928~hmac=3d11e0de833bf13b4598bd945f44f9cfc6615e9504c37c1ab6cbfbd12aa86c6e&w=740",
    },
    {
      id: "Awash Kumar ",
      subject: "Data Analytics",
      img: "https://img.freepik.com/premium-vector/valentine-svg-design-valentine-tshirt-design_981544-1394.jpg?w=740",
    },
    {
      id: "Abhishek Kumar Singh",
      subject: "Work As A WebRtc",
      img: "https://img.freepik.com/free-vector/romantic-message_53876-75498.jpg?t=st=1733633446~exp=1733637046~hmac=a72a18b53abad4a64d18d45480317c190edabd623f0443fb50bd5be1206181ae&w=740",
    },
  ];

  // todo=> http://localhost:3500/api/products?search=awash, aur jo yeha question marks hai usko bolte hai quesry para meter (?=>query para meter)

  if (req.query.search) {
    const filterProducst = products.filter((products) => {
      return products.id.includes(req.query.search);
    });

    return res.send(filterProducst);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 5000);
});

app.listen(port, (req, res) => {
  console.log(`app st ho gya apka is : ${port} per`);
});

//  app.filter(producst=>products.id.includes(req.query.search))
