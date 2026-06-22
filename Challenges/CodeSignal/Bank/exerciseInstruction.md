

YoutubeVideo Link:https://www.youtube.com/watch?v=dflijSS_AjI
Link Gihub Codigo : https://github.com/AlejandroAldana99/Go-codes/blob/main/In-Memory-DB/bank/bank.go

Esse tá legal tb , tem a descrição do exercicio:
https://github.com/JesseZhuang/InCodeLearning-Python3/blob/1183e227ee377057c51ebed85e42e69a62c810f0/algorithm/ood/banking_system.py

Level 3 - Current level
Instructions

Your task is to implement a simplified version of a banking system. All operations that should be supported are listed below.

Solving this task consists of several levels. Subsequent levels are opened when the current level is correctly solved. You always have access to the data for the current and all previous levels.

You can execute a single test case by running the following command in the terminal:

bash run_single_test.sh "<test_case_name>"
Requirements

Your task is to implement a simplified version of a banking system. Plan your design according to the level specifications below:

Level 1: The banking system should support creating new accounts, depositing money into accounts, and transferring money between two accounts.
Level 2: The banking system should support ranking accounts based on the total value of outgoing transactions.
Level 3: The banking system should allow scheduling payments and checking the status of scheduled payments.
Level 4: The banking system should support merging two accounts while retaining both accounts' balance and transaction histories.

To move to the next level, you should pass all the tests at the current level.

Note

All operations will have a timestamp parameter — a stringified timestamp in milliseconds.

It is guaranteed that all timestamps are unique and are in a range from 1 to 10^9.

Operations will be given in order of strictly increasing timestamps.

Level 3 Operations

The system should allow scheduling payments and checking the status of scheduled payments.

SchedulePayment
SchedulePayment(timestamp int,
                accountId string,
                amount int,
                delay int) *string

Should schedule a payment which will be performed at:

timestamp + delay

Returns a string with a unique identifier for the scheduled payment in the following format:

"payment[ordinal number of the scheduled payment across all accounts]"

Examples:

"payment1"
"payment2"

If accountId doesn't exist, should return:

nil

The payment is skipped if the specified account has insufficient funds when the payment is performed.

Additional conditions:

Successful payments should be considered outgoing transactions and included when ranking accounts using the TopSpenders operation.
Scheduled payments should be processed before any other transactions at the given timestamp.
If an account needs to perform several scheduled payments simultaneously, they should be processed in order of creation.

Example:

"payment1" should be processed before "payment2"
CancelPayment
CancelPayment(timestamp int,
              accountId string,
              paymentId string) bool

Should cancel the scheduled payment with paymentId.

Returns:

true

if the scheduled payment is successfully canceled.

Returns:

false

if:

paymentId does not exist, or
the payment was already canceled, or
accountId is different from the source account for the scheduled payment.

Note: Scheduled payments must be performed before any CancelPayment operations at the given timestamp.

For CodeSignal preparation, I would recommend that before coding you spend 5 minutes modeling the data structures you'll need for Level 3. That's usually where most candidates lose time. Try to think:

What new data structure stores scheduled payments?
How will you efficiently execute all payments whose execution time equals the current timestamp?
How will you keep the creation order (payment1 before payment2)?

Try designing those structures first and show me your idea — I won't give you the solution, only feedback like in a real interview.