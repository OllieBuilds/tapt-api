TOKEN=hQOZbTdnjhJTRdVAcybberugEPxGVAE5Yf75bRAQ7FY=--8CZN32tMX+sFzS2HMYWanPG3s4VL3CWKgZqbFZ7CjIU=
curl --include --request POST http://localhost:3000/favorites \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
      "beer": {
        "id": 1,
        "name": "Beer",
        "abv": 6,
        "ibu": 72
      }
  }'
