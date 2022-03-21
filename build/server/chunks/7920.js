exports.id = 7920;
exports.ids = [7920];
exports.modules = {

/***/ 9683:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 8962:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 3213:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "HomeView_container__h25oo"
};


/***/ }),

/***/ 9987:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 0:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "aN": () => (/* reexport */ Loader),
  "lw": () => (/* reexport */ SelectAndConnectWalletButton),
  "T7": () => (/* reexport */ SolanaLogo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Loader.tsx

const Loader = ({ text ="Loading..." , noText =false  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col justify-center items-center text-xl font-light",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                className: "animate-spin h-8 w-8 text-white",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "white",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                        className: "opacity-5",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })
                ]
            }),
            " ",
            !noText ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "opacity-50 mt-4",
                children: text
            }) : null
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/SolanaLogo.tsx

const SolanaLogo = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "46",
        height: "35",
        xmlns: "http://www.w3.org/2000/svg",
        className: "inline",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        x1: "90.737%",
                        y1: "34.776%",
                        x2: "35.509%",
                        y2: "55.415%",
                        id: "a",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#00FFA3",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#DC1FFF",
                                offset: "100%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        x1: "66.588%",
                        y1: "43.8%",
                        x2: "11.36%",
                        y2: "64.439%",
                        id: "b",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#00FFA3",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#DC1FFF",
                                offset: "100%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        x1: "78.586%",
                        y1: "39.317%",
                        x2: "23.358%",
                        y2: "59.956%",
                        id: "c",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#00FFA3",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#DC1FFF",
                                offset: "100%"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                fillRule: "nonzero",
                fill: "none",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M7.256 26.713c.27-.27.64-.427 1.033-.427h35.64a.73.73 0 0 1 .517 1.247l-7.04 7.04c-.27.27-.64.427-1.034.427H.732a.73.73 0 0 1-.516-1.246l7.04-7.04Z",
                        fill: "url(#a)",
                        transform: "translate(.98)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M7.256.427C7.536.157 7.907 0 8.289 0h35.64a.73.73 0 0 1 .517 1.246l-7.04 7.04c-.27.27-.64.428-1.034.428H.732a.73.73 0 0 1-.516-1.247l7.04-7.04Z",
                        fill: "url(#b)",
                        transform: "translate(.98)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M37.405 13.486c-.27-.27-.64-.427-1.033-.427H.732a.73.73 0 0 0-.516 1.246l7.04 7.04c.27.27.64.428 1.033.428h35.64a.73.73 0 0 0 .517-1.247l-7.04-7.04Z",
                        fill: "url(#c)",
                        transform: "translate(.98)"
                    })
                ]
            })
        ]
    })
;

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useWallet.js
var useWallet = __webpack_require__(7257);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/index.js + 11 modules
var lib = __webpack_require__(7843);
;// CONCATENATED MODULE: ./src/components/SelectAndConnectWalletButton.tsx




const SelectAndConnectWalletButton = ({ onUseWalletClick ,  })=>{
    const { setVisible  } = (0,lib/* useWalletModal */.hB)();
    const { wallet , connect , connecting , publicKey  } = (0,useWallet/* useWallet */.O)();
    (0,external_react_.useEffect)(()=>{
        if (!publicKey && wallet) {
            try {
                connect();
            } catch (error) {
                console.log("Error connecting to the wallet: ", error.message);
            }
        }
    }, [
        wallet
    ]);
    const handleWalletClick = ()=>{
        try {
            if (!wallet) {
                setVisible(true);
            } else {
                connect();
            }
            onUseWalletClick();
        } catch (error) {
            console.log("Error connecting to the wallet: ", error.message);
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "btn btn-primary btn-lg",
        onClick: handleWalletClick,
        disabled: connecting,
        children: publicKey ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Use Wallet Address"
        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Connect Wallet"
        })
    }));
};

;// CONCATENATED MODULE: ./src/components/index.tsx





/***/ }),

/***/ 6649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ fetcher)
/* harmony export */ });
const fetcher = async (url)=>{
    const res = await fetch(url);
    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const error = new Error("An error occurred while fetching the data.");
        // Attach extra info to the error object.
        const info = await res.json();
        error.status = res.status;
        console.warn(url, "\nAn error occured while fetching:\n", info);
        throw error;
    }
    return res.json();
};


/***/ }),

/***/ 1098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ CandyMachineMintView)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/index.js + 11 modules
var lib = __webpack_require__(7843);
// EXTERNAL MODULE: external "@project-serum/anchor"
var anchor_ = __webpack_require__(1024);
// EXTERNAL MODULE: ./src/components/index.tsx + 3 modules
var components = __webpack_require__(0);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-countdown"
var external_react_countdown_ = __webpack_require__(4449);
var external_react_countdown_default = /*#__PURE__*/__webpack_require__.n(external_react_countdown_);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useConnection.js
var useConnection = __webpack_require__(9669);
// EXTERNAL MODULE: external "react-alert"
var external_react_alert_ = __webpack_require__(7246);
// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(7831);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useAnchorWallet.js
var useAnchorWallet = __webpack_require__(8877);
// EXTERNAL MODULE: external "@solana/spl-token"
var spl_token_ = __webpack_require__(9874);
;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/candy-machine.ts


