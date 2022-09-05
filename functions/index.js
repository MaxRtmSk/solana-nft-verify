const functions = require("firebase-functions");
const {Metaplex, keypairIdentity} = require("@metaplex-foundation/js");
const {
  Connection,
  clusterApiUrl,
  Keypair,
  PublicKey,
} = require("@solana/web3.js");

exports.verifyNft = functions.https.onRequest(async (req, res) => {
  const nftAddress = req.query.nftAddress;

  if (!nftAddress) {
    return res.status(400).send("Please put query parameters: nftAddress");
  }

  const connection = new Connection(clusterApiUrl("mainnet-beta"));
  const keypair = Keypair.generate();

  const metaplex = new Metaplex(connection);
  metaplex.use(keypairIdentity(keypair));

  const mint = new PublicKey(nftAddress);

  const nft = await metaplex.nfts().findByMint({mintAddress: mint}).run();

  const verifyCreators = nft.creators.filter((creator) => creator.verified);

  if (verifyCreators.length > 0) {
    return res.send(`${nftAddress} \n Nft creator is verified ✅`);
  }

  return res.send(`${nftAddress} \n Nft creator is not verified ❌`);
});
