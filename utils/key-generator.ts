import crypto from 'crypto'
import clientKeys from '../globals/clientKeyMap'

export function generateSharedKey(clientPort: number, clientPublicKeyHex: any) {
  
   // ECDH Key Generator
  const ecdh = crypto.createECDH('secp256k1')
  ecdh.generateKeys()
  const publicKey = ecdh.getPublicKey().toString('hex')
  const clientPublicKey = Buffer.from(clientPublicKeyHex, 'hex')
  const sharedKey = ecdh.computeSecret(clientPublicKey)
  clientKeys.set(clientPort, sharedKey)
  console.log('Ini shared key di server', sharedKey.toString('hex'))
  return publicKey
}
