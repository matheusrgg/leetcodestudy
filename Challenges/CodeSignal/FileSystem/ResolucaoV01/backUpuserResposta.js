backupUser(userId) {

    if (!this.user.has(userId)) {
        return "";
    }

    const user = this.user.get(userId);

    const filesBackup = [];

    for (const fileName of user.files) {

        const file = this.file.get(fileName);

        filesBackup.push({
            name: fileName,
            size: file.size
        });
    }

    this.backups.set(userId, {
        files: filesBackup
    });

    return true;
}