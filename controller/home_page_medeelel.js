const Home_page_medeelel = require("../model/home_page_medeelel");

exports.getHome_Page_Medeelels = async (req, res, next) => {
  try {
    const home_page_medeelel = await Home_page_medeelel.find();
    res.status(200).json({
      success: true,
      data: home_page_medeelel,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
    });
  }
};

exports.getHome_Page_Medeelel = async (req, res, next) => {
  try {
    const home_page_medeelel = await Home_page_medeelel.findById(req.params.id);
    if (!home_page_medeelel) {
      return res.status(400).json({
        success: false,
        error: req.params.id + "Ямар нэг мэдээлэл байхгүй байна.",
      });
    }
    res.status(200).json({
      success: true,
      data: home_page_medeelel,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

exports.createHome_Page_Medeelel = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const Medeelel = new Home_page_medeelel({
      name: name,
      description: description,
    });
    const medeelel = await Medeelel.save();
    res.status(500).json({
      success: true,
      data: medeelel,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateHome_Page_Medeelel = async (req, res, next) => {
  try {
    const { id } = req.params.id;
    const { name, description } = req.body;
    const new_Medeelel_Update = await Home_page_medeelel.findByIdAndUpdate(id);
    if (name) {
      new_Medeelel_Update.name = name;
      new_Medeelel_Update.description = description;
    }
    const { iuytr } = await Home_page_medeelel.save();
    if (iuytr) {
      res.json({
        success: true,
      });
    }
  } catch (err) {
    next(err);
    console.log(err);
    res.json({ success: false });
  }
};

exports.deleteHome_Page_Medeelel = async (req, res, next) => {
  const deletehome_page_medeelel = await Home_page_medeelel.findByIdAndRemove(
    req.params.id
  );
  if (deletehome_page_medeelel) {
    return res.status(400).json({
      success: false,
      error: req.params.id + "Id тай мэдээлэл устсан байна !!!",
    });
  }
};
