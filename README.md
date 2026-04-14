1 - Aggiorna la versione nel package.json della libreria
    (rispettando il Semantic Versioning)

2 - Esegui il build della libreria dalla root del progetto:
       ng build <nome-libreria>

3 - Entra nella cartella dist generata:
       cd dist/<nome-libreria>

4 - Verifica di essere loggato su npm con l'account corretto (twentyfivesrl):
       npm whoami

4.5 - Se necessario effettua il login:
       npm login

5 - Pubblica il pacchetto:
       npm publish

5.5 - Se richiesto, passa il codice OTP del 2FA:
        npm publish --otp=<codice>


6 - Verifica la pubblicazione su npmjs.com


7 - Nel progetto consumer, dopo la pubblicazione aggiorna la dipendenza:
        npm install <nome-libreria>@latest