const CANDY_MACHINE_PROGRAM = new anchor_.web3.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ");
const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new anchor_.web3.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
const TOKEN_METADATA_PROGRAM_ID = new anchor_.web3.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
const awaitTransactionSignatureConfirmation = async (txid, timeout, connection, commitment = "recent", queryStatus = false)=>{
    let done = false;
    let status = {
        slot: 0,
        confirmations: 0,
        err: null
    };
    let subId = 0;
    status = await new Promise(async (resolve, reject)=>{
        setTimeout(()=>{
            if (done) {
                return;
            }
            done = true;
            console.log("Rejecting for timeout...");
            reject({
                timeout: true
            });
        }, timeout);
        try {
            subId = connection.onSignature(txid, (result, context)=>{
                done = true;
                status = {
                    err: result.err,
                    slot: context.slot,
                    confirmations: 0
                };
                if (result.err) {
                    console.log("Rejected via websocket", result.err);
                    reject(status);
                } else {
                    console.log("Resolved via websocket", result);
                    resolve(status);
                }
            }, commitment);
        } catch (e1) {
            done = true;
            console.error("WS error in setup", txid, e1);
        }
        while(!done && queryStatus){
            // eslint-disable-next-line no-loop-func
            (async ()=>{
                try {
                    const signatureStatuses = await connection.getSignatureStatuses([
                        txid, 
                    ]);
                    status = signatureStatuses && signatureStatuses.value[0];
                    if (!done) {
                        if (!status) {
                            console.log("REST null result for", txid, status);
                        } else if (status.err) {
                            console.log("REST error for", txid, status);
                            done = true;
                            reject(status.err);
                        } else if (!status.confirmations) {
                            console.log("REST no confirmations for", txid, status);
                        } else {
                            console.log("REST confirmation for", txid, status);
                            done = true;
                            resolve(status);
                        }
                    }
                } catch (e) {
                    if (!done) {
                        console.log("REST connection error: txid", txid, e);
                    }
                }
            })();
            await sleep(2000);
        }
    });
    //@ts-ignore
    if (connection._signatureSubscriptions[subId]) {
        connection.removeSignatureListener(subId);
    }
    done = true;
    console.log("Returning status", status);
    return status;
};
/* export */ const createAssociatedTokenAccountInstruction = (associatedTokenAddress, payer, walletAddress, splTokenMintAddress)=>{
    const keys = [
        {
            pubkey: payer,
            isSigner: true,
            isWritable: true
        },
        {
            pubkey: associatedTokenAddress,
            isSigner: false,
            isWritable: true
        },
        {
            pubkey: walletAddress,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: splTokenMintAddress,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: anchor_.web3.SystemProgram.programId,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: spl_token_.TOKEN_PROGRAM_ID,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: anchor_.web3.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false
        }, 
    ];
    return new anchor_.web3.TransactionInstruction({
        keys,
        programId: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
        data: Buffer.from([])
    });
};
const getCandyMachineState = async (anchorWallet, candyMachineId, connection)=>{
    const provider = new anchor_.Provider(connection, anchorWallet, {
        preflightCommitment: "recent"
    });
    const idl = await anchor_.Program.fetchIdl(CANDY_MACHINE_PROGRAM, provider);
    // Handle failed fetchIdl
    // if (!idl) {
    //   return {};
    // }
    const program = new anchor_.Program(idl, CANDY_MACHINE_PROGRAM, provider);
    const candyMachine = {
        id: candyMachineId,
        connection,
        program
    };
    const state = await program.account.candyMachine.fetch(candyMachineId);
    console.log("state", state);
    const itemsAvailable = state.data.itemsAvailable.toNumber();
    const itemsRedeemed = state.itemsRedeemed.toNumber();
    const price = state.data.price.toNumber();
    const itemsRemaining = itemsAvailable - itemsRedeemed;
    let goLiveDate = state.data.goLiveDate.toNumber();
    goLiveDate = new Date(goLiveDate * 1000);
    return {
        candyMachine,
        itemsAvailable,
        itemsRedeemed,
        itemsRemaining,
        goLiveDate,
        price
    };
};
const getMasterEdition = async (mint)=>{
    return (await anchor_.web3.PublicKey.findProgramAddress([
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
        Buffer.from("edition"), 
    ], TOKEN_METADATA_PROGRAM_ID))[0];
};
const getMetadata = async (mint)=>{
    return (await anchor_.web3.PublicKey.findProgramAddress([
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(), 
    ], TOKEN_METADATA_PROGRAM_ID))[0];
};
const getTokenWallet = async (wallet, mint)=>{
    return (await anchor_.web3.PublicKey.findProgramAddress([
        wallet.toBuffer(),
        spl_token_.TOKEN_PROGRAM_ID.toBuffer(),
        mint.toBuffer()
    ], SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID))[0];
};
const mintOneToken = async (candyMachine, config, payer, treasury)=>{
    const mint = anchor_.web3.Keypair.generate();
    const token = await getTokenWallet(payer, mint.publicKey);
    const { connection , program  } = candyMachine;
    const metadata = await getMetadata(mint.publicKey);
    const masterEdition = await getMasterEdition(mint.publicKey);
    const rent = await connection.getMinimumBalanceForRentExemption(spl_token_.MintLayout.span);
    return await program.rpc.mintNft({
        accounts: {
            config,
            candyMachine: candyMachine.id,
            payer: payer,
            wallet: treasury,
            mint: mint.publicKey,
            metadata,
            masterEdition,
            mintAuthority: payer,
            updateAuthority: payer,
            tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
            tokenProgram: spl_token_.TOKEN_PROGRAM_ID,
            systemProgram: anchor_.web3.SystemProgram.programId,
            rent: anchor_.web3.SYSVAR_RENT_PUBKEY,
            clock: anchor_.web3.SYSVAR_CLOCK_PUBKEY
        },
        signers: [
            mint
        ],
        instructions: [
            anchor_.web3.SystemProgram.createAccount({
                fromPubkey: payer,
                newAccountPubkey: mint.publicKey,
                space: spl_token_.MintLayout.span,
                lamports: rent,
                programId: spl_token_.TOKEN_PROGRAM_ID
            }),
            spl_token_.Token.createInitMintInstruction(spl_token_.TOKEN_PROGRAM_ID, mint.publicKey, 0, payer, payer),
            createAssociatedTokenAccountInstruction(token, payer, payer, mint.publicKey),
            spl_token_.Token.createMintToInstruction(spl_token_.TOKEN_PROGRAM_ID, mint.publicKey, token, payer, [], 1), 
        ]
    });
};
const shortenAddress = (address, chars = 4)=>{
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};
const sleep = (ms)=>{
    return new Promise((resolve)=>setTimeout(resolve, ms)
    );
};

