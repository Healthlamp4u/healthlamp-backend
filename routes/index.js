const adminController = require("../controller/adminController")
const firebaseAdmin = require("../controller/firebaseAdminController")
const GymController = require("../controller/gymController")
const notificationController = require("../controller/notificationController")
const TrainerController = require("../controller/trainerController")
const trialsController = require("../controller/trialsController")
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

// Gym Routes
router.get('/gyms', GymController.getAllGyms)
router.get('/gym/:gymId', GymController.getGymById)
router.post('/fetch-gym-by-email', GymController.getGymByEmail)
router.post('/create-gym', GymController.createGym)
router.put('/update-gym', GymController.updateGym)
router.delete('/delete-gym/:gymId', GymController.deleteGym)

// Trials Routes
router.get('/trials/gym/:gymId', trialsController.getTrialsByGymId)
router.get('/trials/user/:userId', trialsController.getTrialsByUserId)
router.post('/existing-trial', trialsController.checkExistingTrials)
router.post('/create-trial', trialsController.createTrial)
router.put('/update-trial', trialsController.updateTrial)
router.delete('/delete-trial/:trialId', trialsController.deleteTrial)

// Notification Routes
router.get('/notifications/:recipientId', notificationController.getNotificationByRecipientId)
router.post('/create-notification', notificationController.createNotification)
router.delete('/delete-notification/:id', notificationController.deleteNotification)

// Admin Routes
router.get('/admin/:id', adminController.getAdminById)
router.post('/fetch-admin-by-email', adminController.getAdminByEmail)
router.post('/create-admin', adminController.createAdmin)
router.put('/update-admin', adminController.updateAdmin)
router.delete('/delete-admin/:id', adminController.deleteAdmin)

// Firebase Admin Routes
router.get('/firebase-get-users', firebaseAdmin.getUsers)
router.post('/firebase-get-user-by-email', firebaseAdmin.getUserByEmail)
router.post('/firebase-delete-user', firebaseAdmin.deleteUser)

// Trainer Routes
router.get('/trainers', TrainerController.getAllTrainers)
router.get('/trainer/:trainerId', TrainerController.getTrainerById)
router.post('/fetch-trainer-by-email', TrainerController.getTrainerByEmail)
router.post('/create-trainer', TrainerController.createTrainer)
router.put('/update-trainer', TrainerController.updateTrainer)
router.delete('/delete-trainer/:trainerId', TrainerController.deleteTrainer)

module.exports = router