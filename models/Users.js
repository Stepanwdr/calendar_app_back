import {DataTypes, Model} from "sequelize";
import sequelize from "../services/sequelize";
import md5 from "md5";
import Events from "./Events";
class Users extends Model{
    static passwordHash(string) {
        return md5(`${md5(string)}_safe`);
      }
}
Users.init({
    id:{
        type:DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
    type:DataTypes.STRING,
    unique:true,
    allowNull:false
    },
     phone:{
            type:DataTypes.STRING(32),
            allowNull:false
     },
    password: {
        type: DataTypes.CHAR(32),
        allowNull: false,
        get() {
          return undefined;
        },
        set(val) {
          this.setDataValue('password', Users.passwordHash(val));
        },
      },
  role: {
    type: DataTypes.ENUM('ADMIN','GUEST','AUTHOR'),
    allowNull: true,
      defaultValue:'ADMIN'
  },

},{
    sequelize,
    modelName: 'users',
    tableName: 'users',
})

Users.hasMany(Events)
Events.belongsTo(Users)
export default Users;