;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/MintSection.tsx









const MintSection = (props)=>{
    const alert = (0,external_react_alert_.useAlert)();
    const { connection  } = (0,useConnection/* useConnection */.R)();
    const { 0: counter , 1: setCounter  } = (0,external_react_.useState)({
        itemsAvailable: 0,
        itemsRemaining: 0
    });
    const { 0: price1 , 1: setPrice  } = (0,external_react_.useState)();
    const { 0: balance1 , 1: setBalance  } = (0,external_react_.useState)();
    const { 0: isActive , 1: setIsActive  } = (0,external_react_.useState)(false); // true when countdown completes
    const { 0: isSoldOut , 1: setIsSoldOut  } = (0,external_react_.useState)(false); // true when items remaining is zero
    const { 0: isMinting , 1: setIsMinting  } = (0,external_react_.useState)(false); // true when user got to press MINT
    const { 0: startDate , 1: setStartDate  } = (0,external_react_.useState)(new Date(props.startDate));
    const wallet = (0,useAnchorWallet/* useAnchorWallet */.z)();
    const { 0: candyMachine1 , 1: setCandyMachine  } = (0,external_react_.useState)();
    const onMint = async ()=>{
        try {
            setIsMinting(true);
            alert.show("Mint has been started!");
            if (wallet && (candyMachine1 === null || candyMachine1 === void 0 ? void 0 : candyMachine1.program)) {
                const mintTxId = await mintOneToken(candyMachine1, props.config, wallet.publicKey, props.treasury);
                alert.show("Confirming transaction...");
                const status = await awaitTransactionSignatureConfirmation(mintTxId, props.txTimeout, connection, "singleGossip", false);
                if (!(status === null || status === void 0 ? void 0 : status.err)) {
                    alert.success("Congratulations! Mint succeeded!");
                } else {
                    alert.error("Mint failed! Please try again!");
                }
            }
        } catch (error) {
            // TODO: blech:
            let message = error.msg || "Minting failed! Please try again!";
            if (!error.msg) {
                if (error.message.indexOf("0x138")) {} else if (error.message.indexOf("0x137")) {
                    message = `SOLD OUT!`;
                } else if (error.message.indexOf("0x135")) {
                    message = `Insufficient funds to mint. Please fund your wallet.`;
                }
            } else {
                if (error.code === 311) {
                    message = `SOLD OUT!`;
                    setIsSoldOut(true);
                } else if (error.code === 312) {
                    message = `Minting period hasn't started yet.`;
                }
            }
            alert.error(message);
        } finally{
            if (wallet) {
                const balance = await connection.getBalance(wallet.publicKey);
                setBalance(balance / web3_js_.LAMPORTS_PER_SOL);
            }
            setIsMinting(false);
        }
    };
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            if (wallet) {
                const balance = await connection.getBalance(wallet.publicKey);
                setBalance(balance / web3_js_.LAMPORTS_PER_SOL);
            }
        })();
    }, [
        wallet,
        connection
    ]);
    (0,external_react_.useEffect)(()=>{
        (async ()=>{
            if (!wallet) return;
            try {
                const { candyMachine , goLiveDate , itemsRemaining , itemsAvailable , price ,  } = await getCandyMachineState(wallet, props.candyMachineId, connection);
                setIsSoldOut(itemsRemaining === 0);
                setStartDate(goLiveDate);
                setCandyMachine(candyMachine);
                setCounter({
                    itemsRemaining,
                    itemsAvailable
                });
                setPrice(price / web3_js_.LAMPORTS_PER_SOL);
            } catch (error) {
                console.error(error);
                alert.error("Error fetching CandyMachine. Check browser console for the details.");
            }
        })();
    }, [
        wallet,
        props.candyMachineId,
        connection
    ]);
    console.log("startDate", startDate);
    return(/*#__PURE__*/ jsx_runtime_.jsx("main", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `grid grid-cols-1 gap-4`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        wallet && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "Balance: ◎",
                                (balance1 || 0).toLocaleString()
                            ]
                        }),
                        (counter === null || counter === void 0 ? void 0 : counter.itemsAvailable) ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                counter === null || counter === void 0 ? void 0 : counter.itemsRemaining,
                                " of ",
                                counter === null || counter === void 0 ? void 0 : counter.itemsAvailable,
                                " Available"
                            ]
                        }) : null
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: !wallet ? /*#__PURE__*/ jsx_runtime_.jsx(components/* SelectAndConnectWalletButton */.lw, {
                        onUseWalletClick: ()=>{}
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        disabled: isSoldOut || isMinting || !isActive,
                        onClick: onMint,
                        className: "btn btn-primary btn-wide btn-lg",
                        children: isSoldOut ? "SOLD OUT" : isActive ? isMinting ? /*#__PURE__*/ jsx_runtime_.jsx(components/* Loader */.aN, {
                            noText: true
                        }) : `MINT for ◎${price1}` : /*#__PURE__*/ jsx_runtime_.jsx((external_react_countdown_default()), {
                            date: startDate,
                            onMount: ({ completed  })=>completed && setIsActive(true)
                            ,
                            onComplete: ()=>setIsActive(true)
                            ,
                            renderer: renderCounter
                        })
                    })
                })
            ]
        })
    }));
};
const renderCounter = ({ days , hours , minutes , seconds , completed  })=>{
    if (!seconds) return(/*#__PURE__*/ jsx_runtime_.jsx("span", {
        children: "Loading..."
    }));
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        children: [
            hours,
            " hours, ",
            minutes,
            " minutes, ",
            seconds,
            " seconds"
        ]
    }));
};

