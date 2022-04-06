exports.getExercises = (req, res, next) =>{
 res.render('exercises/exercises',{
  pageTitle: 'Exercises',
  test: 'this is a test',
  activityKey: 0,
  activity: 'Complete with the right verb "to be".',
  question: 'you __ my friend.',
  answer: 'are',
  setAnswer: '',
  result: ''
 })     
}

exports.postExercises = (req, res, next) =>{
    const setAnswer = req.body.setAnswer
    console.log('answer ' + setAnswer)
    
    res.render('exercises/exercises',{
        pageTitle: 'Exercises',
        test: 'this is a test',
        activityKey: 0,
        activity: 'Complete with the right verb "to be".',
        question: 'you __ my friend.',
        answer: 'are',
        setAnswer: '',
        result: setAnswer
       })  
    
    res.redirect('/exercises')
}