import { ethers } from "ethers";

// BSC Mainnet RPC URL
const BSC_RPC_URL = "https://bsc-dataseed.binance.org/";

export const getBalanceOf = async (contractAddress: string, abi: any, userAddress: string) => {
    try {
        // Connect to the BSC network
        const provider = new ethers.JsonRpcProvider(BSC_RPC_URL);

        // Create a contract instance
        const contract = new ethers.Contract(contractAddress, abi, provider);

        // Fetch balance
        const balance = await contract.balanceOf(userAddress);
        return ethers.formatUnits(balance, 18); // Adjust decimals based on your token
    } catch (error) {
        console.error("Failed to fetch balance:", error);
        throw error;
    }
};