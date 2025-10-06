// reward_test.js
// WarpChain Rewards Program Test Script
//
// Usage:
// 1. Make sure you have @project-serum/anchor and @solana/web3.js installed
// 2. Run: anchor test

const anchor = require('@project-serum/anchor');
const { SystemProgram } = anchor.web3;

describe('WarpChain Rewards', () => {
  // Configure the client to use the local cluster or devnet
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  // Load the program
  const program = anchor.workspace.WarpchainRewards;

  it('Initializes reward pool and sends a reward!', async () => {
    // Create a new Keypair for the reward account
    const rewardAccount = anchor.web3.Keypair.generate();

    // Call initialize
    await program.methods
      .initialize(new anchor.BN(1000000)) // 1M tokens as test
      .accounts({
        rewardAccount: rewardAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([rewardAccount])
      .rpc();

    console.log('Reward pool initialized at:', rewardAccount.publicKey.toBase58());

    // Send reward to the provider wallet
    await program.methods
      .sendReward(new anchor.BN(1000)) // send 1000 test tokens
      .accounts({
        rewardAccount: rewardAccount.publicKey,
        recipient: provider.wallet.publicKey,
      })
      .rpc();

    console.log('Sent 1000 test reward tokens to:', provider.wallet.publicKey.toBase58());
  });
});
