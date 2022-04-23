const fs = require('fs')
const path = require('path')

module.exports = class Exercise {
 constructor(activityKey, activity, question, answer){
  this.activityKey = activityKey
  this.activity = activity
  this.question = question
  this.answer = answer
 }
}


