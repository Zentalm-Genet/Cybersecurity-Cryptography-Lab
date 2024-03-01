class ZentalmCipher {
    constructor() {
        this.mapping = {};
        // Create the mapping
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < 26; i++) {
            this.mapping[alphabet[i]] = alphabet[25 - i];
        }
    }

    encipher(text) {
        let encryptedText = "";
        for (let char of text) {
            if (char.toUpperCase() in this.mapping) {
                encryptedText += char === char.toUpperCase() ? 
                                 this.mapping[char.toUpperCase()].toUpperCase() :
                                 this.mapping[char.toUpperCase()].toLowerCase();
            } else {
                encryptedText += char;
            }
        }
        return encryptedText;
    }

    decipher(text) {
        return this.encipher(text); // Deciphering is the same as enciphering in this cipher
    }
}

// Test the cipher
let cipher = new ZentalmCipher();
let originalText = "I love cryptography!";
let cipheredText = cipher.encipher(originalText);
console.log("Enciphered:", cipheredText);
let decipheredText = cipher.decipher(cipheredText);
console.log("Deciphered:", decipheredText);
