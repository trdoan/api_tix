// const uuid = require("uuid");
("use strict");
const { Model } = require("sequelize");
const { ROLE_USER_CLIENT } = require("../config");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Ticket }) {
      // define association here
      this.hasMany(Ticket, {
        allowNull: true,
        foreignKey: "userId",
        as: "by",
        onDelete: "cascade",
        onUpdate: "cascade",
        hooks: true,
      });
    }
  }
  User.init(
    {
      hoTen: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      matKhau: DataTypes.STRING,
      soDT: { type: DataTypes.STRING, unique: true },
      nhomQuyen: {
        type: DataTypes.STRING,
        defaultValue: ROLE_USER_CLIENT,
      },
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
