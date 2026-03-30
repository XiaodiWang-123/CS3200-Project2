db.applications.aggregate([
  {
    $group: {
      _id: "$student.student_id",
      student_name: { $first: "$student.name" },
      total_applications: { $sum: 1 }
    }
  },
  {
    $match: {
      total_applications: { $gt: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      student_id: "$_id",
      student_name: 1,
      total_applications: 1
    }
  }
]);