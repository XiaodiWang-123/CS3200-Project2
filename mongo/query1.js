db.applications.find(
  {},
  {
    _id: 0,
    app_id: 1,
    "student.name": 1,
    "company.company_name": 1,
    "job_posting.title": 1,
    "interview_rounds.round_id": 1,
    "interview_rounds.round_type": 1,
    "interview_rounds.scheduled_date": 1
  }
).sort({ "student.name": 1 });