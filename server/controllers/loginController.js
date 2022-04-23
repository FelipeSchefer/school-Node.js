exports.getLogin = (req, res, next)=>{
 res.render('login/login',{
  pageTitle: 'Login'
 }) 
}