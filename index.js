const branchName = 'tests';
const validBranchPrefix = ['tests', 'develop', 'master', 'qa'];

if (validBranchPrefix.indexOf(branchName) === -1) {
  const msg = `Branch  ${branchName} names in this project must adhere to this contract: ${validBranchPrefix}.`;
  console.log(msg);
  process.exit(1);
}
