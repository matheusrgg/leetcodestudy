


//Level 1: The banking system should support creating new accounts,
// depositing money into accounts, and transferring money between two accounts.

class BankingSystem{
    constructor(){
        this.account = new Map();
        this.payments = new Map()
        this.paymentCounter = 0;
    }

    create_account(timestamp, account_id){
        if(this.account.has(account_id))return false

        this.account.set(account_id, {
                timestamp : timestamp,
                amount: 0,
                outgoing: 0,
                history:[ { timestamp: timestamp, balance: 0 }]
            }
        )

        return true
    }

    deposit(timestamp, account_id, amount){

        const account = this.account.get(account_id)

        if(!account)return "None"
    
        account.amount += amount
        account.history.push({timestamp:timestamp, balance: account.amount})

        return account.amount

    }

    transfer( timestamp, source_account_id, target_account_id, amount){

        const account1 = this.account.get(source_account_id);
        const account2 = this.account.get(target_account_id);

        if(!account1 || !account2 || source_account_id === target_account_id) return "None"

        if(account1.amount < amount) return "None"

        account1.outgoing += amount

        const novoSaldoAccount1 = account1.amount - amount

        account1.amount = novoSaldoAccount1
        
        account2.amount += amount

        return novoSaldoAccount1;
 
    }

    top_spenders(timestamp, n){
        
        const accounts =   Array.from(this.account)
        const sortedAccounts = accounts.sort((a,b)=>{
         
           if(b[1].outgoing=== a[1].outgoing){
            return a[0].localeCompare(b[0])
           }
           return b[1].outgoing - a[1].outgoing
        })


        return sortedAccounts
            .slice(0,n)
            .map(accounts=>  `${accounts[0]}(${accounts[1].accounts})`)

    }

    pay(timestamp, account_id, amount){
        this.processCashbacks(timestamp);
        const account1 = this.account.get(account_id);

        if(!account1 || account1.amount < amount ) return "None"

     
        account1.amount = account1.amount - amount
        account1.outgoing += amount

        this.paymentCounter++;
        const paymentId = `payment${this.paymentCounter}`;

        const cashback = Math.floor(amount * 0.02);

        this.payments.set(paymentId, {
            accountId: account_id,
            cashback: cashback,
            cashbackTime: timestamp + 86400000,
            status: "IN_PROGRESS"
        });

        return paymentId;


    }

    processCashbacks(timestamp){
      for( const [paymentId, payment] of this.payments){
        if(payment.status === 'IN_PROGRESS' && payment.cashbackTime <= timestamp){
            const account = this.account.get(payment.accountId)

            if(account){
                account.amount += payment.cashback;
                payment.status = 'CASHBACK_RECEIVED'
            }
        }
      }
    }

    get_payment_status(timestamp, account_id, paymentId) {

        this.processCashbacks(timestamp);

        const account = this.account.get(account_id);

        if (!account) {
            return null;
        }

        const payment = this.payments.get(paymentId);

        if (!payment) {
            return null;
        }

        if (payment.accountId !== account_id) {
            return null;
        }

        return payment.status;
    }

    merge_accounts(timestamp, account_id_1, account_id_2) {
        this.processCashbacks(timestamp)

        const account1 = this.account.get(account_id_1)
        const account2 = this.account.get(account_id_2)

        if (account_id_1 === account_id_2 || !account1 || !account2) {
            return false
        }

        for (const [paymentId, payment] of this.payments) {
            if (payment.accountId === account_id_2) {
                payment.accountId = account_id_1
            }
        }

        account1.amount += account2.amount
        account1.outgoing += account2.outgoing
        //If the account was merged into another account, the merged account should inherit its balance history.
        account1.history = [...account1.history, ...account2.history]
            .sort((a, b) => a.timestamp - b.timestamp)

        this.account.delete(account_id_2)

        return true
    }

    get_balance(timestamp, account_id, time_at){

        this.processCashbacks(timestamp)

        const account = this.account.get(account_id)
        if (!account) return null

        let lastBalance = null

        for (const item of account.history) {
            if (item.timestamp <= time_at) {
                lastBalance = item.balance
            } else {
                break
            }
        }

        return lastBalance 

    }
}


const bankingSytem = new BankingSystem();



bankingSytem.create_account(1, "account1")
bankingSytem.create_account(2, "account1")
bankingSytem.create_account(3, "account2")

bankingSytem.deposit(5, "account1", 2700)
bankingSytem.create_account(3, "account2", 600)
bankingSytem.transfer(4, "account1", "account2", 200 )

bankingSytem.top_spenders(1, 2)

bankingSytem.pay(100, "account1", 1000)


bankingSytem.pay(100, "account2", 200)

bankingSytem.processCashbacks(2)

bankingSytem.get_payment_status(4, "account1", "payment1")

bankingSytem.merge_accounts(9, "account1", "account2")

bankingSytem.get_balance(15, "account1", 5)