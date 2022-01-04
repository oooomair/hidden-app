const express = require("express")
const app = express()

const mongoose = require("mongoose")

const cors = require('cors')

const asyncHandler = require("express-async-handler")

app.use(cors())

app.use(express.json())

mongoose.connect('mongodb+srv://omair:test123@cluster0.12n48.mongodb.net/hiddendb?retryWrites=true&w=majority', () => {
    console.log('connected to database');
}) 

const storySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: true
    },
    comments: [{
        type: String
    }],
    isComments: {
        type: Boolean,
    }
})

storySchema.index({title: 'text', story: 'text'});

const Story = mongoose.model('Story', storySchema)

app.get('/search', (req, res) => {
    Story.find((err, stories) => {
        if (err) {
            console.log(err);
        } else {
            res.json(stories)
        }
    })
})

app.get('/:id', asyncHandler(async (req, res) => {
    await Story.findById(req.params.id, (err, story) => {
        if (err) {
            console.log(err);
        } else {
            res.json(story)
        }
    })
    .clone()
}))

app.get('/search/:searchTerm', asyncHandler(async (req, res) => {
    const story = await Story.find({$text: {$search: req.params.searchTerm}}, (err, stories) => {
        if (err) {
            console.log(err);
        } else {
            console.log(stories);
        }
    })
    .clone()
    res.json(story)
}))

// post stories 

app.post('/', asyncHandler(async (req, res) => {
    const { title, story, isComments, comments }  = req.body

    const newStory = new Story({
        title: title,
        story: story,
        comments: comments,
        isComments: isComments
    })
    
    await newStory.save(() => {
        console.log('saved')
    })
    res.json(newStory)
}))

app.patch('/:id', asyncHandler(async (req, res) => {

    const { newComment }  = req.body

    console.log(newComment);
  
    await Story.updateOne(
        { _id: req.params.id }, 
        { $push: { comments: newComment } }
    );

    if (!res.ok) {
        return {error: "Something is wrong"}
    }
    
    res.end()
}))

app.listen(8000, () => {
    console.log('server running on port 8000');
})