const express = require('express')
const router = express.Router()

const { getPeople,
    postPeople,
    postPeoplePostman,
    updatePeople,
    deletePeople} = require('../controllers/people')

// //post
// router.post('/',postPeople)
// router.post('/postman',postPeoplePostman)
// //get method
// router.get('/',getPeople)
// //put 
// router.put('/:id',updatePeople)
// //delete method 
// router.delete('/:id',deletePeople )

//anoher way

router.route('/').get(getPeople).post(postPeople)
router.route('/postman').post(postPeoplePostman)
router.route('/:id').put(updatePeople).delete(deletePeople)










module.exports = router