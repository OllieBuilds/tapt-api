TOKEN=hQOZbTdnjhJTRdVAcybberugEPxGVAE5Yf75bRAQ7FY=--8CZN32tMX+sFzS2HMYWanPG3s4VL3CWKgZqbFZ7CjIU=
curl --request GET http://localhost:3000/favorite \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" | jsonlint
