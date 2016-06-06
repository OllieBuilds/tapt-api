TOKEN=hQOZbTdnjhJTRdVAcybberugEPxGVAE5Yf75bRAQ7FY=--8CZN32tMX+sFzS2HMYWanPG3s4VL3CWKgZqbFZ7CjIU=
curl --include --request DELETE http://localhost:3000/favorites \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{"_id": "5755b0607db2e04f825e0def"}'
