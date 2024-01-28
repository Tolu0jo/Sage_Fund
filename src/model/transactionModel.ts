import mongoose from "mongoose";


const transactionSchema = new mongoose.Schema({
    senderAcct_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true},
    RecieverAcct_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true},
    amount:{type:Number, required:true}
})

export const transactionModel = mongoose.model("Transaction",transactionSchema)