const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'El email no tiene un formato válido']
    },
    password: { type: String, required: true },
    nickname: String,
    picture: String,
    role: { type: String, enum: ["admin", "user"] },
    favoriteSeries: [{ type: mongoose.Types.ObjectId, ref: 'Serie' }]
},
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;