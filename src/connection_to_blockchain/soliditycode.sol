// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserManagement {
    struct Data {
        string hash;
        string date;
        string filename;
    }

    struct User {
        string password;
        Data[] data;
    }

    mapping(string => User) users;

    function registerUser(string memory username, string memory password) public returns (bool) {
        if (bytes(users[username].password).length != 0) {
            return false; // User already exists
        }

        users[username].password = password;
        return true; // Registration successful
    }

    function login(string memory username, string memory password) public view returns (bool) {
        return keccak256(bytes(users[username].password)) == keccak256(bytes(password));
    }

    function isUserPresent(string memory username) public view returns (bool) {
        return bytes(users[username].password).length != 0;
    }

    function addDataHash(string memory username, string memory _hash,string memory _date,string memory _filename) public returns (bool) {
        if (!isUserPresent(username)) {
            return false; // User does not exist
        }

        Data memory newData = Data({
            hash: _hash,
            date: _date,
            filename: _filename
        });
        users[username].data.push(newData);
        return true; // Data added successfully
        
    }
    function getDataHash(string memory username) public view returns (Data[] memory) {
        return users[username].data;
    }
    
}