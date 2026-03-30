db.applications.updateOne(
  { app_id: 2 },
  { $set: { isArchived: true } }
);