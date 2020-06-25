const router = require('express').Router();
let Study = require('../models/userStudy.model');

router.route('/').get((req, res) => {
    Study.find()
      .then(study => res.json(study))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/add').post((req, res) => {
    const subject = req.body.subject;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
  
    const newStudy = new Study({
      subject,
      duration,
      date,
    });
  
    newStudy.save()
    .then(() => res.json('Study Session Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;