function authAdmin(request, response, next) {
    if(request.session.user.admin){
        next();
    }else{
        response.status(404).redirect('/');
    }
}

module.exports = authAdmin;