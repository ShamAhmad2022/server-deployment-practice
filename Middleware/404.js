'use strict';

function pageNotFound(req, res){
    res.status(404).json({
        code: 404,
        message: 'Page Not Found!',
        route: req.originalUrl
    })
}

module.exports = pageNotFound;