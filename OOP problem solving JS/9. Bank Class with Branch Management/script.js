class Bank{
    constructor(){
        this.bankName = '',
        this.branches = [];
    }
    addBranch(branch){
        this.branches.push(branch);
        console.log(`${branch} Added.`);
    }
    removeBranch(branch){
        const index = this.branches.indexOf(branch)
        if(index !== 0){
            this.branches.splice(index,1);
            console.log(`Branch : ${branch}, Removed.`)
        }else{
            console.log(`Branch : ${branch} , Does not exist.`)
        }
    }
    displayBranches(){
        if(this.branches.length === 0){
            console.log(`No branches exist`)
        }else{
            console.log(`List of Branches:`);
            this.branches.forEach((branch , index) => {
                console.log(`${index + 1}, ${branch}`)
            })
        }
    }
}
const bank = new Bank();

bank.addBranch(`Branch A`);
bank.addBranch(`Branch B`);
bank.addBranch(`Branch C`);

bank.removeBranch(`Branch B`);


bank.displayBranches();