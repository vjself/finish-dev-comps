const tees = [
  {
    id: 0,
    title: "Red-T",
    image:
      "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.popartuk.com%2Febaystore%2Fimage%2Falt%2F465591-back.jpg&f=1",
    description: "This is a Red T."
  },
  {
    id: 1,
    title: "Blue-T",
    image:
      "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FXQ%2FIH%2FMY-29746767%2Ft-shirt-500x500.jpg&f=1",
    description: "This is a Blue T."
  },
  {
    id: 2,
    title: "Green-T",
    image:
      "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fstudent.cityinstitute.edu.au%2F201310249%2Fwp-content%2Fuploads%2Fsites%2F20%2F2016%2F10%2Ft473kellygreen.jpg&f=1",
    description: "This is a Green T."
  }
];

module.exports = {
  getTees(req, res) {
    const selectedT = req.query.tee;
    const tShirt = tees.findIndex(tee => tee.id == selectedT);
    const tee = tees[tShirt];
    let result = (tees[tShirt] = {
      id: tee.id,
      title: tee.title,
      image: tee.image,
      description: tee.description
    });
    res.status(200).send([result]);
  },
  updateDescription(req, res) {
    console.log("Back", req.params);
    const { description } = req.body;
    const updateId = req.params.id;
    const updateIndex = tees.findIndex(tee => tee.id == updateId);
    const tee = tees[updateIndex];
    let result = (tees[updateIndex] = {
      id: tee.id,
      title: tee.title,
      image: tee.image,
      description: description || tee.description
    });
    console.log(result);
    res.status(200).send([result]);
  }
};
