/* 

db.UserProfile.find({ name: /qw/i });

db.UserProfile.find({ country: "Ukraine" });

db.UserProfile.find({ country: { $exists: false } });

db.UserProfile.find({
    $where: function() {
      return !this.name.toLowerCase().startsWith('a');
    }
  });

  db.Cars.aggregate([
    {
      $lookup: {
        from: "UserProfile",
        localField: "userId",
        foreignField: "_id",
        as: "ownerInfo"
      }
    },
    { $unwind: "$ownerInfo" },
    {
      $match: {
        mileage: { $gte: 100 },
        "model": "Audi"
      }
    }
  ]);

  db.Cars.find({ carBrand: { $in: ["BMW", "Audi"] } }); */