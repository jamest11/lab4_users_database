const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    minLength: [4, 'Username must be at least 4 characters']
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /(?!.*[-_.]{2}.*)^[a-zA-Z\d][a-zA-Z\d._-]+[a-zA-Z\d]@([a-zA-Z\d][a-zA-Z\d-]*[a-zA-Z\d]\.){1,}[a-z]{2,}$/.test(v),
      message: 'Invalid email address'
    }
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    suite: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
      validate: {
        validator: (v) => /^[a-zA-Z ]+$/.test(v),
        message: 'Invalid city name'
      }
    },
    zipcode: {
      type: String,
      required: true,
      validate: {
        validator: (v) => /^\d{5}-\d{4}$/.test(v),
        message: 'Invalid zip code'
      }
    },
    geo: {
      lat: {
        type: String,
        required: true,
      },
      lng: {
        type: String,
        required: true,
      }
    }
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^\d-\d{3}-\d{3}-\d{4}$/.test(v),
      message: 'Invalid phone number'
    },
  },
  website: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /^http(s)*:\/\/([a-zA-Z\d][a-zA-Z\d-]*[a-zA-Z\d]\.){1,}[a-z]{2,}$/.test(v),
      message: 'Invalid website URL'
    }
  },
  company: {
    name: {
      type: String,
      required: true,
    },
    catchPhrase: {
      type: String,
      required: true,
    },
    bs: {
      type: String,
      required: true,
    }
  }
});

module.exports = mongoose.model('User', userSchema);