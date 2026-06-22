
//https://github.com/meysius/docs/tree/174324fd11fb225af23807089db1307fc229e05f/codesignal/src/storage

# Instructions

Your task is to implement a simple cloud storage system. All operations that should be supported are listed below.

Solving this task consists of several levels. Subsequent levels are opened when the current level is correctly solved. You always have access to the data for the current and all previous levels.

You are not required to provide the most efficient implementation. Any code that passes the unit tests is sufficient.

You can execute a single test case by running the following command in the terminal:

```
bash run_single_test.sh"<test_case_name>"
```

# Requirements

Your task is to implement a simple cloud storage system that maps objects (files) to their metadata. Specifically, the storage should maintain files and information about them (name, size, etc.). Note that this system should be in-memory: you don't need to work with the real filesystem.

Plan your design according to the level specifications below:

### Level 1

The cloud storage system should support:

- Adding a new file
- Retrieving files
- Deleting files

### Level 2

The cloud storage system should support:

- Displaying the largest files

### Level 3

The cloud storage system should support:

- Adding users with capacities
- Merging two users

### Level 4

The cloud storage system should support:

- Backing up a user's files
- Restoring a user's files

To move to the next level, you need to pass all the tests at this level when submitting the solution.

---

---

# Note

It is guaranteed that the given queries will never call operations that result in collisions between file and directory names.

# Level 1

The cloud storage system should support file manipulation.

### `addFile(name, size)`

- should add a new file `name` to the storage.
- `size` is the amount of memory required in bytes.
- The current operation fails if a file with the same `name` already exists.
- Returns `true` if the file was added successfully or `false` otherwise.

### `getFileSize(name)`

- should return the size of the file `name` if it exists, or `null` otherwise.

### `deleteFile(name)`

- should delete the file `name`.
- Returns the deleted file size if the deletion was successful or `null` if the file does not exist.

---

# Examples

The example below shows how these operations should work (the section is scrollable to the right):

| Queries | Returns |
| --- | --- |
| addFile("/dir1/dir2/file.txt", 10) | true |
| addFile("/dir1/dir2/file.txt", 5) | false |
| getFileSize("/dir1/dir2/file.txt") | 10 |
| deleteFile("non-existing.file.txt") | null |
| deleteFile("/dir1/dir2/file.txt") | 10 |
| getFileSize("not-existing.file") | null |

---

---

# Note

It is guaranteed that the given queries will never call operations that result in collisions between file and directory names.

# Level 2

Implement an operation for retrieving some statistics about files with a specific prefix.

### `getNLargest(prefix, n)`

- should return the list of strings representing the names of the top `n` largest files with names starting with `prefix` in the following format:

```
["<name>(<size>)", "<name>(<size>)", ...]
```

- Returned files should be sorted by size in descending order.
- In case of a tie, sorted in lexicographical order of the names.
- If there are no such files, return an empty list.
- If the number of such files is less than `n`, all of them should be returned in the specified format.

---

# Examples

The example below shows how these operations should work (the section is scrollable to the right):

| Queries | Returns |
| --- | --- |
| addFile("/dir/file1.txt", 5) | true |
| addFile("/dir/file2", 20) | true |
| addFile("/dir/deeper/file3.mov", 9) | true |
| getNLargest("/dir", 2) | ["/dir/file2(20)", "/dir/deeper/file3.mov(9)"] |
| getNLargest("/dir/file", 3) | ["/dir/file2(20)", "/dir/file1.txt(5)"] |
| getNLargest("/another_dir", 1) | [] |
| addFile("/big_file.mp4", 200) | true |
| getNLargest("/", 2) | ["/big_file.mp4(200)", "/dir/file2(20)"] |

---

Parece ser um desafio típico do CodeSignal onde cada nível libera novos requisitos. Pela descrição, provavelmente você terá que implementar uma classe como `CloudStorage` com métodos do tipo:

```
addFile(...)
getFile(...)
deleteFile(...)
getLargestFiles(...)
addUser(...)
mergeUsers(...)
backupUser(...)
restoreUser(...)
```

Se você tiver as telas dos níveis (Level 1, 2, 3 e 4) ou os métodos exigidos, envie que eu transcrevo tudo e até monto uma solução completa em Java, Python ou JavaScript.

---

## Level 3 - Users and Capacity

The cloud storage system should now support users with storage capacity.

### `addUser(userId, capacity)`

**Requirements:**

- Add a new user with the given `userId` and storage `capacity`.
- The operation fails if a user with the same `userId` already exists.
- Returns:
  - `"true"` if the user was added successfully.
  - `"false"` otherwise.

---

### `addFileBy(userId, name, size)`

**Requirements:**

- Add a file owned by `userId`.
- The operation fails if:
  - the user does not exist.
  - a file with the same `name` already exists globally.
  - the file size exceeds the user’s remaining capacity.
- If successful:
  - Add the file to the global storage.
  - Mark the user as the owner of the file.
  - Increase the user’s used storage.
- Returns:
  - the user’s remaining capacity after the file is added.
  - an empty string `""` if the operation fails.

---

### `mergeUser(userId1, userId2)`

**Requirements:**

- Merge `userId2` into `userId1`.
- The operation fails if:
  - either user does not exist.
  - both user IDs are the same.
- If successful:
  - Add `userId2`’s capacity to `userId1`.
  - Transfer all files from `userId2` to `userId1`.
  - Update the ownership of transferred files.
  - Remove `userId2` from the system.
- Returns:
  - the remaining capacity of `userId1` after the merge.
  - an empty string `""` if the operation fails.

---

### Suggested Data Structures

```js
this.files = new Map();
this.users = new Map();



----


# Level 4 - Backup and Restore

The cloud storage system should support user backups and restoration.

## Goal

Allow users to create backups of their current files and restore them later.

---

## Suggested Data Structure

```js
this.backups = new Map();
```

Example:

```js
"user1" => [
    "/file1.txt",
    "/file2.txt"
]
```

or

```js
"user1" => {
    files: [
        "/file1.txt",
        "/file2.txt"
    ]
}
```

---

## backupUser(userId)

### Requirements

* Create a snapshot of the user's current files.
* Store the backup separately from the active files.
* Future file additions or deletions should not modify the backup.

### Example

Current state:

```js
user1.files = [
    "/file1.txt",
    "/file2.txt"
]
```

Backup:

```js
backupUser("user1")
```

Stored backup:

```js
backups.get("user1")
```

Result:

```js
[
    "/file1.txt",
    "/file2.txt"
]
```

---

### Important

Use a copy of the array:

```js
const filesCopy = [...user.files];
```

instead of:

```js
const filesCopy = user.files;
```

Otherwise both variables will point to the same array.

---

## restoreUser(userId)

### Requirements

* Restore the user's files from the latest backup.
* Replace the current file list with the backup version.
* Update ownership information if necessary.
* Recalculate storage usage if required.

---

## Example

Current files:

```js
[
    "/file1.txt",
    "/file2.txt",
    "/file3.txt"
]
```

Backup:

```js
[
    "/file1.txt",
    "/file2.txt"
]
```

After:

```js
restoreUser("user1")
```

Current files become:

```js
[
    "/file1.txt",
    "/file2.txt"
]
```

---

## Concepts Practiced

* Map
* Arrays
* Spread Operator (`...`)
* Copy vs Reference
* State Restoration
* Ownership Synchronization
* Data Consistency

```
```



