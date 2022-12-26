const mongoose = require('mongoose');

const serieSchema = new mongoose.Schema({
    title: { type: String, unique: true },
    director: { type: String},
    year: { type: Number, min: 1895, max: 2023 },
    genre: { type: [String], enum: ['Action', 'Adventure', 'Animated', 'Crime', 'Comedy', 'Drama', 'Fantasy', 'Historical', 'Horror', 'Noir', 'Science-fiction', 'Thriller', 'War', 'Western'] },
    picture: String,
    seasons: {type: Number},
    platform: {type: String, enum:['HBO', 'Netflix','Disney', 'Amazon', 'A3Player']},
    synopsis: {type: String},
    favoriteCount : Number
},
{
    timestamps: true
});


const Serie = mongoose.model('Serie', serieSchema);
module.exports = Serie;

