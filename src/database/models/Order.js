module.exports=(sequelize, dataTypes)=>{
    let alias = "Order";
    const cols={
        id_order:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_user:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        data_order:{
            type: dataTypes.DATE,
            allow: false
        }
    };
    
    const config={
        timestamps: false,
        tableName: 'orders'
    }
    
    const Order = sequelize.define(alias, cols, config);
    
    Order.associate=(models)=>{
        Order.hasMany(models.CarShop,{
            foreignKey:"id_order",
            as:"carShop"
        });
    
        Order.belongsTo(models.User,{
            foreignKey:"id_user",
            as:"user"
        });
    }
    
    return Order
};