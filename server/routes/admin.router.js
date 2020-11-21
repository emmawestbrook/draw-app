const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

//Router to get all users
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route for all users to be displayed on admin view
  let queryString = ` SELECT "id","username","auth_level" from "user"
   ORDER BY "id" ASC
   `;
  //server side auth checking to disallow users with lower perms from using these routes
  if (req.user.auth_level === 'superAdmin') {
    pool.query(queryString).then((result) => {
      res.send(result.rows);
    });
  } else {
    res.sendStatus(403);
  }
});
//Delete user at a  specific ID
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  if (req.user.auth_level === 'superAdmin') {
    //server side auth checking to disallow users with lower perms from using these routes
    let queryString = `  DELETE FROM "user" WHERE "id" = $1;
   `;
    pool
      .query(queryString, [req.params.id])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log('We have an error in Auth delete route', error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});
//Router to change auth levels for users
router.put('/', rejectUnauthenticated, (req, res) => {
  //server side auth checking to disallow users with lower perms from using these routes
  if (req.user.auth_level === 'superAdmin') {
    let queryString = ` UPDATE "user"
  SET "username" = $1,
  "auth_level" = $2
WHERE "id" = $3;
   `;
    pool
      .query(queryString, [req.body.username, req.body.auth_level, req.body.id])
      .then((result) => {
        res.sendStatus(200);
      })
      .catch((error) => {
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
