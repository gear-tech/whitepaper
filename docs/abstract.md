---
title: Abstract
sidebar_position: 1
slug: /
---

Blockchain, once viewed as an obscure and complex technology, is now widely known and starting to be used by a broad audience. Eventually, most relationships between people (trade, finance, legal, environments, entertainments etc) will have its foundations technically rooted on the blockchain. The rapid progress of this new and disruptive technology has been met with doubt and resistance, but innovation will continue forward and the world will be forced to adapt to the new reality enabled by this fundamental innovation.

However, the adoption of new technology has been limited by well-known technical problems of the first generations of blockchains that lead to poor scalability, high transaction costs, and lack of inter-networks communication.

Modern blockchains offer solutions to improve upon these limitations. Gear, however, provides more than just the most efficient interface for developing decentralized applications and running them as fast and cheaply as possible on a decentralized network. It uses the Actor model under the hood, which gives the option of parallel computing and async messages by design. Combining this technical architecture with the use of WASM allows applications to run with  near-native speed.

In short, Gear offers significant advantages relative to other modern blockchains and Substrate-based platforms running dApps on WebAssembly, namely:
1. More secure and robust due to utilizing Actor model for message communications between users and programs
2. Even faster because of parallelisation of message processing
3. Persistent memory approach to facilitate the development
4. Easier smart contract development, thanks to a custom Substrate runtime and native std library on Rust
5. Faster onboarding by providing smart contract examples for a majority of modern use cases.

This document will be useful primarily for smart contracts developers. It describes the technology, architecture, and components of Gear, what issues it addresses and how Gear differs from other dApp development solutions.