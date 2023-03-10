const jwt = require("jsonwebtoken")
const bookModel = require("../models/bookModel")
const mongoose = require('mongoose')

const authentication = async function (req, res, next) {
    try {
        let token = req.headers["x-api-key"];
        if (!token) return res.status(401).send({ status: false, msg: "token must be present in the request header" })//uthiticaton
        let decodedtoken = jwt.verify(token, "Project-3/group65")
        if (!decodedtoken) return res.status(401).send({ status: false, msg: "token is invalid" })
        else next()
    }
    catch (error) {
        console.log(error)
        return res.status(500).send({ msg: error.message })
    }
}

         


const authorisation  = async function (req, res, next) {
    try {
      let token = req.headers["x-api-key"] //header key

      if (!token) return res.status(401).send({ status: false, msg: "token must be present in the request header" })//uthiticaton
      let decodedtoken = jwt.verify(token, "Project-3/group65")
      req.decodedToken == decodedtoken // match
     // console.log(decodedtoken.userId,req.body.userId)
      if(decodedtoken.userId != req.body.userId){ 
       return res.status(401).send({ status: false, msg: "you are not authorised!!!" });
    }
    next()
  }
      catch (err) {
        return res.status(500).send({ msg: err.message })
       }
  }
            
            
              
              
 



module.exports.authentication = authentication;
module.exports.authorisation = authorisation;