const HttpCodes = require('http-status-codes')

var fruits = []

function getFruits(req, res){
    return res.status(HttpCodes.StatusCodes.OK).json({fruits})
}

function postFruits(req, res){
    let fruit = req.body.fruit
    console.log(fruit)
    fruits = [...fruits, fruit]
    return res.status(HttpCodes.StatusCodes.CREATED).json({success:true})
}

function patchFruits(req, res){
    return res.status(HttpCodes.StatusCodes.OK).json({fruits})
}

function deleteFruits(req, res){
    return res.status(HttpCodes.StatusCodes.OK).json({fruits
    })
}

module.exports = {
    getFruits, postFruits, patchFruits, deleteFruits
}