;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/config.ts
const config = {
    CANDY_MACHINE_CONFIG: "6vbr5zpU44G4Ni2S36S6m7bhjMwy4ZiabVG5nJnxWWeK",
    CANDY_MACHINE_ID: "4f2UZyh476EMGeMo12yRmmxYNBHnGhjyvuwQJMBAnKbd",
    CANDY_START_DATE: "1639155600",
    TREASURY_ADDRESS: "CBBUMHRmbVUck99mTCip5sHP16kzGj3QTYB8K3XxwmQx"
};

// EXTERNAL MODULE: ./src/views/CandyMachineMintView/index.module.css
var index_module = __webpack_require__(9683);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/index.tsx

/**
 * This is template for Candy Machine v.1
 *
 *
 *
 *
 * Most likely you don't need it since Candy Machine is updated to v.2
 * which is differnt from v.1
 *
 *
 *
 *
 *
 *
 *
 */ 






const treasury = new anchor_.web3.PublicKey(config.TREASURY_ADDRESS);
const candyMachineConfig = new anchor_.web3.PublicKey(config.CANDY_MACHINE_CONFIG);
const candyMachineId = new anchor_.web3.PublicKey(config.CANDY_MACHINE_ID);
const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE, 10);
const txTimeout = 30000; // milliseconds (confirm this works for your project)
const CandyMachineMintView = ({})=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container mx-auto max-w-6xl p-8 2xl:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (index_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-square btn-ghost",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-4xl",
                                    children: "🍬"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-1 px-2 mx-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-sm breadcrumbs",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "text-xl",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Templates"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "opacity-40",
                                                children: "NFT Mint UI"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* WalletMultiButton */.aD, {
                                className: "btn btn-ghost"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-center pt-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "hero min-h-16 py-20",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-center hero-content",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "max-w-lg",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                            className: "mb-5 text-5xl",
                                            children: [
                                                "Candy Machine Mint UI ",
                                                /*#__PURE__*/ jsx_runtime_.jsx(components/* SolanaLogo */.T7, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "mb-5",
                                            children: [
                                                "Here is very basic example of minting site. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                "It uses",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://github.com/exiled-apes/candy-machine-mint",
                                                    target: "_blank",
                                                    className: "link font-bold",
                                                    rel: "noreferrer",
                                                    children: "exiled-apes/candy-machine-mint"
                                                }),
                                                " ",
                                                "code migrated to be used with Next.JS app."
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "UI connects to DEVNET network."
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(MintSection, {
                                candyMachineId: candyMachineId,
                                config: candyMachineConfig,
                                startDate: startDateSeed,
                                treasury: treasury,
                                txTimeout: txTimeout
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "max-w-xl mx-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "mb-5 mt-16 text-5xl",
                                    children: "Description:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "You can test this Candy Machine mint on Devnet.",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "Switch to Devnet in ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("code", {
                                            children: "src/pages/_app.tsx"
                                        }),
                                        " file. And run app locally."
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Edit ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("code", {
                                            children: "src/views/CandyMachineMintView/config.ts"
                                        }),
                                        " to use your own Candy Machine.",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        " You can read details about variables on",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://github.com/exiled-apes/candy-machine-mint#environment-variables",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "link hover:underline",
                                            children: "exiled-apes/candy-machine-mints Github"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Always set custom RPC server for the final mint site. ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "You can do it here: ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("code", {
                                            children: "src/pages/_app.tsx"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "Otherwise, Solana can ban your website for overusing RPC server. You dont want it in the middle of your mint 😳"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};


/***/ }),

/***/ 6342:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ NftCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6649);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);
swr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const NftCard = ({ details , onSelect , onTokenDetailsFetched =()=>{} ,  })=>{
    const { 0: fallbackImage , 1: setFallbackImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    var ref;
    const { name , uri  } = (ref = details === null || details === void 0 ? void 0 : details.data) !== null && ref !== void 0 ? ref : {};
    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(// uri || url ? getMetaUrl(details) : null,
    uri, utils_fetcher__WEBPACK_IMPORTED_MODULE_4__/* .fetcher */ ._, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    // console.log("data", data);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!error && !!data) {
            onTokenDetailsFetched(data);
        }
    }, [
        data,
        error
    ]);
    const onImageError = ()=>setFallbackImage(true)
    ;
    const { image  } = data !== null && data !== void 0 ? data : {};
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `card bordered max-w-xs compact rounded-md`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                className: "min-h-16 animation-pulse-color",
                children: !fallbackImage || !error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: image,
                    onError: onImageError,
                    className: "bg-gray-800 object-cover"
                }) : // Fallback when preview isn't available
                // This could be broken image, video, or audio
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-auto h-48 flex items-center justify-center bg-gray-900 bg-opacity-40",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.EyeOffIcon, {
                        className: "h-16 w-16 text-white-500"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "card-body",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "card-title text-sm text-left",
                    children: name
                })
            })
        ]
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3130:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ GalleryView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7257);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7843);
/* harmony import */ var _nfteyez_sol_rayz_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6557);
/* harmony import */ var _nfteyez_sol_rayz_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nfteyez_sol_rayz_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9669);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _NftCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6342);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8962);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_NftCard__WEBPACK_IMPORTED_MODULE_6__]);
_NftCard__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const walletPublicKey = "3EqUrFrjgABCWAnqMYjZ36GcktiwDtFdkNYwY6C6cDzy";
const GalleryView = ({})=>{
    var ref;
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__/* .useConnection */ .R)();
    const { 0: walletToParsePublicKey , 1: setWalletToParsePublicKey  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(walletPublicKey);
    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__/* .useWallet */ .O)();
    const { nfts , isLoading , error  } = (0,_nfteyez_sol_rayz_react__WEBPACK_IMPORTED_MODULE_4__.useWalletNfts)({
        publicAddress: walletToParsePublicKey,
        connection
    });
    console.log("nfts", nfts);
    const onChange = (e)=>{
        const { value  } = e.target;
        setWalletToParsePublicKey(value.trim());
    };
    const onUseWalletClick = ()=>{
        if (publicKey) {
            setWalletToParsePublicKey(publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58());
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mx-auto max-w-6xl p-8 2xl:px-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "btn btn-square btn-ghost",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-4xl",
                                    children: "🏞"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-1 px-2 mx-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-sm breadcrumbs",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "text-xl",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: "Templates"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "opacity-40",
                                                children: "NFT Gallery"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__/* .WalletMultiButton */ .aD, {
                                className: "btn btn-ghost"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center pt-2",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hero min-h-16 p-0 pt-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-center hero-content w-full",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: "mb-5 text-5xl",
                                        children: [
                                            "NFT Gallery on Solana ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_5__/* .SolanaLogo */ .T7, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "w-full min-w-full",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "mb-5",
                                                children: [
                                                    "Here is very basic example of NFT Gallery. It parses mainnet. ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    "And uses",
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "https://www.npmjs.com/package/@nfteyez/sol-rayz-react",
                                                        target: "_blank",
                                                        className: "link font-bold",
                                                        rel: "noreferrer",
                                                        children: "@nfteyez/sol-rayz-react"
                                                    }),
                                                    " ",
                                                    "package to fetch NFTs for specific wallet."
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "form-control mt-8",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        className: "input-group input-group-vertical input-group-lg",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: "Search"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                        type: "text",
                                                                        placeholder: "Enter Wallet Address",
                                                                        className: "w-full input input-bordered input-lg",
                                                                        value: walletToParsePublicKey,
                                                                        onChange: onChange,
                                                                        style: {
                                                                            borderRadius: "0 0 var(--rounded-btn,.5rem) var(--rounded-btn,.5rem)"
                                                                        }
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_5__/* .SelectAndConnectWalletButton */ .lw, {
                                                                        onUseWalletClick: onUseWalletClick
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "my-10",
                                        children: [
                                            error ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        children: "Error Occures"
                                                    }),
                                                    (ref = error) === null || ref === void 0 ? void 0 : ref.message
                                                ]
                                            }) : null,
                                            !error && isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_5__/* .Loader */ .aN, {})
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NftList, {
                                                nfts: nfts,
                                                error: error
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    }));
};
const NftList = ({ nfts , error  })=>{
    if (error) {
        return null;
    }
    if (!(nfts === null || nfts === void 0 ? void 0 : nfts.length)) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "text-center text-2xl pt-16",
            children: "No NFTs found in this wallet"
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-4 items-start",
        children: nfts === null || nfts === void 0 ? void 0 : nfts.map((nft)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NftCard__WEBPACK_IMPORTED_MODULE_6__/* .NftCard */ .y, {
                details: nft,
                onSelect: ()=>{}
            }, nft.mint)
        )
    }));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ HomeView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7257);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7843);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3213);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);






