class Command {
  constructor(client, options) {
    this.client = client;
    this.name = options.name || null;
    this.description = options.description || null;
    this.aliases = options.aliases || [];
    this.category = options.category || "Uncategorized";
    this.cooldown = options.cooldown || '1s';
    this.devOnly = options.devOnly || false;
    this.staffOnly = options.staffOnly || false;
  }
}

module.exports = { Command };