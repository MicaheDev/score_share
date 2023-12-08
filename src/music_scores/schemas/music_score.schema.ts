import mongoose from "mongoose"

const music_score_schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  upload_date: { type: Date, default: Date.now },
  author: {
    type: String,
    required: true,
  },
  pdf_url: {
    type: String,
    required: true,
  },
  midi_url: {
    type: String,
    required: true,
  },
  difficult: {
    type: String,
    required: true
  },
  instrument: {
    type: String,
    require: true
  },
  user_uploader: {
    type: String,
    require: true
  },
  reports: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
})

// Configuración para excluir los campos __v y _id en las respuestas
music_score_schema.set("toJSON", {
  transform: (_doc, ret) => {
    delete ret.__v
    return ret
  },
})

const MusicScore = mongoose.model("MusicScore", music_score_schema)

export default MusicScore
