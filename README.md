## Diffie-Hellman

This repo describes how to **generate a shared secret between two clients**, Alice and Bob, using Diffie-Hellman key exchange. This repo uses modp15 group which will generate a key that is **3072 bits** long, but you can change the group number to get the desired bit length. The **RFC3526** text file is provided inside the repo for your use.

### How to use this repo

1. Clone the repo using

```bash
git clone https://github.com/trulymittal/diffie-hellman-shared-secret.git
```

2. Open terminal inside the downloaded project and install the dependencies using:

```bash
npm install
```

3. Finally run the script using:

```bash
npm start
```

## Authors

- [**Truly Mittal**](https://trulymittal.com)

## License

This project is licensed under the MIT License.
