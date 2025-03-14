import mongoose, { Schema } from "mongoose";


const demoWalletSchema = new Schema({
    balance: {
        type: Number,
        required: [true, "Balance is required"],
        default: 50000,
    },
    equity: {
        type: Number,
        required: [true, "Equity is required"],
        default: 0,
    },
    available: {
        type: Number,
        required: [true, "Available is required"],
        default: 0,
    },
    margin: {
        type: Number,
        required: [true, "Margin is required"],
        default: 0,
    },
    marginLevel: {
        type: Number,
        required: [true, "Margin level is required"],
        default: 0,
    },
    pl: {
        type: Number,
        required: [true, "pl is required"],
        default: 0,
    },
});

const DemoWalletModel = (mongoose.models.demoWallet) || mongoose.model("demoWallet", demoWalletSchema);

export default DemoWalletModel;