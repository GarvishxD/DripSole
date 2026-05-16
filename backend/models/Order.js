const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },

    items: [
      {
        productId: {
          type: String
        },

        name: {
          type: String
        },

        image: {
          type: String
        },

        category: {
          type: String
        },

        type: {
          type: String
        },

        selectedSize: {
          type: String
        },

        quantity: {
          type: Number
        },

        price: {
          type: Number
        },

        subCategory: {
          type: String
        }
      }
    ],

    shippingAddress: {
      fullName: String,
      phone: String,
      address: String,
      city: String,
      postalCode: String,
      country: String
    },

    total: {
      type: Number,
      required: true
    },

    status: {
      type: String,
      default: 'pending'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  'Order',
  orderSchema
);