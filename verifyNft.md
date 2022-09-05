# VerifyNft

Verify nft.

// 8JWyCQzB3FBXMiZBdLd1L6nYneNaowwffC4DQWd4YEGk

**URL** : `/verifyNft/`

**Method** : `GET`

**Auth required** : NO

**Data constraints**:
Query Params

```json
{
  "verifyNft": "[valid email address]"
}
```

**Data example**

```json
{
  "verifyNft": "5sYajCWGHeM6Ru8FXCU6zhodQ2B9oyYiRJiqxGdYfZoo"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
"[nftAddress]
Nft creator is verified ✅"
```

## Error Response

**Condition** : If 'nftAddress' is wrong.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
 "Please put query parameters: nftAddress"
}
```
