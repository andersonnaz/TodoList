function authentication(request, response, next) {
    if(request.session.user){
        next();
    }else{
        response.status(404).redirect('/login');
    }
}

module.exports = authentication;