const HomeView = ({})=>{
    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__/* .useWallet */ .O)();
    const onClick = ()=>{};
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mx-auto max-w-6xl p-8 2xl:px-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "btn btn-square btn-ghost",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-4xl",
                                    children: "🦤"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-1 px-2 mx-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-lg font-bold",
                                children: "Caw Caw"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__/* .WalletMultiButton */ .aD, {
                                className: "btn btn-ghost"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center pt-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hero min-h-16 py-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-center hero-content",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "max-w-lg",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            className: "mb-5 text-5xl font-bold",
                                            children: [
                                                "Hello Solana ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_3__/* .SolanaLogo */ .T7, {}),
                                                " World!"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mb-5",
                                            children: "This scaffold includes awesome tools for rapid development and deploy dapps to Solana: Next.JS, TypeScript, TailwindCSS, Daisy UI."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mb-5",
                                            children: "Sollana wallet adapter is connected and ready to use."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: publicKey ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    "Your address: ",
                                                    publicKey.toBase58()
                                                ]
                                            }) : null
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "max-w-4xl mx-auto",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "mb-5 pb-8 text-5xl",
                                    children: "Templates:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "text-left leading-10",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "mb-5",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                href: "/gallery",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "text-4xl font-bold hover:underline",
                                                    children: "🏞 -- NFT Gallery"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                href: "/tweeter",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "mb-5 text-4xl font-bold hover:underline",
                                                    children: "🐦 -- Solana Tweeter"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};


