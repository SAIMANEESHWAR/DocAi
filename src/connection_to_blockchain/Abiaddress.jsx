// import React from 'react'

// export default function passAbiAddress() {
//   return (
//     <div>passAbiAddress</div>
//   )
// }

import React, { createContext, useState } from 'react';
import Web3 from 'web3';
import { useEffect } from 'react';
// Create the context
export const AppContext = createContext();
// Create the context provider component
export const AppProvider = ({ children }) => {
    const [MyFinalweb3, setMyFinalweb3] = useState(null);
	const [MyFinalContract, setMyFinalContract] = useState(null);
	// Define your variables and their initial values
	const [MyABI, setMyABI] = useState([
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "username",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_hash",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_date",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_filename",
                    "type": "string"
                }
            ],
            "name": "addDataHash",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "username",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "password",
                    "type": "string"
                }
            ],
            "name": "registerUser",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "username",
                    "type": "string"
                }
            ],
            "name": "getDataHash",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "hash",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "date",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "filename",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct UserManagement.Data[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "username",
                    "type": "string"
                }
            ],
            "name": "isUserPresent",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "username",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "password",
                    "type": "string"
                }
            ],
            "name": "login",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]);
    
	const [MyAddress, setMyAddress] = useState('0x66f3e5D0098238EfAEe76b66D9C87d7D8BC39C2c');
	const [MyCurrAccount, setMyCurrAccount] = useState('');
	useEffect(() => {
		const onload23 = async () => {

			try {
				if (window.ethereum !== 'undefined') {
					const { ethereum } = window;
					console.log('connected');
					const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
					let account = accounts[0];
					setMyCurrAccount(account);
					window.web3 = await new Web3(window.ethereum);
					window.contract = await new window.web3.eth.Contract(MyABI, MyAddress);
					// Continue with the rest of your code
                    setMyFinalweb3(await new Web3(window.ethereum));
					setMyFinalContract(await new window.web3.eth.Contract(MyABI, MyAddress));
				} else {
					console.log('not connected');
				}

			}
			catch (error) {
				console.log(error);
			}

		};

		onload23();
	}, []);

	// Create an object with the variables and their setter functions
	const contextValues = {
        MyFinalweb3,MyFinalContract, MyCurrAccount
	};

	return (
	<AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
	);
};
