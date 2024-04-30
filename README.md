# Secure-Med

Secure-Med is a web application designed to provide a secure platform for managing medical records and analyzing medical reports using Gemini API.

### Features

1. *Secure Medical Records*: Store and manage medical records  on IPFS securely, ensuring patient confidentiality.
2. *CostEffective Storage*: Utilising IPFS can reduce the cost of storage significantly by only storing the hash Value.
3. *Security* : Images are encrypted using the AES encryption algorithm to enhance security.
4. *Disease Prediction* : Disease Prediction using Random Forest Classifier on 41 Unique diseases with 132 Symptoms.
5. *Medical Report Analysis*: Analysing Patient medical reports using Gemini
6. *Treatment Plan* : Providing Treatment Plan based on Disease to Patients.


## 🌐 Sources
1. [Dataset](https://www.kaggle.com/datasets/kaushil268/disease-prediction-using-machine-learning)

## AES Encryption Algorithm

The Advanced Encryption Standard (AES) is a symmetric encryption algorithm widely adopted for securing sensitive data. It operates on blocks of data and supports key sizes of 128, 192, or 256 bits. AES is a substitution-permutation network (SPN) cipher, which means it combines substitutions and permutations in a series of rounds to encrypt plaintext into ciphertext.

### Working Principle

1. *Key Expansion*: The initial key undergoes an expansion process to generate a key schedule, producing a set of round keys used in each encryption round.

2. *Initial Round*: In the first round, the plaintext block is combined with the initial round key using bitwise XOR.

3. *Rounds*: AES consists of multiple rounds, each comprising four main operations:
   - *SubBytes*: Substitutes each byte of the state matrix with a corresponding byte from the S-box, a predefined lookup table.
   - *ShiftRows*: Shifts the rows of the state matrix cyclically to the left. Each row is shifted by a different offset.
   - *MixColumns*: Mixes the columns of the state matrix using a predefined matrix multiplication operation.
   - *AddRoundKey*: Performs a bitwise XOR operation between the state matrix and the round key.

4. *Final Round*: The final round excludes the MixColumns operation, maintaining the integrity of the data.

5. *Output*: After completing all rounds, the resulting state matrix represents the ciphertext.

### Security

AES is considered secure due to its resistance against various cryptographic attacks, including brute force attacks. Its strength lies in the complexity of its internal operations and the large key size options available.

### Implementation

AES encryption and decryption can be implemented using various programming languages and cryptographic libraries, such as OpenSSL in C/C++, PyCrypto in Python, or CryptoJS in JavaScript.

## 🌐 Sources
1. [Wikipedia - Advanced Encryption Standard](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)



## IPFS (InterPlanetary File System)

IPFS is a distributed protocol designed to create a peer-to-peer method of storing and sharing hypermedia in a distributed file system. It aims to replace traditional centralized HTTP-based communication with a decentralized and distributed approach. IPFS uses content-addressed hyperlinks to connect nodes in a network, enabling efficient and decentralized data storage and retrieval.

### Working Principle

1. *Content Addressing*: IPFS uses cryptographic hashing to generate unique content identifiers (CIDs) for each piece of content. Files are addressed based on their content, rather than their location.

2. *Distributed Hash Table (DHT)*: IPFS employs a DHT to store and retrieve content. Nodes in the network store content addressed by their CIDs and use the DHT to locate and retrieve content from other nodes.

3. *Content Discovery*: Content discovery in IPFS involves querying the network for specific content using its CID. Nodes can request content from other nodes directly or through the DHT.

4. *Content Delivery*: Content in IPFS is delivered through a swarm of interconnected nodes. When a node requests content, it retrieves pieces of the content from multiple nodes in the swarm, improving efficiency and redundancy.

### Pinata and IPFS Integration

Pinata is a service that provides tools and infrastructure for storing, managing, and distributing content on IPFS. It offers various features to simplify the process of interacting with IPFS, including:

1. *Pinning Service*: Pinata provides pinning services to ensure content remains available on IPFS. Pinning prevents content from being removed due to lack of popularity or network inactivity.

2. *Content Management*: Pinata offers a user-friendly interface for uploading, managing, and organizing content on IPFS. Users can easily upload files, view metadata, and update content as needed.

3. *API Integration*: Pinata provides APIs for programmatically interacting with IPFS. Developers can integrate Pinata's services into their applications to leverage IPFS for decentralized content storage and distribution.

4. *Data Redundancy*: Pinata employs data redundancy measures to ensure high availability and durability of content stored on IPFS. Content is replicated across multiple nodes in the IPFS network, reducing the risk of data loss.

Overall, Pinata simplifies the process of storing and managing documents on IPFS, making it accessible to developers and users alike.

## 🌐 Sources
1. [IPFS Documentation](https://docs.ipfs.io/concepts/what-is-ipfs/)
2. [Pinata Documentation](https://pinata.cloud/documentation)


## Smart Contract Integration with Pinata for Document Display

Integrating smart contracts with Pinata can enable the secure and decentralized display of documents on the blockchain. Smart contracts, powered by platforms like Ethereum, allow for programmable and self-executing agreements. When combined with Pinata, which provides tools for storing and managing content on IPFS, developers can create applications that leverage the benefits of both blockchain technology and decentralized file storage.

### Working Principle

1. *Document Upload*: Users upload documents to Pinata, which stores them on IPFS. Pinata generates a unique content identifier (CID) for each document.

2. *Smart Contract Interaction*: Smart contracts deployed on the blockchain contain logic for accessing and displaying documents. They typically include functions for retrieving documents based on their CIDs.

3. *Document Display*: Users interact with the smart contract through a decentralized application (DApp) interface. They can request specific documents by providing their corresponding CIDs.

4. *IPFS Retrieval*: The smart contract uses the provided CID to retrieve the document from IPFS via Pinata's pinning service. The document is then returned to the user through the DApp interface.

5. *Immutable Record*: The interaction between the smart contract and Pinata creates an immutable record of document access on the blockchain. This ensures transparency and auditability of document retrieval activities.

### Benefits

1. *Decentralization*: By leveraging IPFS and blockchain technology, document display becomes decentralized, eliminating single points of failure and reliance on centralized servers.

2. *Security*: Documents stored on IPFS are encrypted and distributed across multiple nodes, enhancing security and resilience against attacks.

3. *Transparency*: Smart contracts provide transparent and auditable interactions, enabling users to verify document retrieval activities on the blockchain.

4. *Immutable Records*: The integration of smart contracts with Pinata creates immutable records of document access, ensuring data integrity and accountability.

### Use Cases

1. *Medical Records*: Patients can securely access their medical records stored on IPFS through smart contracts, ensuring privacy and data integrity.

2. *Academic Credentials*: Educational institutions can issue and verify academic credentials stored on IPFS using smart contracts, reducing the risk of credential fraud.

3. *Legal Documents*: Law firms can store and access legal documents securely on IPFS via smart contracts, ensuring transparency and authenticity.

Integrating smart contracts with Pinata for document display opens up a wide range of possibilities for secure and decentralized document management on the blockchain.

## 🌐 Sources
1. [Pinata Documentation](https://pinata.cloud/documentation)
2. [Ethereum Documentation](https://ethereum.org/en/developers/docs/smart-contracts/)
3. [IPFS Documentation](https://docs.ipfs.io/concepts/what-is-ipfs/)


## Integrating Tesseract OCR and Gemini API for Medical Report Analysis

1. *Image to Text Conversion with Tesseract OCR*: Utilize Tesseract OCR library to extract text from medical report images.

3. *API Integration*: Integrate the Gemini API into your application to analyze the preprocessed text data. Authenticate your requests to the Gemini API using API keys and construct an analysis request containing the extracted text.

4. *Analysis Request*: Send a POST request to the Gemini API with the preprocessed text data for analysis. Specify the desired analysis type, such as sentiment analysis or entity recognition, in the request payload.

5. *Receive Analysis Results*: Receive the analysis results from the Gemini API in JSON format. Extract relevant information from the results, such as sentiment scores, identified entities, or key insights from the medical reports.

6. *Actionable Insights*: Utilize the extracted insights to derive actionable insights from the medical reports. These insights can inform healthcare decision-making processes, patient care plans, or research initiatives.









# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### npm test

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### npm run build

Builds the app for production to the build folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### npm run eject

*Note: this is a one-way operation. Once you eject, you can't go back!*

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### npm run build fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
