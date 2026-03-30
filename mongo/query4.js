db.applications.find(
  {
    $and: [
      {
        $or: [
          { "company.industry": "Technology" },
          { "company.industry": "FinTech" }
        ]
      },
      {
        current_status: { $nin: ["Rejected", "Withdrawn"] }
      }
    ]
  },
  {
    _id: 0,
    app_id: 1,
    "student.name": 1,
    "company.company_name": 1,
    "company.industry": 1,
    "job_posting.title": 1,
    current_status: 1
  }
).sort({ "student.name": 1, "company.company_name": 1 });