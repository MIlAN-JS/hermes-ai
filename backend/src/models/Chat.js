import mongoose from 'mongoose';

// const messageSchema = new mongoose.Schema(
//   {
//     sender: {
//       type: String,
//       enum: ['user', 'bot'],
//       required: true,
//     },
//     text: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const chatSchema = new mongoose.Schema(
//   {
//     businessId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//       required: true,
//     },
//     messages: [messageSchema],
//   },
//   {
//     timestamps: true,
//   }
// );

// const Chat = mongoose.model('Chat', chatSchema);

// export default Chat;


const chatSchema = new mongoose.Schema({
  businessId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    required : true, 
    unique : true
  }, 
  role : {
       type : String , 
       required : true, 
       enum : ["human", "ai"]
  },
  message : {
    type : String , 
    required : true
  }
})


const chatModel = mongoose.model("Chat", chatSchema)
export default chatModel; 