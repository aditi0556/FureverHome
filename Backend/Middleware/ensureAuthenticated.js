function ensureAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }else{
        return res.status(404).json({error:"User not authenticated"});
    }
}
export default ensureAuthenticated;
