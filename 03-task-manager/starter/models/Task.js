module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define("task", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 20],
                    msg: 'Name cannot be more than 20 characters'
                }
            }
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    });

    return Task;
};

    