/***/ }),

/***/ 9125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* binding */ SolanaTweeterView)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/index.js + 11 modules
var lib = __webpack_require__(7843);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useAnchorWallet.js
var useAnchorWallet = __webpack_require__(8877);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
// EXTERNAL MODULE: external "lodash.orderby"
var external_lodash_orderby_ = __webpack_require__(9203);
var external_lodash_orderby_default = /*#__PURE__*/__webpack_require__.n(external_lodash_orderby_);
// EXTERNAL MODULE: ./src/components/index.tsx + 3 modules
var components = __webpack_require__(0);
// EXTERNAL MODULE: external "@project-serum/anchor"
var anchor_ = __webpack_require__(1024);
// EXTERNAL MODULE: ./src/views/SolanaTweeterView/index.module.css
var index_module = __webpack_require__(9987);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: external "bs58"
var external_bs58_ = __webpack_require__(390);
;// CONCATENATED MODULE: ./src/views/SolanaTweeterView/Tweet.ts
class Tweet {
    constructor(publicKey, accountData){
        this.publicKey = publicKey;
        this.author = accountData.author;
        this.timestamp = accountData.timestamp.toString();
        this.topic = accountData.topic;
        this.content = accountData.content;
    }
    get key() {
        return this.publicKey.toBase58();
    }
    get authorDisplay() {
        const author = this.author.toBase58();
        return author.slice(0, 4) + ".." + author.slice(-4);
    }
    get createdAt() {
        const date = getDate(this.timestamp);
        return date.toLocaleDateString();
    }
    get createdAgo() {
        const date = getDate(this.timestamp);
        return timeSince(date);
    }
}
// convert unix timestamp to js date object
const getDate = (timestamp)=>{
    const utxDate = parseInt(timestamp);
    const date = new Date(utxDate * 1000);
    return date;
};
function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}
var aDay = (/* unused pure expression or super */ null && (24 * 60 * 60 * 1000));

;// CONCATENATED MODULE: ./src/views/SolanaTweeterView/tweets.ts



const getTweets = async ({ program , filter =[]  })=>{
    const tweetsRaw = await program.account.tweet.all(filter);
    const tweets = tweetsRaw.map((t)=>new Tweet(t.publicKey, t.account)
    );
    return tweets;
};
const authorFilter = (authorBase58PublicKey)=>({
        memcmp: {
            offset: 8,
            bytes: authorBase58PublicKey
        }
    })
;
const topicFilter = (topic)=>({
        memcmp: {
            offset: 8 + 32 + 8 + 4,
            bytes: bs58.encode(Buffer.from(topic))
        }
    })
;
const sendTweet = async ({ wallet , program , topic , content  })=>{
    // Generate a new Keypair for our new tweet account.
    const tweet = anchor_.web3.Keypair.generate();
    // Send a "SendTweet" instruction with the right data and the right accounts.
    await program.rpc.sendTweet(topic, content, {
        accounts: {
            author: wallet.publicKey,
            tweet: tweet.publicKey,
            systemProgram: anchor_.web3.SystemProgram.programId
        },
        signers: [
            tweet
        ]
    });
    // Fetch the newly created account from the blockchain may not work
    // new account can be not found because it takes some time to confirm TX.
    // const tweetAccount = await program.account.tweet.fetch(tweet.publicKey);
    // instead we return object with same data
    const newTweetAccount = {
        author: wallet.publicKey,
        timestamp: new anchor_.BN(new Date().getTime()),
        topic,
        content
    };
    // Wrap the fetched account in a Tweet model so our frontend can display it.
    return new Tweet(tweet.publicKey, newTweetAccount);
};

