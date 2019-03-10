const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  advertisement_id: { type: String },
  product_id: { type: String },
  review_profile_id: { type: String },
  user_id: { type: String },
  lattitude: { type: Number },
  longtitude: { type: Number },
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  media: [{
    media_id: { type: String },
    offset_x: { type: Number },
    offset_y: { type: Number },
    sizes: [{
      url: { type: String }, 
      width: { type: Number },
      height: { type: Number }
    }],
    type: { type: String }
  }],
  media_count: { type: Number },
  slug: { type: String },
  cell_link: { type: String },
  price_upper_bound: { type: Number },
  reference_url: { type: String },
  currency: { type: String },
  category: { type: Number },



  user: { type: Schema.Types.ObjectId, ref: 'users' },
  text: { type: String, required: true },
  likes: [{ user: { type: Schema.Types.ObjectId, ref: 'users' } }],
  comments: [{
      user: { type: Schema.Types.ObjectId, ref: 'users' },
      text: { type: String, required: true },
      name: { type: String },
      avatar: { type: String },
      date: { type: Date, default: Date.now }        
  }],
  date: { type: Date, default: Date.now }
})
