const User = require('../models/User');
const Transaction = require('../models/Transaction');

exports.makeTransaction = async (req, res) => {
  try {
    const { sender_upi_id, receiver_upi_id, amount } = req.body;

    if (amount <= 0) return res.status(400).send({ message: 'Invalid amount' });

    const sender = await User.findOne({ upi_id: sender_upi_id });
    const receiver = await User.findOne({ upi_id: receiver_upi_id });

    if (!sender) return res.status(404).send({ message: 'Sender not found' });
    if (!receiver) return res.status(404).send({ message: 'Receiver not found' });
    if (sender.balance < amount) return res.status(400).send({ message: 'Insufficient balance' });

    sender.balance -= amount;
    receiver.balance += amount;

    await sender.save();
    await receiver.save();

    const transaction = new Transaction({ sender_upi_id, receiver_upi_id, amount });
    await transaction.save();

    res.status(200).send({ message: 'Transaction successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server error' });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const { upi_id } = req.params;

    const transactions = await Transaction.find({
      $or: [{ sender_upi_id: upi_id }, { receiver_upi_id: upi_id }]
    }).sort({ timestamp: -1 });

    res.status(200).send(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server error' });
  }
};