// EXTERNAL MODULE: external "@solana/web3.js"
var web3_js_ = __webpack_require__(7831);
;// CONCATENATED MODULE: ./src/views/SolanaTweeterView/solana-tweeter-idl.json
const solana_tweeter_idl_namespaceObject = JSON.parse('{"version":"0.1.0","name":"rust","instructions":[{"name":"sendTweet","accounts":[{"name":"tweet","isMut":true,"isSigner":true},{"name":"author","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"topic","type":"string"},{"name":"content","type":"string"}]}],"accounts":[{"name":"Tweet","type":{"kind":"struct","fields":[{"name":"author","type":"publicKey"},{"name":"timestamp","type":"i64"},{"name":"topic","type":"string"},{"name":"content","type":"string"}]}}],"errors":[{"code":6000,"name":"TopicTooLong","msg":"The provided topic should be 50 chars long maximum."},{"code":6001,"name":"ContentTooLong","msg":"The provided content should be 280 chars long max."}],"metadata":{"address":"926GETHcFsLU3vDWQUEnTpWYRYXktK6gCCfzivjFq4pa"}}');
;// CONCATENATED MODULE: ./src/views/SolanaTweeterView/useProgram.ts




const SOLANA_TWITTER_PROGRAM = "926GETHcFsLU3vDWQUEnTpWYRYXktK6gCCfzivjFq4pa";
const programID = new web3_js_.PublicKey(SOLANA_TWITTER_PROGRAM);
const useProgram = ({ connection , wallet  })=>{
    const { 0: program1 , 1: setProgram  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        updateProgram();
    }, [
        connection,
        wallet
    ]);
    const updateProgram = ()=>{
        const provider = new anchor_.Provider(connection, wallet, {
            preflightCommitment: "recent",
            commitment: "processed"
        });
        console.log("provider", provider);
        //   const idl = await anchor.Program.fetchIdl(programID, provider);
        //   console.log("idl", idl);
        const program = new anchor_.Program(solana_tweeter_idl_namespaceObject, programID, provider);
        setProgram(program);
    };
    return {
        program: program1
    };
};

;// CONCATENATED MODULE: ./src/views/SolanaTweeterView/index.tsx













