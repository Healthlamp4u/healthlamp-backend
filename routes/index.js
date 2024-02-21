const userController = require("../controller/userController")
const workoutController = require("../controller/workoutController")

const router = require("express").Router()

// Workout Routes
router.get("/workout/:userId", workoutController.fetchAllWorkouts)
router.post("/today-workout", workoutController.fetchTodaysWorkouts)
router.post("/previous-workout", workoutController.fetchPreviousWorkoutByName)
router.post("/fetch-workout-by-id", workoutController.fetchWorkoutById)
router.post("/create-workout", workoutController.createWorkout)
router.put("/update-workout", workoutController.updateWorkout)
router.delete("/delete-workout/:id", workoutController.deleteWorkout)

// User Routes
router.get('/users', userController.getAllUsers)
router.get('/user/:userId', userController.getUserById)
router.post('/gallery', userController.getUserGallery)
router.put('/update-gallery', userController.updateUserGallery)
router.post('/lab-reports', userController.getUserLabReports)
router.put('/update-lab-reports', userController.updateUserLabReports)
router.post('/fetch-user-by-email', userController.getUserByEmail)
router.post('/create-user', userController.createUser)
router.put('/update-user', userController.updateUser)
router.delete('/delete-user/:userId', userController.deleteUser)

module.exports = router