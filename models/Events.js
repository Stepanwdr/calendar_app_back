import {Model, DataTypes} from "sequelize";
import sequelize from "../services/sequelize";


class Events extends Model{

}
Events.init({
    id:{
        type:DataTypes.BIGINT,
        autoIncrement:true,
        primaryKey:true
    },
    date:{
        type:DataTypes.STRING,
        allowNull:false
    },
    guest:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
    type:DataTypes.STRING,
    allowNull:true
    },

},{
    sequelize,
    modelName:"events",
    tableName:"events"
})


export default Events;