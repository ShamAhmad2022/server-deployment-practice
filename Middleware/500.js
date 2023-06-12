'use strict';

module.exports = (err, req, res, next)=>{
    res.status(500).json({
        code:500,
        route: req.originalUrl,
        query: req.query,
        body: req.body,
        message: `Server error: ${err.message}`
    })
}

// module.exports = (error, req, res, next) => {
//     res.status(500).json({
//       code: 500,
//       route: req.originalUrl,
//       query: req.query,
//       body: req.body,
//       mesasge: `SERVER ERROR: ${error.message}`
//     })
//   }