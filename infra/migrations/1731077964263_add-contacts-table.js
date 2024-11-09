/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.createTable("contacts", {
    id: { type: "serial", primaryKey: true },
    name: { type: "varchar(100)", notNull: true },
    phone: { type: "char(11)", notNull: true },
    email: { type: "varchar(100)", notNull: true },
    subject: { type: "varchar(100)", notNull: true },
    message: { type: "text", notNull: true },
    created_at: { type: "timestamp", default: pgm.func("current_timestamp") },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.dropTable("contacts");
};
