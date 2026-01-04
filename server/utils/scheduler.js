const Letter = require("../models/letterF");

function startScheduler() {
  console.log("Scheduler started");

  setInterval(async () => {
    try {
      const now = new Date();

      const dueLetters = await Letter.find({
        status: "scheduled",
        deliverAt: { $lte: now },
      });

      for (const letter of dueLetters) {
        letter.status = "delivered";
        await letter.save();

        console.log("DELIVERED:", letter.email);
      }
    } catch (err) {
      console.error("Scheduler error:", err);
    }
  }, 60 * 1000);
}

module.exports = startScheduler;
