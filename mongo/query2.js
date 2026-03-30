db.applications.aggregate([
  { $match: { current_status: "Offer" } },
  {
    $group: {
      _id: "$student.student_id",
      name: { $first: "$student.name" },
      university: { $first: "$student.university" }
    }
  },
  {
    $project: {
      _id: 0,
      student_id: "$_id",
      name: 1,
      university: 1
    }
  }
]);