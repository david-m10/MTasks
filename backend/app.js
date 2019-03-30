const express = require('express');

const app = express();

app.use('/api/tasks', (req, res, next) => {
  const tasks = [
    {
      id: 1,
      title: 'Learn Angular and Node',
    },
    {
      id: 2,
      title: 'Clean up the room',
    },
  ];

  res.status(200).json({
    message: 'Tasks fetched successfully!',
    tasks
  });
})

module.exports = app;