const endpoint = "https://explorer-api.devnet.solana.com";
const connection = new anchor_.web3.Connection(endpoint);
const SolanaTweeterView = ({})=>{
    const { 0: isAirDropped , 1: setIsAirDropped  } = (0,external_react_.useState)(false);
    const wallet = (0,useAnchorWallet/* useAnchorWallet */.z)();
    const airdropToWallet = async ()=>{
        if (wallet) {
            setIsAirDropped(false);
            const signature = await connection.requestAirdrop(wallet.publicKey, 1000000000);
            const tx = await connection.confirmTransaction(signature);
            setIsAirDropped(true);
        }
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container mx-auto max-w-6xl p-8 2xl:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (index_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-square btn-ghost",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-4xl",
                                    children: "🐦"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-1 px-2 mx-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text-sm breadcrumbs",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "text-xl",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "Templates"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "opacity-40",
                                                children: "Solana Twitter"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(lib/* WalletMultiButton */.aD, {
                                className: "btn btn-ghost"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-center pt-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hero min-h-16 pt-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-center hero-content",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "max-w-lg",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                        className: "mb-5 text-5xl",
                                        children: [
                                            "Solana Twitter ",
                                            /*#__PURE__*/ jsx_runtime_.jsx(components/* SolanaLogo */.T7, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "mb-5",
                                        children: [
                                            "Here is simplified version of Twitter as a Solana dApp. ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "It aims to be Next.JS UI build for",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://lorisleiva.com/create-a-solana-dapp-from-scratch",
                                                target: "_blank",
                                                className: "link font-bold",
                                                rel: "noreferrer",
                                                children: "Create a Solana dApp from scratch"
                                            }),
                                            " ",
                                            "tutorial."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "UI connects to DEVNET network."
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex mb-16",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mr-4",
                            children: "Need some SOL on test wallet?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mr-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-primary normal-case btn-xs",
                                onClick: airdropToWallet,
                                children: "Airdrop 1 SOL"
                            })
                        }),
                        isAirDropped ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "opacity-50",
                            children: "Sent!"
                        }) : null
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: !wallet ? /*#__PURE__*/ jsx_runtime_.jsx(components/* SelectAndConnectWalletButton */.lw, {
                        onUseWalletClick: ()=>{}
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(TwitterScreen, {})
                })
            ]
        })
    }));
};
const TwitterScreen = ()=>{
    const wallet = (0,useAnchorWallet/* useAnchorWallet */.z)();
    const { 0: activeTab , 1: setActiveTab  } = (0,external_react_.useState)(0);
    const { 0: tweets1 , 1: setTweets  } = (0,external_react_.useState)([]);
    const { 0: profileTweets , 1: setProfileTweets  } = (0,external_react_.useState)([]);
    const { program  } = useProgram({
        connection,
        wallet
    });
    const { 0: lastUpdatedTime , 1: setLastUpdatedTime  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        fetchTweets();
        fetchProfileTweets();
    }, [
        wallet,
        lastUpdatedTime
    ]);
    const fetchTweets = async ()=>{
        if (wallet && program) {
            try {
                const tweets = await getTweets({
                    program
                });
                setTweets(tweets);
            } catch (error) {
            // set error
            }
        }
    };
    const fetchProfileTweets = async ()=>{
        if (wallet && program) {
            try {
                const tweets = await getTweets({
                    program,
                    // topicFilter('solana'),
                    filter: [
                        authorFilter(wallet === null || wallet === void 0 ? void 0 : wallet.publicKey.toBase58())
                    ]
                });
                setProfileTweets(tweets);
            } catch (error) {
            // set error
            }
        }
    };
    const onTweenSent = (newTweet)=>{
        setTweets((prevState)=>({
                ...prevState,
                newTweet
            })
        );
    };
    const sortedTweets = external_lodash_orderby_default()(tweets1, [
        "timestamp"
    ], [
        "desc"
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "rounded-lg shadow flex",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border-r border-gray-500 mr-8",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "menu p-4 overflow-y-auto bg-base-100 text-base-content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: activeTab === 0 ? "active" : "",
                                onClick: ()=>setActiveTab(0)
                                ,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.HomeIcon, {
                                    className: "h-8 w-8 text-white-500"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: activeTab === 1 ? "active" : "",
                                onClick: ()=>setActiveTab(1)
                                ,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.UserIcon, {
                                    className: "h-8 w-8 text-white-500"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col items-center justify-center",
                children: activeTab === 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-xs",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(NetTweet, {
                            onTweenSent: onTweenSent
                        }),
                        sortedTweets.map((t)=>/*#__PURE__*/ jsx_runtime_.jsx(SolanaTweeterView_Tweet, {
                                content: t
                            }, t.key)
                        )
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx(TwitterProfile, {
                    tweets: profileTweets,
                    wallet: wallet
                })
            })
        ]
    }));
};
const NetTweet = ({ onTweenSent  })=>{
    const wallet = (0,useAnchorWallet/* useAnchorWallet */.z)();
    const { program  } = useProgram({
        connection,
        wallet
    });
    const { 0: content , 1: setContent  } = (0,external_react_.useState)("");
    const onContentChange = (e)=>{
        const { value  } = e.target;
        if (value) {
            setContent(value);
        }
    };
    const onTweetSendClick = async ()=>{
        if (!content || !program) return;
        const topic = "default";
        const tweet = await sendTweet({
            wallet,
            program,
            topic,
            content
        });
        console.log("added new tweet: ", tweet);
        setContent("");
        onTweenSent(tweet);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-8 pb-4 border-b border-gray-500 flex ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "avatar placeholder mr-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-4 rounded-full bg-neutral-focus text-neutral-content w-14 h-14",
                    children: "Me"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "form-control flex-1 mx-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                    className: "textarea h-24 w-full text-2xl",
                    placeholder: "What's happening?",
                    value: content,
                    onChange: onContentChange
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ml-auto",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "btn btn-primary rounded-full normal-case px-16",
                    onClick: onTweetSendClick,
                    children: "Tweet"
                })
            })
        ]
    }));
};
const SolanaTweeterView_Tweet = ({ content  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-8 border-b border-gray-500 flex",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "avatar placeholder mr-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-4 rounded-full bg-neutral-focus text-neutral-content w-14 h-14",
                    children: content.authorDisplay.slice(0, 2)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex text-sm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "font-bold",
                                children: content.authorDisplay
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mx-2 opacity-50",
                                children: "\xb7"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "opacity-50",
                                children: content.createdAgo
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-xl",
                        children: content.content
                    }),
                    content.topic ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-pink-400 my-2",
                        children: [
                            "#",
                            content.topic
                        ]
                    }) : null
                ]
            })
        ]
    }));
};
const TwitterProfile = ({ tweets , wallet  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex-1 text-left width-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: "Profile"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: wallet.publicKey.toString()
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "my-8",
                children: [
                    tweets.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-3xl opacity-50 text-center",
                        children: "You have no tweets"
                    }) : null,
                    tweets.map((t)=>/*#__PURE__*/ jsx_runtime_.jsx(SolanaTweeterView_Tweet, {
                            content: t
                        }, t.key)
                    )
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 7920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ug": () => (/* reexport safe */ _HomeView__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "Hr": () => (/* reexport safe */ _GalleryView__WEBPACK_IMPORTED_MODULE_1__.H),
/* harmony export */   "IG": () => (/* reexport safe */ _CandyMachineMintView__WEBPACK_IMPORTED_MODULE_2__.I),
/* harmony export */   "mV": () => (/* reexport safe */ _SolanaTweeterView__WEBPACK_IMPORTED_MODULE_3__.m)
/* harmony export */ });
/* harmony import */ var _HomeView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7610);
/* harmony import */ var _GalleryView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3130);
/* harmony import */ var _CandyMachineMintView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1098);
/* harmony import */ var _SolanaTweeterView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9125);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_GalleryView__WEBPACK_IMPORTED_MODULE_1__]);
_GalleryView__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;