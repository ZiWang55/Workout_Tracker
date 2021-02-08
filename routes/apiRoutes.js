const db = require('../models')

module.exports = function (app) {
    //Get workouts
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            dbWorkout.forEach(workout => {
                var total = 0
                workout.exercises.forEach(e => {
                    total += e.duration
                })
                workout.totalDuration = total
            })
            res.json(dbWorkout)
        }).catch(err => {
            res.json(err)
        })
    })
    //Add exercise
    app.put('/api/workouts/:id', (req, res) => {
        db.Workout.findOneAndUpdate(
            {_id: req.params.id},
            {
                $inc: { totalDuraction: req.body.duration},
                $push: {exercises: req.body}
            },
            {new:true}).then(dbWorkout => {
                res.json(dbWorkout)
            }).catch(err => {
                res.json(err)
            })
    })

    //Create workout
    app.post('/api/workouts', ({body}, res)=>{
        db.Workout.create(body).then((dbWorkout => {
            res.json(dbWorkout)
        })).catch(err => {
            res.json(err)
        })
    })

    //Get workouts
    app.get('/api/workouts/range', (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            console.log('Here are all the workouts!')
            console.log(dbWorkout)
            res.json(dbWorkout)
        }).catch(err => {
            res.json(err)
        })
    })
}
