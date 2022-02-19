exports.getExercises = (req, res, next) =>{
 res.render('exercises/exercises',{
  pageTitle: 'Exercises',
  test: 'this is a test',
  activityKey: 0,
  activity: 'Complete with the right verb "to be".',
  question: 'you __ my friend.',
  answer: 'are',
  result: ''
 })
}