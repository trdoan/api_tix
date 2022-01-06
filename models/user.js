// const uuid = require("uuid");
("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      phone: { type: DataTypes.STRING, unique: true },
      role: DataTypes.STRING,
      avatar: {
        type: DataTypes.STRING,
        defaultValue:
          "https://res.cloudinary.com/depatula1/image/upload/v1639639929/avatar/xcnqdqw9j87zfqrewykn.jpg",
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  // User.beforeCreate((user) => (user.id = uuid.v4()));
  return User;
};
