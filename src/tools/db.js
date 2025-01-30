import db_instance from "../config/db.js";

export const clearDatabase = async () => {
    try {
        const models = db_instance.models;
        await db_instance.transaction(async (transaction) => {
            await db_instance.query('EXEC sp_MSforeachtable "ALTER TABLE ? NOCHECK CONSTRAINT ALL"', {
                transaction,
            });
            for (const modelName of Object.keys(models)) {
                await models[modelName].destroy({
                    where: {},
                    force: true,
                    transaction,
                });
            }
            await db_instance.query('EXEC sp_MSforeachtable "ALTER TABLE ? CHECK CONSTRAINT ALL"', {
                transaction,
            });
            for (const modelName of Object.keys(models)) {
                const tableName = models[modelName].getTableName();
                await db_instance.query(`DBCC CHECKIDENT ('${tableName}', RESEED, 0)`, { transaction });
            }
        });
    } catch (error) {
        console.error("Error when cleaning database", error);
    }
};
