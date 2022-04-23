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
    const answer = answer 

    console.log('setAnswer ' + setAnswer)
    console.log('answer ' + answer)
    if(setAnswer == answer){
        console.log('You are correct!')
    }
    else{
        console.log('You are wrong!')
    }
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