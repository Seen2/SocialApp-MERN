const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, //refrencing to other collection
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  company: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    require: true
  },
  skills: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      from: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      decription: {
        type: String
      }
    }
  ],
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      feildofstudy: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      from: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      decription: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    linkedind: {
      type: String
    },
    instagram: {
      type: String
    },
    facebook: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = {
  Profile: mongoose.model("profile", profileSchema)
};
