const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

router.get(
  ["/", "/home"],
  asyncHandler(async (req, res) => {
    const locals = {
      title: "Home",
    };
    const date = await Post.find({});
    res.render("index", { locals, date, layout: mainLayout });
  })
);

/**
 * 게시물 상세보기
 * GET /post/:id
 */

router.get(
  "/post/:id",
  asyncHandler(async (req, res) => {
    const data = await Post.findOne({ _id: req.params.id });
    res.render("post", { data, layout: mainLayout });
  })
);

router.get("/about", (req, res) => {
  res.render("about", { layout: mainLayout });
});

router.get("/contact", (req, res) => {
  res.render("contact", { layout: mainLayout });
});

module.exports = router;

// Post.insertMany( [
//   {
//   title: "제목-1",
//   body: "내용-1 Lorem ipsum dolor, sit amet consectetur elit. Iure a inventore officia magni fugit dignissimos animi quas explicabo! Rerum voluptatibus asperiores illum ducimus autem itaque unde aliquid lavorum numquam. Hic!"
// },
// {
//   title: "제목-2",
//   body: "내용-2 Lorem ipsum dolor, sit amet consectetur elit. Iure a inventore officia magni fugit dignissimos animi quas explicabo! Rerum voluptatibus asperiores illum ducimus autem itaque unde aliquid lavorum numquam. Hic!"
// },
// {
//   title: "제목-3",
//   body: "내용-3 Lorem ipsum dolor, sit amet consectetur elit. Iure a inventore officia magni fugit dignissimos animi quas explicabo! Rerum voluptatibus asperiores illum ducimus autem itaque unde aliquid lavorum numquam. Hic!"
// },  {
//   title: "제목-4",
//   body: "내용-4 Lorem ipsum dolor, sit amet consectetur elit. Iure a inventore officia magni fugit dignissimos animi quas explicabo! Rerum voluptatibus asperiores illum ducimus autem itaque unde aliquid lavorum numquam. Hic!"
// },  {
//   title: "제목-5",
//   body: "내용-5 Lorem ipsum dolor, sit amet consectetur elit. Iure a inventore officia magni fugit dignissimos animi quas explicabo! Rerum voluptatibus asperiores illum ducimus autem itaque unde aliquid lavorum numquam. Hic!"
// },  {
//   title: "제목-6",
//   body: "내용-6 Lorem ipsum dolor, sit amet consectetur elit. Iure a inventore officia magni fugit dignissimos animi quas explicabo! Rerum voluptatibus asperiores illum ducimus autem itaque unde aliquid lavorum numquam. Hic!"
// }

// ]);
