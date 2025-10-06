# WarpChain Rewards  

A high-performance smart contract on **Solana Devnet** that automates reward distribution securely and efficiently.  

---

## 🚀 Overview  
WarpChain Rewards is a decentralized smart contract built with **Rust + Anchor** on **Solana Devnet**.  
It allows a project owner to initialize a **reward pool** and lets participants register and claim their rewards automatically.  

This project demonstrates:  
- Secure reward pool creation  
- Participant registration  
- Automated reward claiming  
- High throughput on Solana’s parallel runtime  

---

## 🛠️ Tech Stack  
- **Rust + Anchor Framework** for Solana smart contracts  
- **Solana Devnet** for testing and deployment  
- **Phantom Wallet** for Devnet SOL  

---

## ⚙️ Functions  

| Function | Description |
|-----------|-------------|
| `initialize` | Create the reward pool and set total rewards. |
| `register_participant` | Register a new participant with their allocated reward. |
| `claim_reward` | Participant claims their reward (lamports transferred). |

---

## 📦 Deployment Steps  

1. **Install Solana CLI**  
   ```bash
   sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
