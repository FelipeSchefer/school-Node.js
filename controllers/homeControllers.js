exports.getHome = (req, res, next) =>{
 res.render('home/home',{
  pageTitle: 'Home',
  test: 'This is the home page'
 })
}