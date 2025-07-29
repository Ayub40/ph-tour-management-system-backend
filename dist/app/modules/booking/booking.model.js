"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const mongoose_1 = require("mongoose");
const booking_interface_1 = require("./booking.interface");
const bookingSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        // ref e user.model.ts er ei line er ("User") ta hobe,,===> export const User = model<IUser>("User", userSchema);
        ref: "User",
        required: true,
    },
    tour: {
        type: mongoose_1.Schema.Types.ObjectId,
        // ref e tour.model.ts er ei line er ("Tour") ta hobe,,,===> export const Tour = model<ITour>("Tour", tourSchema)
        ref: "Tour",
        required: true,
    },
    payment: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Payment"
    },
    status: {
        type: String,
        enum: Object.values(booking_interface_1.BOOKING_STATUS),
        default: booking_interface_1.BOOKING_STATUS.PENDING
    },
    guestCount: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
exports.Booking = (0, mongoose_1.model)("Booking", bookingSchema);
