module.exports = (sequelize, dataTypes) => {
    const alias="User";
    
    const cols = {
        
        id_user: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        name_user: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        pass: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        rol: {
            type: dataTypes.STRING(20),
            allowNull: false
        }
    };
    
    const config = {
        
        timestamps: false,
        tableName: 'users'
        
    };
    
    
    const User = sequelize.define(alias, cols, config);
    User.associate = (models) => {
        User.hasMany(models.CarShop,{
            foreignKey:"id_user",
            as: "carShop"
        });
        
        User.hasMany(models.Order,{
            foreignKey: "id_user",
            as:"order"
        });
    };
    
    return User;
}