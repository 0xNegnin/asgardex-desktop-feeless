import { WalletMessages } from '../types'

const wallet: WalletMessages = {
  'wallet.name': 'Wallet Name',
  'wallet.name.maxChars': 'Max. {max} Zeichen',
  'wallet.name.error.empty': 'Bitte gib einen Namen für Deine Wallet ein',
  'wallet.name.error.duplicated': 'Dieser Name existiert bereits, bitte einen anderen verwenden.',
  'wallet.name.error.rename': 'Fehler beim Umbenennen der Wallet',
  'wallet.nav.portfolio': 'Portfolio',
  'wallet.nav.deposits': 'Einzahlungen',
  'wallet.nav.bonds': 'Bonds',
  'wallet.nav.poolshares': 'Anteile',
  'wallet.nav.savers': 'Sparer',
  'wallet.nav.runepool': 'Rune-Pool',
  'wallet.column.name': 'Name',
  'wallet.column.ticker': 'Ticker',
  'wallet.action.send': 'Senden',
  'wallet.action.receive': 'Empfangen',
  'wallet.action.receive.title': 'Empfangen {asset}',
  'wallet.action.forget': 'Entfernen',
  'wallet.action.unlock': 'Entsperren',
  'wallet.action.import': 'Importieren',
  'wallet.action.create': 'Erstellen',
  'wallet.action.connect': 'Verbinden',
  'wallet.action.deposit': 'Einzahlung',
  'wallet.balance.total.poolAssets': 'Gesamtbilanz der Wallet-Assets',
  'wallet.balance.total.poolAssets.info':
    'Gesamtbilanz der Wallet-Assets unter Verwendung von Pooldaten von Thorchain & Mayachain. Nur über Pools können Preise bei THORChain ermittelt werden.',
  'wallet.balance.total.tradeAssets': 'Gesamtsaldo der Handelswerte',
  'wallet.balance.total.tradeAssets.info':
    'Gesamtsaldo der Handelswerte unter Verwendung von Pool-Daten von Thorchain. Pools sind die Quelle, um Preise bei THORChain zu bestimmen',
  'wallet.shares.total': 'Gesamtwert',
  'wallet.connect.instruction': 'Bitte verbinde Deine Wallet',
  'wallet.lock.label': 'Wallet sperren',
  'wallet.unlock.title': 'Entsperre "{name}"',
  'wallet.unlock.label': 'Wallet entsperren',
  'wallet.unlock.instruction': 'Bitte entsperre Deine Wallet',
  'wallet.unlock.password': 'Bitte gib Dein Passwort ein',
  'wallet.unlock.error':
    'Die Wallet konnte nicht entsperrt werden. Bitte überprüfe Dein Passwort und versuche es erneut.',
  'wallet.imports.keystore.select': 'Keystore-Datei auswählen',
  'wallet.imports.keystore.title': 'Bitte wähle die Keystore-Datei Deiner Wallet',
  'wallet.imports.phrase.title':
    'Bitte gib die Phrase Deiner Wallet ein, jeweils mit einem Leerzeichen zwischen den Wörtern',
  'wallet.imports.wallet': 'Importiere eine bestehende Wallet',
  'wallet.imports.enterphrase': 'Phrase eingeben',
  'wallet.imports.error.instance': 'Es konnte keine Instanz vom Client erstellt werden',
  'wallet.imports.error.keystore.load': 'Ungültige Keystore-Datei',
  'wallet.imports.error.keystore.import': 'Fehler beim Importieren der Keystore Wallets',
  'wallet.imports.error.ledger.import': 'Fehler beim Importieren der Ledger Accounts',
  'wallet.imports.error.keystore.password': 'Ungültiges Passwort',
  'wallet.phrase.error.valueRequired': 'Bitte Phrase angeben',
  'wallet.imports.error.phrase.empty': 'Importiere eine bestehende Wallet mit Guthaben',
  'wallet.phrase.error.invalid': 'Ungültige Phrase',
  'wallet.phrase.error.import': 'Fehler beim Importieren der Phrase',
  'wallet.txs.history': 'Transaktionsverlauf',
  'wallet.txs.history.disabled': 'Transaktionsverlauf für {chain} ist vorübergehend nicht verfügbar',
  'wallet.create.copy.phrase': 'Phrase kopieren',
  'wallet.create.error.phrase.empty': 'Erstelle eine neue Wallet und füge ein Guthaben hinzu',
  'wallet.add.another': 'Weitere Wallet hinzufügen',
  'wallet.add.label': 'Wallet hinzufügen',
  'wallet.change.title': 'Wallet wechseln',
  'wallet.change.error': 'Fehler beim Wechseln der Wallet',
  'wallet.selected.title': 'Ausgewählte Wallet',
  'wallet.create.title': 'Erstelle eine Wallet',
  'wallet.create.enter.phrase': 'Gib Deine Phrase in richtiger Reihenfolge ein',
  'wallet.create.words.click': 'Klicke die Wörter in der richtigen Reihenfolge',
  'wallet.create.creating': 'Erstelle eine Wallet…',
  'wallet.create.error': 'Fehler beim Erstellen der Wallet',
  'wallet.create.error.phrase': 'Falsche Phrase. Bitte überprüfe Deine Phrase und gib diese erneut ein.',
  'wallet.receive.address.error': 'Keine Adresse für den Empfang vorhanden',
  'wallet.receive.address.errorQR': 'Fehler beim Rendern des QR Codes: {error}',
  'wallet.remove.label': 'Wallet entfernen',
  'wallet.remove.label.title': 'Bist Du sicher, dass Du "{name}" entfernen möchtest?',
  'wallet.remove.label.description':
    'Zur Wiederherstellung Deiner Wallet benötigst Du Deine Phrase. Bitte stelle sicher, dass Du diese bereits an einem sicheren Ort abgelegt hast',
  'wallet.send.success': 'Transaktion war erfolgreich.',
  'wallet.send.fastest': 'Am schnellsten',
  'wallet.send.fast': 'Schnell',
  'wallet.send.affiliateTracking': 'Swap-Memo erkannt, 10 Basispunkte Affiliate-Gebühr angewendet',
  'wallet.send.notAllowed': 'Nicht erlaubt',
  'wallet.send.average': 'Mittel',
  'wallet.send.fundsLoss': 'Gelder werden beim Senden an diese Adresse verloren gehen.',
  'wallet.send.max.doge':
    'Der berechnete Maximalwert basiert auf geschätzten Gebühren, welche bei DOGE von Zeit zu Zeit inkorrekt sein können. Im Falle eines "Balance Insufficient for transaction" Fehlers, gehe zu https://blockchair.com/dogecoin/transactions, um einen Durchschnittswert der aktuellen Gebühren zu erhalten und versuche diese von Deiner Balance abzuziehen, bevor Du die Transaktion versendest.',
  'wallet.errors.balancesFailed': 'Fehler beim Laden der Guthaben. {errorMsg}',
  'wallet.errors.asset.notExist': 'Asset ({asset}) existiert nicht',
  'wallet.errors.address.empty': 'Keine Adresse angegeben',
  'wallet.errors.address.invalid': 'Adresse ist nicht valide',
  'wallet.errors.address.inbound': 'Vorsicht: Eingehende Adresse erkannt',
  'wallet.errors.address.couldNotFind': 'Adresse vom {pool} Pool konnte nicht gefunden werden',
  'wallet.errors.amount.shouldBeNumber': 'Der eingegebene Wert sollte eine Zahl sein',
  'wallet.errors.amount.shouldBeGreaterThan': 'Der eingegebene Betrag sollte höher als {amount} sein',
  'wallet.errors.amount.shouldBeGreaterOrEqualThan':
    'Der eingegebene Betrag sollte gleich oder höher als {amount} sein',
  'wallet.errors.amount.shouldBeLessThanBalance': 'Der eingegebene Betrag sollte nicht höher als Dein Guthaben sein',
  'wallet.errors.amount.shouldBeLessThanBalanceAndFee':
    'Der eingegebene Wert sollte nicht höher als Dein Guthaben abzgl. Gebühren sein',
  'wallet.errors.fee.notCovered': 'Die Gebühren sind nicht über Dein Guthaben ({balance}) gedeckt',
  'wallet.errors.invalidChain': 'Ungültige Chain: {chain}',
  'wallet.errors.memo.max': 'Memo darf nicht mehr als {max} Zeichen beinhalten',
  'wallet.password.confirmation.title': 'Wallet Passwort bestätigen',
  'wallet.password.confirmation.description': 'Bitte gib zur Bestätigung Dein Wallet Passwort ein.',
  'wallet.password.confirmation.pending': 'Überprüfe Passwort',
  'wallet.password.empty': 'Bitte ein Passwort angeben',
  'wallet.password.confirmation.error': 'Passwort ist falsch',
  'wallet.password.repeat': 'Passwort wiederholen',
  'wallet.password.mismatch': 'Passwort stimmt nicht überein',
  'wallet.send.error': 'Fehler beim Versenden',
  'wallet.validations.lessThen': 'Der eingegebene Betrag sollte weniger als {value} betragen',
  'wallet.validations.graterThen': 'Der eingegebene Betrag sollte höher als {amount} betragen',
  'wallet.validations.shouldNotBeEmpty': 'Diese Angabe darf nicht leer sein.',
  'wallet.ledger.verifyAddress.modal.title': 'Ledger Adresse überprüfen',
  'wallet.ledger.verifyAddress.modal.description': 'Überprüfe die Adresse {address} auf Deinem Ledger',
  'wallet.ledger.removeAddress': 'Löschen Sie die Ledger-Adresse für die Kette {chain}',
  'wallet.ledger.viewAddress': 'Adresse im Explorer anzeigen'
}

export default wallet
