import { model, Schema } from "mongoose";
import { BOOKING_STATUS, IBooking } from "./booking.interface";


const bookingSchema = new Schema<IBooking>({
    user: {
        type: Schema.Types.ObjectId,
        // ref e user.model.ts er ei line er ("User") ta hobe,,===> export const User = model<IUser>("User", userSchema);
        ref: "User",
        required: true,
    },
    tour: {
        type: Schema.Types.ObjectId,
        // ref e tour.model.ts er ei line er ("Tour") ta hobe,,,===> export const Tour = model<ITour>("Tour", tourSchema)
        ref: "Tour",
        required: true,
    },
    payment: {
        type: Schema.Types.ObjectId,
        ref: "Payment"
    },
    status: {
        type: String,
        enum: Object.values(BOOKING_STATUS),
        default: BOOKING_STATUS.PENDING
    },
    guestCount: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

export const Booking = model<IBooking>("Booking", bookingSchema)