const adminController = require("../controller/adminController")
const EnquiryController = require("../controller/EnquiryController")
const firebaseAdmin = require("../controller/firebaseAdminController")
const GymApplicationController = require("../controller/gymApplicationController")
const GymController = require("../controller/gymController")
const notificationController = require("../controller/notificationController")
const OffersController = require("../controller/offersController")
const TrainerController = require("../controller/trainerController")
const trialsController = require("../controller/trialsController")
const UserApplicationController = require("../controller/userApplicationController")
const userController = require("../controller/userController")
const workoutController = require("../controller/workoutController")

const router = require("express").Router()

// Test Routes
router.get("/test", (req, res) => {
    res.status(200).send('Working fine!')
})

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
router.get('/get-trainer-by-gym/:gymId', TrainerController.getTrainerByGymId)
router.post('/fetch-trainer-by-email', TrainerController.getTrainerByEmail)
router.post('/create-trainer', TrainerController.createTrainer)
router.put('/update-trainer', TrainerController.updateTrainer)
router.delete('/delete-trainer/:trainerId', TrainerController.deleteTrainer)

// Gym Applications
router.get('/gym-applications/:gymId', GymApplicationController.getApplicationByGymId)
router.post('/create-gym-application', GymApplicationController.createGymApplication)
router.post('/existing-application', GymApplicationController.checkExistingApplication)
router.put('/update-gym-application', GymApplicationController.updateGymApplication)
router.delete('/delete-gym-application/:applicationId', GymApplicationController.deleteGymApplication)

// Offers
router.get('/offers', OffersController.getAllOffers)
router.get('/offers/:id', OffersController.getOfferById)
router.post('/create-offer', OffersController.createOffer)
router.put('/update-offer', OffersController.updateOffer)
router.delete('/delete-offer/:offerId', OffersController.deleteOffer)

// User Applications
router.get('/user-applications/:gymId', UserApplicationController.getApplicationByGymId)
router.post('/create-user-application', UserApplicationController.createUserApplication)
router.post('/existing-user-application', UserApplicationController.checkExistingApplication)
router.put('/update-user-application', UserApplicationController.updateUserApplication)
router.delete('/delete-user-application/:applicationId', UserApplicationController.deleteUserApplication)

// Enquiry
router.get('/enquiries/:id', EnquiryController.getEnquiryById)
router.get('/get-enquiry-by-sender/:id', EnquiryController.getEnquiryBySenderrId)
router.get('/get-enquiry-by-receiver/:id', EnquiryController.getEnquiryByReceiverId)
router.post('/create-enquiry', EnquiryController.createEnquiry)
router.put('/update-enquiry', EnquiryController.updateEnquiry)
router.delete('/delete-enquiry/:id', EnquiryController.deleteEnquiry)

module.exports = router