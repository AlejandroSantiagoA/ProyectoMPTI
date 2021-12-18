module.exports = (sequelize, dataTypes) => {
    const alias = "Product";
    
    const cols = {
        id_product: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name_product: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        brand_product: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        category: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        availability: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        quantity: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        price: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    
    const config = {
        tableName: "products",
        timestamps: false
    };
    
    const Product = sequelize.define(alias, cols, config);
    Product.associate = (models) => {
        Product.belongsTo(models.CarShop,{
            foreignKey:"id_product",
            as:"carShop"
        });
    };
    
    return Product;
};