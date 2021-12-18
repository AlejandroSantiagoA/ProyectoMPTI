module.exports = (sequelize, dataTypes)=>{
    let alias = "CarShop";
    let cols ={
        id_carshop:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_user:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        id_product: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        id_order:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: true
        },
        quantity: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        total:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    
    let config={
        tableName:"car_shop",
        timestamp: false
    }
    
    let CarShop = sequelize.define(alias, cols, config);
    
    CarShop.associate = (models) => {
        CarShop.belongsTo(models.Order,{
        foreignKey:"id_order",
        as: "order"
        });
        
        CarShop.belongsTo(models.Product,{
            foreignKey:"id_product",
            as: "product"
        });
    
        CarShop.belongsTo(models.User,{
            foreignKey:"id_user",
            as: "user"
        });
    };
    return CarShop;
};